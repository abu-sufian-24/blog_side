import { Link, Outlet } from "react-router-dom"


function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link className="p-1 bg-green-600 mx-1 text-white" to="/">Home</Link>
            </li>
            <li>
              <Link className="p-1 bg-green-600 mx-1 text-white" to="/about">About</Link>
            </li>
            <li>
              <Link className="p-1 bg-green-600 mx-1 text-white" to="/contact">Contuct</Link>
            </li>
            <li>
              <Link className="p-1 bg-green-600 mx-1 text-white" to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-64">
        <h1 className="text-2xl">page content below</h1>

        <Outlet />
      </div>
      <footer className="text-center">
        <p>this is footer</p>
      </footer>
    </div>
  )
}

export default Layout