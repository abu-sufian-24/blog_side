import { Link, NavLink } from "react-router-dom"


function SideBar({ categories }) {

  return (
    <div className="col-span-3 bg-white p-3">
      <h2 className="text-3xl font-bold mb-5">Product Categories</h2>
      <ul className=" sticky top-6">
        {categories.map(categori => (
          <li key={categori.id}>
            <NavLink to={`/categori/${categori.title}`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "block p-2 bg-green-600 text-white rounded mb-2 capitalize"
                  : isPending
                    ? "block p-2 bg-rose-700 text-white rounded mb-2 capitalize"
                    : "block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize"
              }>
              {categori.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link to="/" className="bg-green-700 py-2 px-4 text-white">Go Home</Link>
        <Link to="/creat" className="bg-rose-700 py-2 px-4 text-white ml-2">Create Product</Link>

      </div>
    </div>
  )
}

export default SideBar
