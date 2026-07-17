export type Language = "JAVASCRIPT" | "TYPESCRIPT" | "PYTHON" | "JAVA" | "CPP";

export interface Project {
  id: string;
  name: string;
  language: Language;
  createdAt: string;
}

export interface ReviewSummary {
  id: string;
  overallScore: number;
  summary: string;
  aiModel: string;
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";
  createdAt: string;
  project?: {
    id: string;
    name: string;
  };
}

export interface ReviewFinding {
  id: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  issue: string;
  explanation: string;
  suggestedFix: string;
  lineNumber?: number | null;
}

export interface StaticIssue {
  id: string;
  tool: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  message: string;
  lineNumber?: number | null;
}

export interface ReviewMetrics {
  complexity: number;
  maintainability: number;
  securityScore: number;
  performanceScore: number;
  readabilityScore: number;
}

export interface ReviewDetailData extends ReviewSummary {
  sourceCode: string;
  findings: ReviewFinding[];
  staticIssues: StaticIssue[];
  metrics?: ReviewMetrics | null;
  project: {
    id: string;
    name: string;
  };
}
