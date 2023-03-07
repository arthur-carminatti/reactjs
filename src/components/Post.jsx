import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/arthur-carminatti.png" />
                    <div className={styles.authorInfo}>
                        <strong>Arthur Carminatti</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='07 de Março às 15:48h' dateTime='2023-03-07 15:48:30'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href="">jane.design/doctorcare </a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}