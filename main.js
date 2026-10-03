import plugin from "./plugin.json"
import * as p from "https://gnlow.dev/@prsrm/prsrm@0.1.5"

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
                    highlightStyle: createHighlightStyle([
                        { tag: t.content, color: p.snowy },
                        { tag: t.operator, color: p.carro },
                        { tag: t.keyword, color: p.carro },
                        { tag: t.punctuation, color: p.carro },
                        { tag: t.string, color: p.green },
                        { tag: t.comment, color: p.shado },
                        { tag: t.number, color: p.grape },
                        //{ tag: t.variableName, color: p.snowy },
                        { tag: t.function(t.name), color: p.lemon },
                        { tag: t.typeName, color: p.ocean },
                        { tag: t.className, color: p.coral },
                        //{ tag: t.propertyName, color: p.cherr },
                        { tag: t.regexp, color: p.azure },
                    ]),
                })
            },
            config: {
                name: "prsrm",
                dark: true,
                background: p.swamp,
                foreground: p.snowy,
                keyword: p.carro,
                string: p.green,
                number: p.grape,
                comment: p.shado,
                function: p.lemon,
                // variable: ,
                type: p.coral,
                class: p.coral,
                // constant: ,
                operator: p.carro,
                // invalid: ,
            },
        })
    },
)

acode.setPluginUnmount(plugin.id, () => {
    editorThemes.unregister("prsrm")
})
