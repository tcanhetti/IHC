import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import Footer from './component/footer'

export default function Login() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>IHC Transporte</title>
        <link rel="icon" href="/react.ico" />
      </Head>
      <div className={styles.header}>
        <header>
          <div className={styles.logo}>
              <Link href='/'>
                  <div className={styles.linkLogo}>
                      <img id={styles.logo} src="/logo.jpg" alt='carro com uma lupa sobrepondo tudo em azul claro'/>
                      <span>IHC Transporte</span>
                  </div>
              </Link>
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className={styles.input}>
          <form autocomplete="on">
            <label for='mail'>e-mail: </label>
            <input name='mail' type='email' required/>
            <label for='password'>Senha: </label>
            <input maxlength='8' name='password' type='password' required/>
            <div className={styles.button}>
              <button>Login</button>
              <div className={styles.googleButton}>
                <a href='#'>
                  <img className={styles.google} src='/google.png'/>
                  <p>Login com o Google</p>
                </a>
              </div>
            </div>

          </form>
        </div>
      </main>

      <div className={styles.footer}>
        {Footer()}
      </div>
    </div>
  )
}
