import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-medium text-neutral-900">
          <FileText className="h-5 w-5" />
          <span>MjengoBid</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-neutral-700">
          <Link to="/login" className="hover:text-neutral-900">
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-neutral-800"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;