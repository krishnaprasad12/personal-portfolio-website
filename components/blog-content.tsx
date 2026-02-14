"use client"
import type { JSX } from "react"

export function BlogContent({ content }: { content: string }) {
  // Simple markdown-like rendering
  const renderContent = () => {
    const lines = content.trim().split("\n")
    const elements: JSX.Element[] = []
    let currentParagraph: string[] = []
    let codeBlock: string[] = []
    let inCodeBlock = false
    let codeLanguage = ""

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ").trim()
        if (text) {
          elements.push(
            <p key={elements.length} className="mb-6 text-pretty leading-relaxed">
              {text}
            </p>,
          )
        }
        currentParagraph = []
      }
    }

    const flushCodeBlock = () => {
      if (codeBlock.length > 0) {
        elements.push(
          <pre key={elements.length} className="mb-6 overflow-x-auto rounded-lg bg-muted p-4">
            <code className="text-sm">{codeBlock.join("\n")}</code>
          </pre>,
        )
        codeBlock = []
      }
    }

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          flushCodeBlock()
          inCodeBlock = false
          codeLanguage = ""
        } else {
          flushParagraph()
          inCodeBlock = true
          codeLanguage = line.slice(3).trim()
        }
        return
      }

      if (inCodeBlock) {
        codeBlock.push(line)
        return
      }

      // Headings
      if (line.startsWith("## ")) {
        flushParagraph()
        elements.push(
          <h2 key={elements.length} className="mb-4 mt-8 text-balance text-2xl font-bold tracking-tight">
            {line.slice(3)}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        flushParagraph()
        elements.push(
          <h3 key={elements.length} className="mb-3 mt-6 text-balance text-xl font-semibold tracking-tight">
            {line.slice(4)}
          </h3>,
        )
      } else if (line.trim().startsWith("- ")) {
        flushParagraph()
        // Find consecutive list items
        const listItems: string[] = []
        for (let i = index; i < lines.length; i++) {
          if (lines[i].trim().startsWith("- ")) {
            listItems.push(lines[i].trim().slice(2))
          } else {
            break
          }
        }
        elements.push(
          <ul key={elements.length} className="mb-6 ml-6 list-disc space-y-2">
            {listItems.map((item, i) => (
              <li key={i} className="text-pretty leading-relaxed">
                {item}
              </li>
            ))}
          </ul>,
        )
      } else if (line.trim() === "") {
        flushParagraph()
      } else {
        // Regular paragraph text
        if (!line.trim().startsWith("- ")) {
          currentParagraph.push(line)
        }
      }
    })

    flushParagraph()
    flushCodeBlock()

    return elements
  }

  return <div className="prose prose-gray max-w-none dark:prose-invert">{renderContent()}</div>
}
