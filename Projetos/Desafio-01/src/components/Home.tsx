import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Home.module.css';
import { Comment } from './Comment';

import clipBoardIcon from '../assets/Clipboard.svg';

import { PlusCircle } from 'phosphor-react';

type CommentTypeProps = {
  id: string;
  content: string;
  isComplete: boolean;
};

export function Home() {
  const [comments, setComments] = useState<CommentTypeProps[]>([{ 
    id: '1231231413452562253235esf',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false
  }]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCrateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments,      
      {
      id: uuidv4(),
      content: newCommentText,
      isComplete:false,
    }]);
    setNewCommentText('');
  }

  function handleCheckComment(id: string) {
     const isTaskMarked = comments.map(( comment)=> {
      if (comment.id === id) {
        return {
          ...comment,
          isComplete: !comment.isComplete, 
        };
      }
      return comment;
    });
    setComments(isTaskMarked);
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.id !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const countCommentComplete = comments.filter(comment => comment.isComplete === true).length; // 6

  return (
      < div className={styles.home}>
        <form onSubmit={handleCrateNewComment} className={styles.taskForm}>
          <textarea
            name="comment"
            placeholder="Adicione uma nova tarefa"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle className={styles.plus}size={24} />
          </button>
        </form>

        <div className={styles.commentList}>
          <div className={styles.commentCounters}>
            <div className={styles.totalCounter}>
              <strong className={styles.textTotalCounter}>Tarefas criadas </strong>
              <p className={styles.counterTotalShowed}>{ comments.length }</p>
            </div>
            <div className={styles.totalCompletedCounter}>
              <strong className={styles.textTotalCompletedCounter}>Concluídas </strong>
              <p className={styles.counterCompletedShowed}>{ countCommentComplete + " de " + comments.length }</p>
            </div>
          </div>

          <div >
          
            {comments.length > 0 ? (comments.map((comment) => (
              <div className={styles.taskList}>
                <Comment
                  key={uuidv4()}
                  id={comment.id}
                  content={comment.content}
                  onDeleteComment={deleteComment}
                  isComplete={comment.isComplete}
                  onCompleteComment={handleCheckComment}
                />
              </div>  
            ))) : (
              <div className={styles.noTask}>
                <img src={clipBoardIcon} alt="Icone de um clipboard" />
                <strong> Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>)}
          </div>
        </div> 
    </div>
  )
}