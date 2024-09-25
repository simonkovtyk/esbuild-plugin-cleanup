<div align="center">

<img width="196" src="https://raw.githubusercontent.com/simonkovtyk/esbuild-plugin-package-json/d7d77d5766ef9ef97f157c2d221d61a7d3cef51c/docs/esbuild-favicon.svg" />

<h1>Cleanup Plugin</h1>

<p>By deleting the out folder before each new build, the plugin ensures a clean output directory for the build process.</p>

![NPM Downloads](https://img.shields.io/npm/dw/esbuild-plugin-cleanup)
![NPM License](https://img.shields.io/npm/l/esbuild-plugin-package-json)
![GitHub package.json version](https://img.shields.io/npm/v/esbuild-plugin-cleanup)
![TypeScript types](https://img.shields.io/badge/TypeScript_types-included-blue)

<br />

Add a ⭐ to this repository — *it motivates me a lot!*

</div>

## ⚡️ Getting started

Simply install this package with your package manager.

````shell
npm install -D esbuild-plugin-cleanup
````

<details>
<summary>📦 other package manager</summary>

Here are examples for installing the package with other package manager.

> 💾 **yarn**
> ````shell
> yarn add -D esbuild-plugin-cleanup
> ````

> 💾 **pnpm**
> ````shell
> pnpm install -D esbuild-plugin-cleanup
> ````

</details>

Looks good so far 🔥 — now you have installed the latest version!

## 💡 Introduction

This esbuild plugin automatically deletes the previous build before generating a new one, keeping your output directory clean.

It runs a pre-build cleanup step to prevent outdated files from cluttering your project. With minimal configuration, it simplifies workflows and ensures only the latest assets remain.

## 🔧 Usage

```typescript
cleanupPlugin(options);
```

This function needs to be called inside the esbuild configuration in order to use this plugin. It will provide the plugin inside the build process of esbuild.

<details>
<summary>Show an example of the integration</summary>

````typescript
esbuild.build({
  // some configuration...
  plugins: [
    cleanupPlugin();
    // more plugins here...
  ]
})
````

</details>

<details>
<summary>Show an example of the configuration</summary>

````typescript
cleanupPlugin({
  // configure here
});
````

</details>

### Properties

#### ``overrideOut``

> Default: ``undefined`` (esbuild's output directory)

A ``string``, that specifies the output directory, that'll be cleaned up.

<details>
<summary>Show an example</summary>

````typescript
cleanupPlugin({
  overrideOut: "dist" // any directory allowed
});
````

</details>

### Returns

Type: ``Plugin``

An instance of this plugin, that will be used by esbuild automatically.

## License

The MIT License (MIT) - Please have a look at the [License](https://github.com/simonkovtyk/esbuild-plugin-cleanup/blob/main/LICENSE) file for more details.

## Contributing

Want to contribute to an open-source project on GitHub but unsure where to start? Check out this comprehensive step-by-step guide on how to contribute effectively!

From forking the repository to creating pull requests, this guide walks you through every stage of the process, helping you make a successful contribution to this GitHub project. Start collaborating,
learn new skills, and make an impact on this project!

[See here](https://github.com/simonkovtyk/esbuild-plugin-cleanup/blob/main/docs/guides/HOW_TO_CONTRIBUTE.md) for the contribute guide at GitHub.

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
