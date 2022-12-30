import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/to-header/shadow.css">
    <header>
        <section>
            <a href="/"><figure>🎬</figure></a>
            <a href="/"><h1>THonly™ Studios</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Music Studio</h3>
                <nav>
                    <a href="#Music.Thonly.com"><button class="cohort">Music.Thonly.com</button></a>
                    <!--<h4>Inclusion & naversity</h4>
                    <menu>
                        <li><a>Women & Minorities</a></li>
                        <li><a>Ukrainian Refugees</a></li>
                        <li><a>Cambodian Genocide</a></li>
                    </menu>
                    <h4>Campuses</h4>
                    <menu>
                        <li><a>Cambodia</a></li>
                        <li><a>Ukraine</a></li>
                        <li><a>United States</a></li>
                    </menu>-->
                    <br>
                    <a href="#Music.HeartBank.Studio"><button>Music.HeartBank.Studio</button></a>
                </nav>
            </li>
            <li>
                <h3>Animation Studio</h3>
                <nav>
                    <a href="#Animation.Thonly.com"><button class="cohort">Animation.Thonly.com</button></a>
                    <!--<h4>Explorer</h4>
                    <menu>
                        <li><a>Watch Videos on Udemy</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li><a href="#ios-quiz">Take Quizzes to Check Understanding</a></li>
                    </menu>
                    <h4>Supra Blockchain</h4>
                    <menu>
                        <li><a href="#ios-podcast">Podcast: Motivation & Coding Music</a></li>
                        <li><a href="#ios-code">Interactive Coding Exercises</a></li>
                        <li><a>Remote Pair Programming on Discord</a></li>
                        <li><a>Students' Solo Projects on GitHub</a></li>
                    </menu>
                    <h4>Infra Blockchains</h4>
                    <menu>
                        <li><a>Live Demo: Music Apps</a></li>
                        <li><a>Syntax Flashcards</a></li>
                        <li><a>Students' Writings on Medium</a></li>
                        <li><a>Mock Interviews on YouTube</a></li>
                    </menu>-->
                    <br>
                    <a href="#Animation.HeartBank.Studio"><button>Animation.HeartBank.Studio</button></a>
                </nav>
            </li>
            <li>
                <h3>Metaverse Studio</h3>
                <nav>
                    <a href="#Metaverse.Thonly.com"><button class="cohort">Metaverse.Thonly.com</button></a>
                    <!--<h4>Browser</h4>
                    <menu>
                        <li><a>Women & Minorities</a></li>
                        <li><a>Ukrainian Refugees</a></li>
                        <li><a>Cambodian Genocide</a></li>
                    </menu>
                    <h4>DNS</h4>
                    <menu>
                        <li><a>Cambodia</a></li>
                        <li><a>Ukraine</a></li>
                        <li><a>United States</a></li>
                    </menu>-->
                    <br>
                    <a href="#Metaverse.HeartBank.Studio"><button>Metaverse.HeartBank.Studio</button></a>
                </nav>
            </li>
            <li>
                <h3>Film Studio</h3>
                <nav>
                    <a href="#Film.Thonly.com"><button class="cohort">Film.Thonly.com</button></a>
                    <!--<h4>Wallet</h4>
                    <menu>
                        <li><a>Watch Videos on Udemy</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li><a href="#backend-quiz">Take Quizzes to Check Understanding</a></li>
                    </menu>
                    <h4>Personal Identification</h4>
                    <menu>
                        <li><a href="#backend-podcast">Podcast: Motivation & Coding Music</a></li>
                        <li><a href="#backend-code">Interactive Coding Exercises</a></li>
                        <li><a>Remote Pair Programming on Discord</a></li>
                        <li><a>Students' Solo Projects on Replit</a></li>
                    </menu>-->
                    <br>
                    <a href="#Film.HeartBank.Studio"><button>Film.HeartBank.Studio</button></a>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;