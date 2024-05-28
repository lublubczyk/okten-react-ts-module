import { IRenderComponent } from "../../types";
import style from './IterateData.module.css';

interface IProps<T>{
    data: T[];
    renderComponent: IRenderComponent<T>;
};

const IterateData = <T,>({ data, renderComponent }: IProps<T>) => {
    return (
        <div className={style.IterateData}>
            {data.map((value, index) => <div key={index} className={style.post}>{renderComponent(value)}</div>)}
        </div>
    )
};

export { IterateData };