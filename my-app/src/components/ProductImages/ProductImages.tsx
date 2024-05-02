import { FC } from "react";

import style from './ProductImages.module.css'

interface IProps {
    images: string[];
    title: string;
}
const MyImages: FC<IProps> = ({images, title}) => {
    return (
        <div className={style.container}>
            {images.map((src, i)=><img src={src} alt={title} key={i} className={style.img}></img>)}
        </div>
    )
};

export { MyImages };