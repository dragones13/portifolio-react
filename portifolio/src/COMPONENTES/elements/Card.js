import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img, title, tech, description, repo,  site}){
    return(
        <div className={styles.Card}>
            <a href={site} target='_blank'>
                <img src={img}  alt='Erro'></img>
                </a>           
            <section>
                <h3>{title}</h3>
                <p><strong>tecnologia</strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositorio' link={repo}></ButtonB>
            </section>

        </div>
    )
}

export default Card