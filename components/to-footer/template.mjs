import "./to-sponsors/element.mjs";
import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/to-footer/shadow.css">
    <nav>
        <main>
            <section>
                <to-sponsors></to-sponsors>
            </section>
            <section>
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
                        <!--<li><a href="https://github.com/sponsors/THonlyMetaverse">GitHub</a></li>
                        <li><a href="https://youtube.com/c/ThonLy">YouTube</a></li>
                        <li><a href="https://twitter.com/thonly">Twitter</a></li>
                        <li><a href="https://medium.com/thonly">Medium</a></li>-->
                    </ul> 
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://kiitos.earth">Kiitos</a></li>
                    </ul> 
                </div>
            </section>
            <section>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:studios@thonly.com">studios@thonly.com</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <small><a href="https://thonly.net">THonly™ Metaverse</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;