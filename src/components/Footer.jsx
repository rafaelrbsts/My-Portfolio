import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return(
        <div className="footer">
            <div className="social-icons">
                <a href='https://github.com/rafaelrbsts' target='_blank'><GitHubIcon/></a>
                <a href='https://www.linkedin.com/in/rafael-ribeirosantos' target='_blank' ><LinkedInIcon/></a>
                <a href='https://www.instagram.com/rafaelrbsts' target='_blank' ><InstagramIcon/></a>
            </div>
            <h2>© 2026 Rafael Ribeiro</h2>
        </div>
    )
}

export default Footer