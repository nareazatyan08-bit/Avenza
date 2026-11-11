import ProductCard from '../productCard/ProductCard'
import { useState, useEffect } from 'react'
import { fetchProducts } from '../../api/productsApi';
import Loader from "../loader/Loader";
function ProductList(){
    const [productData, setProductdata] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function  loadProducts(){
            try{
                setIsLoading(true);
                setIsError(false);

                const data= await fetchProducts();
                setProductdata(data);
            } catch{
                setIsError(true)
            } finally{
                setIsLoading(false)
            }
        }

        loadProducts()
    }, [])

    return(
        <section className='mt-5 mb-5'>
            <div className='text-center mt-20'>
                <h2 className='text-4xl text-black font-bakbak'>Bestsellers</h2>
                <p className='text-2xl text-black font-baloo2 mb-5'>Explore The Recent Most Bought Drinks This Week</p>
            </div>
            {
                isLoading ? <Loader/> : isError ? <p>error</p> : (
                    <div className='flex gap-4 justify-center'>
                    {productData?.data?.map(item => (
                        <ProductCard
                            product = {item}
                            key = {item.id}
                            
                        />
                    ))}
            </div>
                )
            }
        </section>
    )
}

export default ProductList