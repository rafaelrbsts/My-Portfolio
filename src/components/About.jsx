import SchoolIcon from '@mui/icons-material/School';
import DataObjectIcon from '@mui/icons-material/DataObject';
import QuoteIcon from '@mui/icons-material/FormatQuote';

import AboutCard from "./AboutCard"

function About() {
    return(
        <div id='objetivo' className="container about">
            <h1 className="titulo">Formação<span> & </span>Objetivos</h1>
            <div className="box">
                <AboutCard
                imagem={<SchoolIcon sx={{fontSize:"40px"}}/>}
                titulo="Formação">
                    <div className='academic'>
                        <span/>
                        <h5>2025</h5>
                        <h6>Cursando 3º Semestre</h6>
                        <h4>Análise e Desenvolvimento de Sistemas</h4>
                        <p>Instituto Federal de Educação, Ciência e Tecnologia de Rondônia</p>
                    </div>
                </AboutCard>


                <AboutCard
                imagem={<DataObjectIcon sx={{fontSize:"40px"}}/>}
                titulo="Objetivo">
                    <div className="goal">
                        <span><QuoteIcon sx={{fontSize:"64px"}}/></span>
                        <p>Busco uma primeira oportunidade no mercado de trabalho da Tecnologia da Informação, com objetivo de aprender e colocar em prática meus conhecimentos adquiridos através da minha formação em andamento, e também dos meus projetos pessoais que envolvem o uso de React, Html, Css, consultas SQL, versionamento de código GitHub, design Figma.</p>
                    </div>
                </AboutCard>
            </div>
        </div>
    )
}

export default About