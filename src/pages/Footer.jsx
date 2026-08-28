import { ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t p-6 dark:border-dark-border light:border-light-border">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs dark:text-dark-textMuted light:text-light-textMuted">
          © 2026 SOYAL — built with React & Tailwind CSS
        </p>
        <Link to='/' className="font-mono text-xs inline-flex items-center  gap-1.5">
          Back to home <ArrowUp size={13}/>
        </Link>
      </div>
    </footer>
  )
}
