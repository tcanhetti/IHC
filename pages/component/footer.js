import styles from '../../styles/Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
            <footer>
                <p>
                    Projeto IHC 
                </p>
                <p>
                    Profº Roberto Michelan
                </p>
                <p>
                    Alunos: Thauer Furtado, Anderson Medeiros, Izabela Granado, Geovanna da Silva, Felipe Dias
                </p>
            </footer>
        </div>
    );
}

export default Footer;