import { Sun,Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-dark-border bg-dark-surface backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <nav className="flex items-center gap-1 overflow-x-auto">
          <li className="font-mono text-base list-none whitespace-nowrap rounded-md px-3 py-1.5 text-dark-text">
            Home
          </li>
          <li className="font-mono text-base list-none whitespace-nowrap rounded-md px-3 py-1.5 text-dark-text">
            About
          </li>
          <li className="font-mono text-base list-none whitespace-nowrap rounded-md px-3 py-1.5 text-dark-text">
            Journey
          </li>
          <li className="font-mono text-base list-none whitespace-nowrap rounded-md px-3 py-1.5 text-dark-text">
            Skills
          </li>
          <li className="font-mono text-base list-none whitespace-nowrap rounded-md px-3 py-1.5 text-dark-text">
            Projects
          </li>
          <li className="font-mono text-base list-none whitespace-nowrap rounded-md px-3 py-1.5 text-dark-text">
            Contect
          </li>
        </nav>
        <button>
          {/* {mode === "dark" ? <Sun size={16}/> : <Moon size={16}/>} */}
        </button>
      </div>
    </header>
  );
}
