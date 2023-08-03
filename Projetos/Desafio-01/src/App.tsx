import { Header } from './components/Header';
import { Home } from './components/Home'

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <Home />  
        </main>
      </div>
    </div>
  )
}