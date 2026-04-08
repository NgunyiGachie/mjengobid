import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-neutral-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-neutral-900">
            MjengoBid
          </Link>

          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <Link to="/" className="hover:text-neutral-900">
              Home
            </Link>
            <Link to="/projects" className="hover:text-neutral-900">
              Projects
            </Link>
            <Link
              to="/post-project"
              className="rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
            >
              Post Project
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-200 bg-neutral-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-neutral-900">
                MjengoBid
              </h3>
              <p className="text-sm text-neutral-600">
                A simpler way to post and discover construction projects.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-neutral-900">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>Project Posting</li>
                <li>Cost Discovery</li>
                <li>Construction Leads</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-neutral-900">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>About</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-neutral-900">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
            <p>&copy; 2026 MjengoBid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;