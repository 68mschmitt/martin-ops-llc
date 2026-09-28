export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  companySize: string;
  startingSituation: string;
  constraint: string;
  intervention: string[];
  execution: string[];
  timeline: string;
  measurableResults: string[];
  founderQuote: string;
  ongoingModel: string;
  approvedForPublication: boolean;
};

// Public case studies stay empty until client permission, scope, and evidence are verified.
// See content/case-study-template.md for the editorial intake model and required fact checks.
export const caseStudies: CaseStudy[] = [];
