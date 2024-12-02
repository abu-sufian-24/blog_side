// import img from "../assets/images/b-1.jpg"

function ProductItem({ product }) {
  return (
    <div className="col-span-4 shadow border rounded overflow-hidden">
      <img src={product.image} alt="fhds" />
      <div className="p-3">
        <h4 className="text-2xl">{product.title}</h4>
        <p className="text-slate-400">{product.category}</p>
        <div className="flex justify-between items-center mt-3 ">
          <span className="text-xl font-semibold">{product.price}</span>
          <span className="text-yellow-500">{product.ratting}</span>
        </div>
      </div>
      <a href="#" className="block bg-green-600 text-white text-xl font-semibold py-3 text-center">Read More</a>
    </div>
  )
}

export default ProductItem