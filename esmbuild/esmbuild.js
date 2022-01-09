const { join, resolve } = require("path");
const esbuild = require("esbuild");
const globby = require("globby");
const { esmPlugin } = require("./plugin.esm");
const { cssPlugin } = require("./plugin.css");

const color = (n, v) => `\x1b[${n}m${v}\x1b[0m`;
const defaultPath = join(process.cwd(), "src");
const defaultOutdir = join(process.cwd(), "dist");

async function getBuildOptions(path) {
  const entryPoints = await globby([`${path}/**/*.(t|j)s*`]);
  console.log(entryPoints);

  return {
    entryPoints,
    // minify: true,
    format: "esm",
    bundle: false,

    plugins: [esmPlugin, cssPlugin({ inject: true })],
  };
}

async function getBuildOptionsTwo(path) {
  const entryPoints = await globby([`${path}/**/index.(t|j)s*`]);
  console.log(entryPoints);

  return {
    entryPoints,
    // minify: true,
    format: "esm",
    bundle: true,

    plugins: [esmPlugin, cssPlugin({ inject: true })],
  };
}

async function build(path = defaultPath, outdir = defaultOutdir) {
  outdir = resolve(outdir);
  await esbuild.build({
    outdir,
    ...(await getBuildOptions(path)),
  });
  console.log(`Build done at ${outdir}`);
}

async function buildTwo(path = defaultPath, outdir = defaultOutdir) {
  outdir = resolve(outdir);
  await esbuild.build({
    outdir,
    ...(await getBuildOptionsTwo(path)),
  });
  console.log(`Build done at ${outdir}`);
}

async function serve(path = defaultPath, port = 8000) {
  function onRequest(info) {
    const status = color(
      info.status.toString().startsWith("2") ? 32 : 31,
      info.status
    );
    const line = color(
      37,
      `${info.method} ${status} ${info.path} [${info.timeInMS}ms]`
    );
    console.log(line);
  }

  await esbuild.serve({ port, onRequest }, await getBuildOptions(path));
  console.log(`Server listening at http://127.0.0.1:${port}`);
}

let [a, b, command, path, option] = process.argv;

path = path && resolve(join(process.cwd(), path));

if (command === "serve") {
  serve(path, option && parseInt(option));
} else if (command === "build") {
  build(path, option && resolve(join(process.cwd(), option)));
  buildTwo(path, option && resolve(join(process.cwd(), option)));
} else {
  console.log(`Usage:\n  $ esbuild serve src 8000\n  $ esbuild build src dist`);
}
