import styles from './Skills.module.css'
import javascript from '../../imgage/skills/js.svg'
import html from '../../imgage/skills/html.svg'
import css from '../../imgage/skills/css.svg'
import typtscript from '../../imgage/skills/typescript.svg'
import react from '../../imgage/skills/react.svg'

function Skills(){
    return(
        <div className={styles.Skills} id='Skills'>
            <h1>habilidades</h1>
            <p>conheca um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={typtscript}></img>
                <img src={react}></img>
            </div>
            

        </div>
    )
}

export default Skills 