import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/arthur-carminatti.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Arthur Carminatti</strong>
                            <time title='07 de Março às 15:48h' dateTime='2023-03-07 15:48:30'>Publicado há 1 hora</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>


                    </header>
                    <p>Parabens!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>28</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}