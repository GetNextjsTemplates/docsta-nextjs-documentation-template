'use client'
import { useState } from 'react'
import Editor from 'react-simple-code-editor'
// @ts-ignore
import Prism from 'prismjs'
import 'prismjs/components/prism-yaml'
import 'prismjs/themes/prism-tomorrow.css'

const initialCode = `site_name: Docsta
nav:
  - Home: index.md
  - Installation: install.md
  - Deploying: deployment.md
  - Getting Help: help.md
theme:
  name: docsta_theme
  analytics:
    gtag: G-ABC123
`

const MarkdownEditor = () => {
    const [code, setCode] = useState(initialCode)
    return (
        <section>
            <div className="py-10 dark:bg-smokyBlack/30">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-2.5 lg:gap-4">
                            <p className="text-primary uppercase">Markdown Editor</p>
                            <h2>Live-Editable, Component-Powered Docs</h2>
                            <h6 className="text-secondary">Use MDX and reusable components to keep your docs dynamic, interactive, and maintainable. Perfect for documenting APIs, UI libraries, or internal tools.</h6>
                        </div>

                        <div className="bg-charcoalDark rounded-lg overflow-auto shadow">
                            <div className="flex items-center gap-2 p-4 bg-black/15 border-b border-black/20">
                                <span className="w-3 h-3 rounded-full bg-[#FF605C]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#FFBD44]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#00CA4E]"></span>
                            </div>
                            <Editor
                                value={code}
                                onValueChange={setCode}
                                highlight={code => Prism.highlight(code, Prism.languages.yaml, 'yaml')}
                                padding={20}
                                style={{
                                    fontFamily: '"Fira Code", monospace',
                                    fontSize: 14,
                                    backgroundColor: '#2F3037',
                                    color: '#f8f8f2',
                                    borderRadius: '8px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarkdownEditor