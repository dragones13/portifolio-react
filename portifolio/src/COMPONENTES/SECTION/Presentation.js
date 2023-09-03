import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
        <div className={styles.Presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu portifolio</strong></h4>
            <h1>olá, Eu sou o kauan almeida!</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras. Como Product Manager, <br></br>
                eu tenho o compromisso de resolver problemas complexos e trazer resultados excepcionais <br></br>
                para os negócios.Meus projetos já geraram milhões de reais em receita anualestou sempre <br></br>
                em busca de novos desafios para superar.</p>

                <ButtonA link='https://github.com/dragones13' target='_blank' text='conecte-se comigo!'/>      
        </div>
    )
}

export default Presentation