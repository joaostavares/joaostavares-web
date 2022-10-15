import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>João Tavares</title>
        <meta name="description" content="João Tavares" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
          <img className={styles.profile} src="/profile.png" alt="Profile Picture" />
          <h3 className={styles.description}>João Tavares</h3>
          <div className={styles.grid}>
            <a href="https://github.com/joaostavares" className={styles.card} target="_blank" rel="noopener noreferrer">
              <h3>Github</h3>
            </a>
            <a href="https://www.linkedin.com/in/joaotavaress/" className={styles.card} target="_blank" rel="noopener noreferrer">
              <h3>LinkedIn</h3>
            </a>
            <a href="https://www.instagram.com/joao.tavares_9/" className={styles.card} target="_blank" rel="noopener noreferrer">
              <h3>Instagram</h3>
            </a>
            <a href="https://steamcommunity.com/id/werewolf-gg/" className={styles.card} target="_blank" rel="noopener noreferrer">
              <h3>Steam</h3>
            </a>
        </div>
      </main>

      <footer className={styles.footer}>
          {/*todo*/}
      </footer>
    </div>
  )
}
