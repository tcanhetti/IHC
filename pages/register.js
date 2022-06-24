import Head from 'next/head'
import styles from '../styles/Register.module.css'
import Link from 'next/link'
import Footer from './component/footer'

export default function Cadastro() {
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
            <label for='nome'>Nome: </label>
            <input maxlength='16' name='nome' type='text' autofocus required/>
            <label for='mail'>e-mail: </label>
            <input name='mail' type='email' required/>
            <label for='password'>Senha: </label>
            <input maxlength='8' name='password' type='password' required/>
            <label for='password-check'>Confirmar senha: </label>
            <input maxlength='8' name='password-check' type='password' required/>
            <div className={styles.button}>
              <button>Cadastrar</button>
              <div className={styles.googleButton}>
                <a href='#'>
                  <img className={styles.google} src='/google.png'/>
                  <p>Cadastrar com o Google</p>
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
