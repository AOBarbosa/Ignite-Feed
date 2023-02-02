import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/AOBarbosa.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Barbosa</strong>
              <time
                title="31 de Janeiro de 2023"
                dateTime="2023-01-31 14:52:15"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button onClick={() => setCount(count + 1)}>
            <ThumbsUp size={20} />
            Aplaudir <span>{count}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
