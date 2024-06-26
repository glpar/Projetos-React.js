import { PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}  
                src="https://images.unsplash.com/photo-1497044793173-df560dfbe923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
             />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://i1.sndcdn.com/artworks-1BP5a907Q01eLbWN-AcVNiw-t500x500.jpg" />
                <strong>Iaew Xablau</strong>
                <span>Surfista</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    )
}