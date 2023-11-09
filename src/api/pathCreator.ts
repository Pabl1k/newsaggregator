export interface Params {
  [key: string]: any;
}

export const pathCreator = (params?: Params) => {
  if (!params) {
    return null;
  }

  const searchParams = new URLSearchParams(
    Object.entries(params).reduce((path, [key, value]) => {
      if (value) {
        path += `&${key}=${value}`;
      }

      return path;
    }, ""),
  );

  return `?${searchParams}`;
};
