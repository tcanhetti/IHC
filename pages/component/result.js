import Link from 'next/link';
import styles from '../../styles/Result.module.css';

function Result(){
    return (
        <div className={styles.resultContainer}>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='uber.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 16,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://www.uber.com'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='99.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 16,50</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://99app.com/'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='cabify.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 17,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://cabify.com/br'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='maxim.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 17,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://taximaxim.ge/pt-br/'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='inDriver.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 17,20</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://indriver.com/pt/city/'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='urbano.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 18,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://urbanonortecidades.com.br/'>Ir ao APP</Link>
                </div>
            </div>
        </div>
    )
}

export default Result;




