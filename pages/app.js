import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/App.module.css';
import Result from './component/result';
import getLocais from './component/locais';
import Footer from './component/footer'

export default function Cadastro() {
    return (
        <div className={styles.container}>
            <Head>
                <title>IHC Transporte</title>
                <link rel="icon" href="/react.ico" />
            </Head>
            <header className={styles.header}>
                    <div className={styles.logo}>
                        <Link href='/'>
                            <div className={styles.linkLogo}>
                                <img id={styles.logo} src="/logo.jpg" alt='carro com uma lupa sobrepondo tudo em azul claro'/>
                                <span>IHC Transporte</span>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.search}>
                        <form className={styles.form} method='post' name='form'>
                            <label>Comece por digitar o <span>local de origem</span></label>
                            {getLocais()}
                            <label>Em seguida digite o <span>local de destino</span></label>
                            {getLocais()}                           
                            <button>Encontrar viajem</button>
                        </form>
                    </div>
            </header>
            <main className={styles.main}>
                <div className={styles.filtro}>
                        <label>Filtrar: </label>
                        <select>
                            <option>
                            </option>
                            <option>
                                Preço: Menor ao Maior
                            </option>
                            <option>
                                Preço: Maior ao Menor
                            </option>
                            <option>
                                Corrida mais rapida
                            </option>
                            <option>
                                App mais utilizado
                            </option>
                            <option>
                                App melhor avaliado nas lojas
                            </option>
                        </select>
                </div>
                <div className={styles.appContainer}>
                    {Result()}
                </div>
            </main>
            <div className={styles.footer}>
                {Footer()}
            </div>
        </div>
    )
}