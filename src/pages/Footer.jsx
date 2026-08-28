import { ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-dark-border p-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-dark-textMuted">
          © 2026 SOYAL — built with React & Tailwind CSS
        </p>
        <button className="font-mono text-xs felx items-center  gap-1.5">
          Back to home <ArrowUp size={13}/>
        </button>
      </div>
    </footer>
  )
}
