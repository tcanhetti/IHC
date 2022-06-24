import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './component/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IHC Transporte</title>
        <link rel="icon" href="/react.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.logo}>
            <img id={styles.logo} src="/logo.jpg" alt='carro com uma lupa sobrepondo tudo em azul claro'/>
            <span>IHC Transporte</span>
          </div>
          <br/>
          <div className={styles.intro}>
            <span>
              Melhores preços com uma simples pesquisa!
            </span>
            <span>
              Experimente grátis
            </span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.homeButton}>
            <a href="login">Login</a>
          </div>
          <div className={styles.homeButton}>
            <a href="register">Cadastro</a>
          </div>
          <div id={styles.tourButton}>
            <a href="app">Usar sem cadastro</a>
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        {Footer()}
      </div>
    </div>
  )
}

