const labels: Record<string, string> = { Csharp: "C#", Cplusplus: "C++" };
export const tagLabel = (t: string) => labels[t] ?? t;
