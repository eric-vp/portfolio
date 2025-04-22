import './_repositories.scss';

export default function Repositories() {
    return (
        <section className='repositories'>
            <div className="first">
                <div className="hover">
                    <span className="hover__title">FAVORITE MOVIES</span>
                    <ul>
                        <li>HTML, CSS e JavaScript</li>
                        <li>LocalStorage</li>
                        <li>Responsivo</li>
                    </ul>
                    <div className="links">
                        <a href="https://favorite-movies-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <span>Link do projeto</span>
                        </a>
                        <a href="https://github.com/eric-vp/favorite-movies" target="_blank" rel="noopener noreferrer">
                            <span>Link do repositório</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="hover">
                    <span className="hover__title">OPTIMUS TECH</span>
                    <ul>
                        <li>React</li>
                        <li>Styled Components</li>
                        <li>Responsivo</li>
                    </ul>
                    <div className="links">
                        <a href="https://optimus-tech-eric-vp.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <span>Link do projeto</span>
                        </a>
                        <a href="https://github.com/eric-vp/optimus-tech" target="_blank" rel="noopener noreferrer">
                            <span>Link do repositório</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="third">
                <div className="hover">
                    <span className="hover__title">TO DO</span>
                    <ul>
                        <li>React</li>
                        <li>Styled Components</li>
                        <li>LocalStorage</li>
                    </ul>
                    <div className="links">
                        <a href="https://to-do-list-snowy-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <span>Link do projeto</span>
                        </a>
                        <a href="https://github.com/eric-vp/to-do-list" target="_blank" rel="noopener noreferrer">
                            <span>Link do repositório</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="fourth">
                <div className="hover">
                    <span className="hover__title">CINE TAG</span>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>CSS Modules</li>
                    </ul>
                    <div className="links">
                        <a href="https://cinetag-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <span>Link do projeto</span>
                        </a>
                        <a href="https://github.com/eric-vp/cinetag" target="_blank" rel="noopener noreferrer">
                            <span>Link do repositório</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}