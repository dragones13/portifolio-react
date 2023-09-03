import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
           <ul>              
                <li><a href='https://www.instagram.com/kauan_nop/' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/kauan-almeida-79703223a/' target='_blank' ><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/dragones13' target='_blank'><FaGithub size={30} /></a></li>
            </ul>   
            <p>almeidakauan123@gmail.com</p>
            <p>kauan almeida © 2023 </p>
        </div>
    )
}

export default Footer