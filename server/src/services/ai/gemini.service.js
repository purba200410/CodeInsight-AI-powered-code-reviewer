const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function reviewCode(code, language, lintIssues = []) {
  const prompt = `
You are an expert Senior Software Engineer.

Analyze the following ${language} code.

Static Analysis:
${JSON.stringify(lintIssues, null, 2)}

Code:
\`\`\`${language.toLowerCase()}
${code}
\`\`\`

IMPORTANT:
Return ONLY valid JSON.
Do not include markdown.
Do not include explanations outside JSON.

Expected JSON:
{
  "overallScore": 90,
  "summary": "",
  "findings": [],
  "metrics": {
    "readability": 90,
    "performance": 90,
    "security": 90,
    "maintainability": 90
  }
}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    console.log("===== GEMINI RAW RESPONSE =====");
    console.dir(response, { depth: null });

    let text = response.text;

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("===== GEMINI TEXT =====");
    console.log(text);

    return JSON.parse(text);

  } catch (err) {
    console.error("Gemini Service Error:");
    console.error(err);
    throw err;
  }
}

module.exports = {
  reviewCode,
};