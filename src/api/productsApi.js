import products from '../data/products'

export function fetchProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}