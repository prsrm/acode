import plugin from "./plugin.json"
import * as p from "https://gnlow.dev/@prsrm/prsrm@0.1.0"

const editorThemes = acode.require("editorThemes")

acode.setPluginInit(
    plugin.id,
    async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
        editorThemes.register({
            id: "prsrm",
            caption: "Prsrm",
            dark: true,
            getExtension() {
                const { cm, createTheme, createHighlightStyle } = editorThemes
                const t = cm.tags
                
                return createTheme({
                    dark: true,
                    styles: {
                        "&": { color: p.snowy, backgroundColor: p.swamp },
                    },
                    highlightStyle: createHighlightStyle({
                        { tag: t.content, color: p.snowy },
                        { tag: t.keyword, color: p.carro },
                        { tag: t.string, color: p.green },
                        //{ tag: t.comment, color: p.snowy },
                        { tag: t.number, color: p.grape },
                        //{ tag: t.variableName, color: p.snowy },
                        { tag: t.function(t.content, color: p.lemon },
                        { tag: t.typeName, color: p.azure },
                        { tag: t.className, color: p.azure },
                    }),
                })
            },
        })
    },
)

acode.setPluginUnmount(plugin.id, () => {
    editorThemes.unregister("prsrm")
})
