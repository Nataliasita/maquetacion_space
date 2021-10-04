const template = document.createElement('template');
template.innerHTML = `
<style>
.header{
    width: 100vw;
    z-index: 45;
    height: 12vh;
    position: fixed;
    font-family: 'Pattaya', sans-serif;
    color: #005D87;
    display:none;
  }
  .list{
    padding: 0;
    margin: 0 12vw 0 0;
    padding: 0;
    list-style:none;
    display: flex;
    justify-content: flex-end;
    font-family: 'Pattaya', sans-serif;
    color: #005D87;
  }
  .header li{
    font-size: 1.65em;
    padding: 3vh 2.5vw;
  }
  .header li a{
    text-decoration: none;
  }
#workH{
    color: #050047;
} 
#workH:hover{
  border-bottom: 3px solid #FFFFFF;
}
#homeH{
    color: #050047;
}
#homeH:hover{
  border-bottom: 3px solid #FFFFFF;
  
}
#contactH{
    color: #050047;
}
#contactH:hover{
  border-bottom: 3px solid #FFFFFF;
  
}
.footer{
  width: 100vw;
  z-index: 16;
  height: 12vh;
  background:#53514c; 
  display: flex;
  bottom:0;
  position:absolute;
}
.logo_footer{
  height: 4.4vh;
  margin-right:1.8vw;
  padding:0.5em;
}
.logo_footer:hover{
  background: #353431;
  border-radius:10px;
  padding:0.5em;
}
.log{
  display: flex;
  width: 10vw;
  position: absolute;
  top: 2.8vh;
  right: 20vw;
  justify-content:space-between;
}
#derechos{
  margin: 5.7vh 0 0 4vw;
  height:2.3vh;
}
#name{
  margin: 5vh 0 0 1.3vw;
  font-family: 'Pattaya', sans-serif;
  color: white;
  font-size:1.1em;
}
</style>
<header class="header">
<ul class="list">
  <li><a id ="workH" href="#work"></a></li>
  <li><a id ="homeH" href="#home"></a></li>
  <li><a id="contactH" href="#contact"></a></li>
</ul>
</header>
`;

class DesktopMenu extends HTMLElement {
  constructor() {
    super();
    this.hash = window.location.hash.substring(1);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  changeHash() {
    const tobeWork = this.shadowRoot.getElementById('workH');
    const tobeHome = this.shadowRoot.getElementById('homeH');
    const tobeContact = this.shadowRoot.getElementById('contactH');
    const foot_work = this.shadowRoot.getElementById('foo_work');

    switch (this.hash) {
      case 'work':
        tobeWork.setAttribute("style","border-bottom: 3px solid #050047;");
        foot_work.setAttribute("style","top:280vh;");
        break;
      case 'home':
        tobeHome.setAttribute("style","border-bottom: 3px solid #050047;");
        tobeHome.setAttribute("style","color: #FFFFFF;");
        tobeContact.setAttribute("style","color: #FFFFFF;");
        tobeWork.setAttribute("style","color: #FFFFFF;");
          break;
      case 'contact':
        tobeContact.setAttribute("style","border-bottom: 3px solid #050047;");
        tobeHome.setAttribute("style","color: #FFFFFF;");
        tobeContact.setAttribute("style","color: #FFFFFF;");
        tobeWork.setAttribute("style","color: #FFFFFF;");
        break;
      default:
        break;
    } 
  }
    connectedCallback(){
      console.log("connectedCallback")
        this.changeHash();
//        this.shadowRoot.getElementById('homeH').addEventListener('click', () => {
//          this.shadowRoot.getElementById('workH').removeAttribute("href");
//          this.shadowRoot.getElementById('contactH').removeAttribute("href");
//        })

//        this.shadowRoot.getElementById('workH').avhddEventListener('cvhlick', () => {
//            this.shadowRoot.getElementById('homeH').removeAttribute("href");
//            this.shadowRoot.getElementById('contactH').removeAttribute("href");
//          })

//          this.shadowRoot.getElementById('contactH').addEventListener('click', () => {
//            this.shadowRoot.getElementById('homeH').removeAttribute("href");
//            this.shadowRoot.getElementById('workH').removeAttribute("href");
//          } )
      }    
  }


window.customElements.define('desktop-menu', DesktopMenu);