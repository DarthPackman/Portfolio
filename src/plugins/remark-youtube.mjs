// Embeds any YouTube link that appears in a paragraph by adding a responsive
// player right after that paragraph. The original link stays as a fallback.
function parse(url) {
  let u;
  try { u = new URL(url); } catch { return null; }
  const host = u.hostname.replace(/^www\./, '');
  let id = null;
  if (host === 'youtu.be') id = u.pathname.slice(1);
  else if (host === 'youtube.com' || host === 'm.youtube.com') {
    if (u.pathname === '/watch') id = u.searchParams.get('v');
    else if (u.pathname.startsWith('/embed/') || u.pathname.startsWith('/shorts/')) id = u.pathname.split('/')[2];
  }
  const list = u.searchParams.get('list');
  if (id && /^[\w-]{11}$/.test(id)) {
    return `https://www.youtube-nocookie.com/embed/${id}${list && list.length >= 20 ? `?list=${list}` : ''}`;
  }
  if (host.endsWith('youtube.com') && u.pathname === '/playlist' && list && list.length >= 20) {
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${list}`;
  }
  return null;
}

function findLinks(node, out = []) {
  if (node.type === 'link') out.push(node.url);
  (node.children ?? []).forEach((c) => findLinks(c, out));
  return out;
}

export default function remarkYoutube() {
  return (tree) => {
    const next = [];
    for (const node of tree.children) {
      next.push(node);
      if (node.type !== 'paragraph') continue;
      const seen = new Set();
      for (const url of findLinks(node)) {
        const src = parse(url);
        if (!src || seen.has(src)) continue;
        seen.add(src);
        next.push({
          type: 'html',
          value: `<div class="video"><iframe src="${src}" title="Embedded YouTube video" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`,
        });
      }
    }
    tree.children = next;
  };
}
