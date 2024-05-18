import React, { useState } from 'react';
import style from './App.module.css';
import { CreatePostForm, NeWPost } from './components';
import { IPost } from './interfaces';

function App() {
  
  const [newPost, setNewPost] = useState<IPost | null>(null);

  return (
    <div className={style.app}>
      <CreatePostForm setNewPost={setNewPost} />
      {newPost && <NeWPost newPost={newPost} />}
    </div>
  );
}

export { App };
