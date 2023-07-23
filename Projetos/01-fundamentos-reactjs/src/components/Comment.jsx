import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://i1.sndcdn.com/artworks-1BP5a907Q01eLbWN-AcVNiw-t500x500.jpg" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eu</strong>
                            <time title='09 de março de 2023 às 16:14' dateTime='2023-03-09 16:15:30'> Cerca de 1h atrás</time>
                        </div>
                        
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bem, parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}