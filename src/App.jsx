import { Header } from './components/Header';
import { Post } from './components/Post'; 
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste cupiditate debitis nobis quos ipsa harum animi pariatur quidem eius nemo magni vero fugit deserunt perspiciatis porro, veniam eveniet delectus." 
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div> 
  );
}