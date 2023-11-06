export interface GuardianApiParams {
  fromDate: string;
  pageSize: number;
  q?: string;
  tag?: string;
  toDate?: string;
  section?: string;
}

type OrderBy = "newest" | "oldest" | "relevance";

export interface GuardianResult {
  apiUrl: string;
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

export interface GuardianApiResponse {
  response: {
    currentPage: number;
    orderBy: OrderBy;
    pageSize: number;
    pages: number;
    results: GuardianResult[];
    startIndex: number;
    status: string;
    total: number;
    userTier: string;
  };
}
