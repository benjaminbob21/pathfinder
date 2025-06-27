const API_BASE_URL = import.meta.env.API_BASE_URL || "http://localhost:7000/api";

export const analyzeWorkPatterns = async (data: string) => {
  const response = await fetch(`${API_BASE_URL}/openai/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const insights = await response.json();
  return insights;
};
