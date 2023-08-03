import { useState } from "react";
import styles from './Comment.module.css';

import {  Trash } from 'phosphor-react';

interface CommentProps {
  id: string;
  content: string;
  isComplete: boolean;
  onDeleteComment: (id: string) => void;
  onCompleteComment: (id: string) => void;
}

export function Comment({id, content, onDeleteComment, isComplete, onCompleteComment }: CommentProps) {
  const [check, setCheck] = useState(false);

  function handleDeleteComment() {
    onDeleteComment(id);
  }


  function handleCompleteComment() {
    {
      check ? setCheck(false) : setCheck(true);
    }
    onCompleteComment(id)
  }

  return (
    <div className={styles.comment}>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.checkboxRound}>
            <input type="checkbox" id={id} defaultChecked={isComplete} onClick={handleCompleteComment}/>
            <label htmlFor={id}></label>
          </div>
          <header>
            <span className={isComplete === true ? styles.completed : styles.noCompleted}>{content}</span>
          </header>
            <div className={styles.trashButton}>
              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </div>


        </div>

      </div>
    </div>
  )
}