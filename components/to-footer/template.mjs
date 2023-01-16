import "./to-sponsors/element.mjs";
import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/to-footer/shadow.css">
    <nav>
        <main>
            <section>
                <to-sponsors></to-sponsors>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://dear.kiitos.earth/#THonly">Kiitos</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#THonly">HeartBank</a></li>
                    </ul> 
                </div>
            </section>
            <section>
                <!--<div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://me.thonly.net/#THonly">THonly</a></li>
                        <li><a href="https://github.com/sponsors/THonlyMetaverse">GitHub</a></li>
                        <li><a href="https://youtube.com/c/ThonLy">YouTube</a></li>
                        <li><a href="https://twitter.com/thonly">Twitter</a></li>
                        <li><a href="https://medium.com/thonly">Medium</a></li>
                    </ul> 
                </div>-->
                <div>
                    <h5>Build</h5>
                    <ul>
                        <li><a href="#">Video Tutorials</a></li>
                        <li><a href="#">Developer Tools</a></li>
                        <li><a href="#">API Documentation</a></li>
                    </ul>
                </div>
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