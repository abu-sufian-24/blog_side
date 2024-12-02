import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import SideBar from "./SideBar"


function Root() {

  const categories = useLoaderData();
  const navigation = useNavigation();



  return (
    <div className="grid grid-cols-12 gap-4 bg-slate-100 p-6 max-w-screen-2xl mx-auto">
      <SideBar categories={categories} />
      {navigation.state === "loading" ?
        <div className="h-full text-center col-span-9 bg-white p-3">
          <h2 className="">Loading Data  Plz wait....</h2>
        </div>
        : <Outlet />}
    </div>
  )
}

export default Root