import { FC } from 'react';

import { IProduct } from "../../interfaces"
import { MyImages } from '../ProductImages';
import style from './Product.module.css';

interface IProps {
    product: IProduct;
};

const Product: FC<IProps> = ({ product }) => {
    const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = product;
    return (
        <div className={style.productCart}>
            <h2>ID: {id}; {title}</h2>
            <h3>Price: {price}; Discount: {discountPercentage}</h3>
            <h4>Rating: {rating}; stock: {stock}; brand: {brand}; category: {category}</h4>
            <h4>Thumbnail: {thumbnail}</h4>
            <MyImages images={images} title={title} />
            <h3>{description}</h3>  
        </div>
    )
};

export { Product };