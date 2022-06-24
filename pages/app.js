import Head from 'next/head';
import styles from '../styles/App.module.css';
import Result from './component/result';
import Footer from './component/footer'
import Header from './component/header'

export default function Cadastro() {
    return (
        <div className={styles.container}>
            <Head>
                <title>IHC Transporte</title>
                <link rel="icon" href="/react.ico" />
            </Head>
            <div className={styles.header}>
                {Header()}
            </div>
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