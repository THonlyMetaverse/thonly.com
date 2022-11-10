const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <div>
                    <h5>Sponsors</h5>
                    <ul class="donors">
                        <li><a href="https://github.com/heartbank"><img src="https://github.com/heartbank.png?size=100"></a></li>
                        <li><a href="https://github.com/siliconwat"><img src="https://github.com/siliconwat.png?size=100"></a></li>
                        <li><a href="https://github.com/thonlymetaverse"><img src="https://github.com/thonlymetaverse.png?size=100"></a></li>
                        <li><a href="https://github.com/nhiakou"><img src="https://github.com/nhiakou.png?size=100"></a></li>
                    </ul>
                </div>
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