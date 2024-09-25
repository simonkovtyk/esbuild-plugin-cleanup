import path from "node:path";
import process from "node:process";
import { ResolvePathOptions } from "../types/options.type";

// Prefer out dir before out file
const resolveOutDir = (options: ResolvePathOptions): string => {
  if (options.overrideOut !== undefined)
    return path.join(process.cwd(), options.overrideOut);

  const explicitOutBase: string = options.outBase === undefined ? process.cwd() : path.join(process.cwd(), options.outBase);

  if (options.outDir !== undefined)
    return options.outBase === undefined
      ? path.join(explicitOutBase, options.outDir)
      : path.join(explicitOutBase, options.outBase, options.outDir);

  if (options.outFile !== undefined) {
    const dirOfOutFile = path.parse(options.outFile).dir;

    return path.join(explicitOutBase, dirOfOutFile);
  }

  return path.join(explicitOutBase, "dist");
};

export {
  resolveOutDir
};
