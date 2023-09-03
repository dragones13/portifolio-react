import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import ipdnc from '../../imgage/Projects/ipdnc.svg'
import portifolio from '../../imgage/Projects/portifolio.svg'

function Projects(){
    return(
        <div className={styles.Projects} id='Projects+'>
            <h1>Projetos</h1>
            <Card
            img={ipdnc}
            title="TESTE - DNC" 
            tech=" HTML, CSS E JS" 
            description="Desenvolvimento de uma Landing page para o lancamento da formacao em tecnologia" 
            repo="https://github.com/dragones13/projeto-landing-page"  
            site="https://main--tourmaline-kashata-676f0b.netlify.app/"
            ></Card>
            <Card
             img={portifolio}
             title="TESTE - DNC" 
             tech=" HTML, CSS E JS" 
             description="Desenvolvimento de uma Landing page para o lancamento da formacao em tecnologia" 
             repo="https://github.com/dragones13/projeto-landing-page"  
             site="https://main--tourmaline-kashata-676f0b.netlify.app/"            
            ></Card>
            <Card></Card>
            <ButtonB text='Acesse meu repositorio' link='https://github.com/dragones13?tab=repositories'></ButtonB>
        </div>
    )
}

export default Projects