class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          footer{
            z-index: 10;
            
            width: 100dvw;
            min-height: 5em;

            position: absolute;

            background: var(--blk-clr);
            border-top: solid var(--blu-clr) 1.5px;

            overflow: hidden;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          footer section{
            padding: .75em 2.5em;

            width: 100%;
            height: fit-content;

            background: var(--blk-clr);

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          footer article:first-of-type{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          footer article p{
            text-align: right;
          }

          footer article ul{
            list-style: none;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }

          footer article ul li a{
            position: relative;

            text-decoration: none;
            font-size: 16px;
            font-weight: 400;

            color: var(--grey-clr);
          }

          footer article ul li a::before{
            content: attr(data-pop);
            position: absolute;

            color: var(--blu-clr);

            width: 0px;

            white-space: nowrap;

            overflow: hidden;

            transition: .5s;
          }

          footer article ul li a:hover::before{
            width: 100%;
            
            border-right: 1px solid var(--blu-clr);
            border-bottom: 1px solid var(--blu-clr);
          }

          footer article img{
            width: 100%;

            cursor: pointer;

            transition: .5s;
          }

          footer article img:hover{
            transform: scale(1.25);

            opacity: .5;
          }

          footer div{
            width: 100% !important:
            min-height: fit-content;

            padding: .5em 22em;

            align-self: flex-start;

            display: flex;
            align-items: center;
            justify-content: center;

            background: var(--blu-clr);
          }

          footer div p{
            font-size: 16px;
            color: var(--wht-clr);
          }

          footer p{
            width: 100%;

            text-align: center;
            font-size: 16px;

            color: var(--grey-clr);
          }

          /*--extra large--*/
          @media screen and (min-width: 80em) {
            footer div{
              padding: .5em 30em;
            }
            footer div p{
              white-space: unset;
            }
          }


          /*--tablets--*/
          @media screen and (max-width: 838px) {
            footer div{
              padding: .5em 6em;
            }
          }

          /*--phones--*/
          @media screen and (max-width: 36rem) {
            footer section{
              flex-direction: column;

              gap: 1.25em;
            }

            footer div p{
              white-space: unset;
            }

            footer div{
              text-align: center;
              padding: 1.5em .25em;
            }
        </style>

        <footer>
          <section>

            <article>
              <a class="button" aria-label="Go to the quote page." href="quote.html">Get A Quote</a>

              <ul>

                <li><a data-pop="Services" href="/services.html">Services</a></li>
                <li><a data-pop="About" href="/about.html">About</a></li>
                <li><a data-pop="Contact Us" href="/contact.html">Contact Us</a></li>

              </ul>
            </article>

            <article>
              <p>
                5xxx Kxxxxxxx Cxxxx<br>
                Mxxxxx, AL 366xx<br>
                Phone: 251.xxx.xxxx
              </p>
            </article>

            <article>
              <a aria-label="Go to the about section." href='/index.html'>
                <img rel='preload' loading='lazy' src="../../Assets/Images/strongConceptsLogo.svg" width='275px' height='95px' alt='Strong Concepts logo'></img>
                </img>
              </a>
            </article>

          </section>

          <div>

            <p>© Strong Concepts and Designs, LLC | All Rights Reserved | Made by SATR Tech.</p>

          </div>
        </footer>
      `;
  }
}

customElements.define('footer-component', Footer);