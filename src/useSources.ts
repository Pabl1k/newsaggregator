import { useQuery } from "@tanstack/react-query";
import { getSources } from "./api/fetch.ts";
import { SourceParams } from "./api/types/params.ts";
import { IdName } from "./api/types/general.ts";

export const useSources = (params: SourceParams): IdName[] => {
  const sources = useQuery({
    queryKey: ["sources", JSON.stringify(params)],
    queryFn: () => getSources(params)
  });

  if (sources.data?.status === "error") {
    return [];
  }

  const list = sources.data?.sources ?? [];

  return list.map(({ id, name }) => ({ id, name }));
};
