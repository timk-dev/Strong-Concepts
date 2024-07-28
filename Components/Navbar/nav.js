class Nav extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            :root{

                /*colors*/
                --blk-clr: #1a1a1a;
                --wht-clr: #F3F3F2;

                /*pallete*/
                --lightblu-clr: #A5BEDD;
                --blu-clr: #3060A4;
                --grey-clr: #C3C3C3;
            }

            header{
                z-index: 10;
                
                width: 100%;
                height: 4.75em;

                position: fixed;

                background: var(--blk-clr);
                border-bottom: solid var(--blu-clr) 1.5px;
                box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

                overflow: hidden;

                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none; 

                transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                -webkit-transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                -moz-transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                -ms-transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                -o-transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            header::-webkit-scrollbar {
                display: none;
            }

            nav{
                width: 100%;

                padding: .25em 2.5em;

                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
            }

            nav div{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            nav div img{
                width: 100%;

                cursor: pointer;

                transition: .5s;
            }

            nav div img:hover{
                transform: scale(1.25);

                opacity: .5;
            }

            nav section{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
            }

            nav article{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
            }

            nav article span{
                font-size: 16px;
                font-weight: 300;
                color: var(--lightblu-clr);

                margin-bottom: .25em;
            }

            nav ul{
                list-style: none;

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                gap: 2.75em;
            }

            nav-link.active{
                color: var(--blu-clr);
            }

            nav ul li a{
                position: relative;

                text-decoration: none;
                font-size: 20px;
                font-weight: 300;

                color: var(--grey-clr);
            }

            nav ul li a::before{
                content: attr(data-pop);
                position: absolute;

                color: var(--blu-clr);

                width: 0px;

                white-space: nowrap;

                overflow: hidden;

                transition: .5s;
            }

            nav ul li a:hover::before{
                width: 100%;
                
                border-right: 1px solid var(--blu-clr);
                border-bottom: 1px solid var(--blu-clr);
            }

            /*--tablets extra large--*/
            @media screen and (max-width: 989px) {
                nav ul li a{
                    font-size: 16px;
                }
            }

            /*--tablets--*/
            @media screen and (max-width: 838px) {
                nav ul li a{
                    font-size: 16px;
                }
            }

            /*--phones--*/
            @media screen and (max-width: 36rem) {
                nav section{
                    display: none;
                }
            }
        </style>

        <header id='navbar'>
            <nav>
                <div>
                    <a aria-label="Go to the about section." href='/index.html'>
                        <img rel='preload' loading='lazy' src="../../Assets/Images/strongConceptsLogo.svg" width='275px' height='75px' alt='Strong Concepts logo'></img>
                        </img>
                    </a>
                </div>

                <section>

                    <article>
                        <span>Mobile, AL - 251.xxx.xxxx - xxxxxxx@gmail.com</span>
                    <article>

                    <ul>

                        <li><a data-pop="Services" class="nav-link" href="/services.html">Services</a></li>
                        <li><a data-pop="About" class="nav-link" href="/about.html">About</a></li>
                        <li><a data-pop="Request A Quote" class="nav-link" href="/quote.html">Request A Quote</a></li>
                        <li><a data-pop="Contact Us" class="nav-link" href="/contact.html">Contact Us</a></li>

                    </ul>
                    
                </section>
            </nav>
        </header>
      `;
    }
  }
  
  customElements.define('nav-component', Nav);