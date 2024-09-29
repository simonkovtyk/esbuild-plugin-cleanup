import { Plugin, PluginBuild } from "esbuild";
import { resolveOutDir } from "./helpers/out.helper";
import { Options, ResolvePathOptions } from "./types/options.type";
import * as fs from "node:fs";

const handler = (options: ResolvePathOptions): () => Promise<void> => {
  return async (): Promise<void> => {
    const resolvedOutDir: string = resolveOutDir(options);

    return fs.existsSync(resolvedOutDir)
      ? fs.rmSync(resolvedOutDir, { recursive: true })
      : undefined;
  };
};

const cleanupPlugin = (options?: Options): Plugin => ({
  name: "esbuild-plugin-cleanup",
  setup: (build: PluginBuild) => {
    const resolvePathOptions: ResolvePathOptions = {
      outBase: build.initialOptions?.outbase,
      outDir: build.initialOptions?.outdir,
      outFile: build.initialOptions?.outfile,
      overrideOut: options?.overrideOut
    };

    build.onStart(handler(resolvePathOptions));
  }
});

export {
  cleanupPlugin
};
