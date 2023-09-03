import styles from './Navbar.module.css'

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav'



function Navbar(){
    return(
        <div className={styles.Navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentaçao</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>projetos</Nav.Link></li>
            </ul>
            <ul>              
                <li><a href='https://www.instagram.com/kauan_nop/' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/kauan-almeida-79703223a/' target='_blank' ><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/dragones13' target='_blank'><FaGithub size={30} /></a></li>
            </ul>          
        </div>
    )
}


export default Navbar