import RightArrow from '@mui/icons-material/ArrowForward';

function ProjectCard(props) {
    return(
        <div className="project-card">
            <div className="box-image">
                <img src={props.imagem} alt=""/>
            </div>
            <h2>{props.titulo}</h2>
            <div className="linguagem-box">
                <span className="linguagem">{props.linguagem1}</span>
                <span className="linguagem">{props.linguagem2}</span>
                <span className="linguagem">{props.linguagem3}</span>
            </div>
            <p>{props.descricao}</p>
            <a className='view-page' href={props.link} target='_blank'>Visualizar Página<RightArrow/></a>
        </div>
    )
}

export default ProjectCard