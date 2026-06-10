import ProjectCard from './ProjectCard.jsx'

import AgronorteIcon from '../images/agronorteicon.png'
import GlobalWarming from '../images/global-warming.png'

function Projects() {
    return(
        <div id='projetos' className="container">
            <h1 className='titulo'>Projetos em destaque</h1>
            <div className="box">
                <ProjectCard
                imagem={AgronorteIcon}
                titulo="Agronorte Corretora"
                linguagem1="React"
                linguagem2="Iframe"
                linguagem3="Hospedagem"
                descricao="Landing Page desenvolvida para cliente que busca mostrar seus serviços de corretagem de graõs no Agro Negócio. Foi utilizado React para construção do site visando reaproveitar componentes que se repetem, lógica JavaScript para rolagem dinâmica da página e menu hamburguer para celulares, além de Iframes para atualizar a seção Notícias e Cotações em tempo real e hospedagem com domínio próprio."
                link="https://agronortecorretora.com.br"
                />
                {/* <ProjectCard
                imagem={GlobalWarming}
                titulo="Aquecimento Global"
                linguagem1="React"
                linguagem2="MUI"
                linguagem3="Rotas"
                descricao="Site desenvolvido em trabalho da disciplina de Programação e Linguagem Visual, com objetivo de estudar Props e Rotas em React, além da biblioteca Material UI. Tema sobre aquecimento Global, utilizado lógica JavaScript para construção do Drawer e também para função de conversão de graus."
                link="https://rafaelrbsts.github.io/aquecimento_global/"
                /> */}
            </div>
        </div>
    )
}

export default Projects