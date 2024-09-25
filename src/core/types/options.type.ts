interface Options {
  overrideOut?: string | undefined;
};

type ResolvePathOptions = {
  outBase?: string | undefined;
  outDir?: string | undefined;
  outFile?: string | undefined;
} & Options;

export type {
  ResolvePathOptions,
  Options
};
