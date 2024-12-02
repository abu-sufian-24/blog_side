import { useEffect, useState } from "react"
import { api } from "../api/Api"
import useInput from "../hooks/useInput"


function CreatProduct() {
  const [categori, setCategori] = useState([]);
  const { Attr: titleProps, onClear: titleClear } = useInput("")
  const { Attr: categoriProps, onClear: categoriClear } = useInput("")
  const { Attr: descriptionProps, onClear: descriptionClear } = useInput("")
  const { Attr: imageProps, onClear: imageClear } = useInput("")
  const { Attr: priceProps, onClear: priceClear } = useInput("")
  const { Attr: rattingProps, onClear: rattingClear } = useInput("")

  const handleSubmite = () => {
    const formData = {
      id: crypto.randomUUID(),
      title: titleProps.value,
      image: imageProps.value,
      description: descriptionProps.value,
      price: priceProps.value,
      ratting: rattingProps.value,
      category: categoriProps.value,
    };
    api.post("/products", formData);

    titleClear(),
      categoriClear(),
      descriptionClear(),
      imageClear(),
      priceClear(),
      rattingClear()
  };

  useEffect(() => {
    async function getCategori() {
      try {
        const conn = await api.get("/categories");
        setCategori(conn.data)

      } catch (error) {
        console.log(error);

      }

    }
    getCategori()
  }, [])




  return (
    <div className="col-span-9 bg-white p-3 ">
      <h2 className="text-3xl font-bold mb-5"> Creat Product </h2>
      <div className="mb-5 ">
        <label
          htmlFor="title"
          className="block mb-2 text-xl font-medium text-green-900 dark:text-white" >
          Your Title
        </label>
        <input
          {...titleProps}
          type="text"
          id="title"
          className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 "
          required />
      </div>
      <div className="mb-5">
        <label
          htmlFor="Categori"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Select an option
        </label>
        <select
          id="Categori"
          {...categoriProps}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {categori.map(cat => <option key={cat.id}>{cat.title}</option>)}
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Your message
        </label>
        <textarea
          id="message"
          {...descriptionProps}
          rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

      </div>
      <div className="mb-5 ">
        <label
          htmlFor="image"
          className="block mb-2 text-xl font-medium text-green-900 dark:text-white" >
          Your image
        </label>
        <input
          {...imageProps}
          type="text"
          id="image"
          className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 "
          required />
      </div>
      <div className="mb-5 ">
        <label
          htmlFor="Price"
          className="block mb-2 text-xl font-medium text-green-900 dark:text-white" >
          Your Price
        </label>
        <input
          {...priceProps}
          type="number"
          id="Price"
          className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 "
          required />
      </div>
      <div className="mb-5 ">
        <label
          htmlFor="Ratting"
          className="block mb-2 text-xl font-medium text-green-900 dark:text-white" >
          Your Ratting
        </label>
        <input
          {...rattingProps}
          type="number"
          min="0"
          max="5"
          id="Ratting"
          className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 "
          required />
      </div>
      <div className="mb-5">
        <button onClick={handleSubmite} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Post</button>
      </div>
    </div>
  );
};

export default CreatProduct;