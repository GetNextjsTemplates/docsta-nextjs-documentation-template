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
            <div className="py-10">
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-4">
                            <p className="text-primary uppercase">Markdown Editor</p>
                            <h2>Live-Editable, Component-Powered Docs</h2>
                            <h6 className="text-secondary">Use MDX and reusable components to keep your docs dynamic, interactive, and maintainable. Perfect for documenting APIs, UI libraries, or internal tools.</h6>
                        </div>
                        
                        <div className="bg-[#1e1e1e] p-4 rounded-lg overflow-auto shadow">
                            <Editor
                                value={code}
                                onValueChange={setCode}
                                highlight={code => Prism.highlight(code, Prism.languages.yaml, 'yaml')}
                                padding={16}
                                style={{
                                    fontFamily: '"Fira Code", monospace',
                                    fontSize: 14,
                                    backgroundColor: '#1e1e1e',
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