import Button from '../Button/Button';
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
                    <a href="https://favorite-movies-ten.vercel.app/" target="_blank">
                        <span>LINK</span>
                    </a>
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
                    <a href="https://optimus-tech-eric-vp.vercel.app/" target="_blank">
                        <span>LINK</span>
                    </a>
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
                    <a href="https://to-do-list-eric-vp.vercel.app/" target="_blank">
                        <span>LINK</span>
                    </a>
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
                    <a href="https://cinetag-lac.vercel.app/" target="_blank">
                        <span>LINK</span>
                    </a>
                </div>
            </div>
        </section>
    )
}