# esbuild plugin cleanup

![NPM Downloads](https://img.shields.io/npm/dw/esbuild-plugin-cleanup) ![NPM License](https://img.shields.io/npm/l/esbuild-plugin-cleanup)

By deleting the out folder before each new build, the plugin ensures a clean output directory for the build process.

* Supports newest esbuild version
* Uses esbuild config to determine the out folder
* Type declarations (d.ts) included

## How It Works

1. esbuild calls this package in the onStart lifecycle.
2. Gets the configuration from esbuild or user-defined configuration.
3. Evaluate the out folder, that should be deleted, based on the given input.
4. Deletes the evaluated out folder recursively.

## Options

### Overriding the out-folder

This package will use the esbuild out-file, out-folder and/or out-base as path to delete.
Otherwise it may be helpful to overwrite this path manually:

```typescript
cleanupPlugin(
  overrideOut?: string | undefined
);
```

## Usage

### Installation

The plugin can be installed by any package manager.

<details><summary><b>Show instructions</b></summary>

> npm \
> ``npm install esbuild-plugin-cleanup``

> yarn \
> ``yarn install esbuild-plugin-cleanup``

> pnpm \
> ``pnpm install esbuild-plugin-cleanup``

</details>

### Integration

The easy way to integrate this plugin in esbuild.

<details><summary><b>Show instructions</b></summary>

````typescript
await esbuild.build({
  plugins: [
    cleanupPlugin(...)
  ]
})
````

[See here for more about the esbuild plugin integration.](https://esbuild.github.io/plugins/#using-plugins)

</details>

## License

The MIT License (MIT) - Please have a look at the LICENSE file for more details.

## Contributing

Feel free to contribute to this project.\
You can fork this project and create a new pull request for contributing.

[Get to the repository at GitHub.](https://github.com/simonkovtyk/esbuild-plugin-cleanup)

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
