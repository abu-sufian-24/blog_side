import { useEffect, useState } from "react"

import SideBar from "./components/SideBar"
import { api } from "./api/Api";
import CreatProduct from "./components/CreatProduct";


function App() {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      async function getData() {
        const conn = await api.get(
          "/products"
        );
        setProduct(conn.data);
      }
      getData();
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    try {
      async function getData() {
        const conn = await api.get(
          "/categories"
        );
        setCategories(conn.data);

      }
      getData();
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <div className="grid grid-cols-12 gap-4 bg-slate-100 p-6 max-w-screen-2xl mx-auto">
        <SideBar categories={categories} />
        <CreatProduct />
      </div>
    </>
  )
}

export default App
