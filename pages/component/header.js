import styles from '../../styles/Header.module.css';
import Link from 'next/link';
import getLocais from './locais';

function Header() {
    return (
        <div className={styles.footer}>
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
        </div>
    )
}

export default Header;