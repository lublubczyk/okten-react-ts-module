import { useState } from 'react';

import style from './App.module.css';
import { Posts, Users } from './components';

const  App = () => {
   
    const [userId, setUserId] = useState<number | null>(null);
  
    return (
        <div className={style.app}>
            <Users lift={setUserId} />
            <Posts userId={userId} />
        </div>
    );
};

export { App };
