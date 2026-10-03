import * as esbuild from "https://esm.sh/esbuild@0.28.2"

const httpPlugin = {
    name: "http",
    setup(build) {
        build.onResolve({ filter: /^https?:\/\// }, args => ({
            path: args.path,
            namespace: "http-url",
        }))

        build.onLoad({ filter: /.*/, namespace: "http-url" }, async args => {
            const response = await fetch(args.path)
            if (!response.ok) {
                throw new Error(`Failed to fetch ${args.path}`)
            }
            const contents = await response.text()
            return { contents, loader: "js" }
        })
    },
}

await esbuild.build({
    entryPoints: ["main.js"],
    bundle: true,
    outfile: "dist/main.js",
    plugins: [httpPlugin],
    logLevel: "info",
})

esbuild.stop()
