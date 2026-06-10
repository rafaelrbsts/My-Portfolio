import { Children } from "react"


function AboutCard(props) {
    return(
        <div className="about-card">
            <div className="tema">
                <span>{props.imagem}</span>
                <h2>{props.titulo}</h2>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default AboutCard