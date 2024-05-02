import style from './App.module.css';
import { Products } from './components';

function App() {
  return (
    <div className={style.app}>
       <Products/>
    </div>
  );
}

export { App };
