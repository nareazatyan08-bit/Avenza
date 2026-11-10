import { useParams, Link } from "react-router-dom"
import products from '../../data/products'
function ProductDetails({onAddToCart}){
    const {productId} = useParams()
    
    const product = products.data.find(item => item.id === +productId)

     if (!product) {
    return (
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Product Not Found
        </h1>   

        <Link
          to="/"
          className="mt-4 inline-block text-[#4C2304] hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );
  } 
    return (
    <section className="mx-auto max-w-3xl p-8">
      <Link
        to="/"
        className="mb-6 inline-block font-baloo2 text-md text-[#4C2304] hover:underline"
      >
        ← Back to Products
      </Link>

      <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2">
        <img
          src={product.img}
          alt={product.name}
          className="h-80 w-full rounded-xl object-cover"
        />

        <div>
       
          <h1 className="mt-4 text-3xl font-bakbak text-[#4C2304]">
            {product.name}
          </h1>

          <p className="mt-3 text-gray-600 font-baloo2">
            Category: {product.category}
          </p>

          <p className="mt-5 text-2xl font-baloo2 text-[#4C2304]">
            {product.price} AMD
          </p>

          <button
            onClick={() => onAddToCart(product)}
            className="mt-6 rounded-3xl bg-[#4C2304] px-6 py-3 text-[#D3C6B1] cursor-pointer hover:scale-105 active:scale-85 transition-all duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails