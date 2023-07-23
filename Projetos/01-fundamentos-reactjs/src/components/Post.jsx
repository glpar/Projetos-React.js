import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://i1.sndcdn.com/artworks-1BP5a907Q01eLbWN-AcVNiw-t500x500.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Iaew Xablau</strong>
                        <span>Surfista</span>
                    </div>
                </div>
                <time title='09 de março de 2023 às 16:14' dateTime='2023-03-09 16:15:30'> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p> fala galrera da pesadaa tudod de boua</p>
                <p> eita m,aria que cosia boa demauisi</p>
                <p><a href=""> #cigurapiãu</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea 
                placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}