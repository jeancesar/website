function Card() {
    return (
        <div className="card-content has-text-centered comfortaa-regular">
            <nav className="tabs is-centered mt-2">
                <ul>
                    <li><a href="https://www.linkedin.com/in/jeancesar/" target="_blank"
                        title="Ir para o linkedin" rel="noreferrer">Bio e Experiências</a>
                    </li>
                    <li><a href="https://github.com/jeancesar" target="_blank" title="Ir para o Github" rel="noreferrer">Projetos</a>
                    </li>
                    <li><a href="mailto:contato@jeancesar.com.br?subject=Contato via site"
                        title="Enviar um e-mail." rel="noreferrer">Contato</a></li>
                </ul>
            </nav>
            <section className="my-6">
                <p>Sou um profissional com mais de 16 anos de experiência no mercado de tecnologia, com foco
                    especializado em
                    sistemas web. Busco constantemente ampliar meus conhecimentos por meio de cursos e sou
                    autodidata. Me
                    destaco por agregar valor aos projetos que entrego, sempre buscando a excelência.</p>
            </section>
        </div>
    );
}

export default Card;