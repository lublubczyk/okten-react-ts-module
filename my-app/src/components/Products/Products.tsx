import { useEffect, useState } from "react"
import { IProducts } from "../../interfaces"
import { Product } from "../Product";


const Products = () => {
    const [products, setProducts] = useState<IProducts | null>(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(val => val.json())
            .then(val => setProducts(val))
    }, [])
    
    return (
        <div>
            {products && products.products.map((val,i) => <Product product={val} key={i} /> )}
        </div>
    )
};

export { Products };