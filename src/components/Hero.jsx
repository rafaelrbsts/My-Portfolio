import DownArrow from '@mui/icons-material/ArrowDownward';

function Hero() {
    return (
        <div id='inicio' className="container hero">
            <h4>Estudante</h4>
            <h1>Código, <br/> <span>Criação,</span> <br/> Inovação. </h1>
            <button><a href="#projetos">Ver projetos</a><DownArrow/></button>
        </div>
    )
}

export default Hero