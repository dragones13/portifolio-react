import styles from './Card.module.css'
import ipdnc from '../../imgage/Projects/ipdnc.svg'
import ButtonB from './ButtonB'

function Card2(){
    return(
        <div className={styles.Card}>
            <img src={ipdnc}></img>
            <section>
                <h3>Titulo</h3>
                <p>Tecnologia</p>
                <p>Descrição</p>
                <ButtonB text='Acesse o repositorio'></ButtonB>
            </section>

        </div>
    )
}

export default Card2