function ProductCard({product, onAddToCart}){
    return(
        <div className={`bg-[#D3C6B1] w-86 h-108 shadow-md hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl  ${product.id == 1 ? 'rounded-tl-3xl' : product.id == 4 ? 'rounded-tr-3xl' : ''}`}>
            <img 
            src={product.img}
            className={`h-76 w-86 ${product.id == 1 ? 'rounded-tl-3xl' : product.id == 4 ? 'rounded-tr-3xl' : ''}`}
            />
            <div className="px-5 pb-7 ml-2 mt-2">
                <p className="text-xl font-bakbak text-[#4C2304]">{product.name}</p>
                <p className="font-baloo2 text-xl">{product.price} AMD</p>
                <button 
                onClick={() => onAddToCart(product)}
                className="font-baloo2 rounded-3xl cursor-pointer mt-2 px-4 py-2 ml-30 bg-[#4C2304] text-white">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard