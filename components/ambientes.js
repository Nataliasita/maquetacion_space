export function homeAmbientes() {
    const container = `
 <style>
    .home_am{
        height: 100vh;
        width: 100vw;
        position:absolute;
        background-image:url('images/fondo_3.png');
        background-size:100% 100%;
        background-position:center;
        background-repeat:no-repeat;
        overflow-y: hidden;
        font-family: 'Orbitron', sans-serif;
        color:#FFFFFF;
        font-size:1.4em;
    }
    .home_am::before{
        content:"";
        height: 100vh;
        width: 100vw;
        position:absolute;
        background-color: #00052b46;
    }
    #image_astro{
        width: 11vw;
        height: 23vh;
        position:absolute;
        bottom:0;
        left:45vw
    }
    .bienvenida{
        position:absolute;
        top:1.5vh;
        left:20vw;

    }
    #name_per{
        position:absolute;
        top:1.5vh;
        left:30.5vw;
    }
    #title_mision{
        position:absolute;
        top:10vh;
        left:35vw;
        font-size:1.6em;
        font-weight: 700;
    }
    .ambiente_tarjetas{
        width: 24vw;
        height: 33vh;
        position:absolute;
        background-image: url('./images/parejas.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        bottom:14vh;
        left:4vw;
        display:flex;
        border-radius:10px;
        cursor: pointer;
    }
    .name_amb1{
        bottom:0;
        height:10vh;
        width: 24vw;
        top:20vh;
        position:absolute;
        background-color: rgba(0, 7, 49, 0.644);
        backdrop-filter: blur(2px);
        padding:2.5vh 0 0 2vw;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .ambiente_tarjetas:hover{
        width: 24vw;
        height: 33vh;
        bottom:16.5vh;
        cursor: pointer;
        box-shadow: rgba(240, 211, 46, 0.4) -5px 5px, rgba(240, 221, 46, 0.3) -10px 10px, rgba(240, 227, 46, 0.2) -15px 15px, rgba(240, 221, 46, 0.1) -20px 20px, rgba(240, 221, 46, 0.05) -25px 25px;
    }
    .btn_tarjetas{
        width: 24vw;
        height: 34vh;
        position:absolute;
        background:none;
        bottom:-1vh;
        left:0;
        border-radius:10px;
        border:0;
    }
    .btn_tarjetas:hover{
        cursor: pointer;
    }

    .ambiente_recorrido{
        width: 24vw;
        height: 33vh;
        position:absolute;
        background-image: url('./images/imgeuropa.png');
        background-repeat: no-repeat;
        background-size: 100% 120%;
        top:30vh;
        left:39vw;
        display:flex;
        border-radius:10px;

    }
    .name_amb2{
        bottom:0;
        height:10vh;
        width: 24vw;
        top:20vh;
        position:absolute;
        background-color: rgba(0, 7, 49, 0.644);
        padding:2.5vh 0 0 4vw;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        backdrop-filter: blur(2px);

    }
    .ambiente_recorrido:hover{
        width: 24vw;
        height: 33vh;
        top:28.5vh;
        cursor: pointer;
        box-shadow: rgba(240, 211, 46, 0.4) -5px 5px, rgba(240, 221, 46, 0.3) -10px 10px, rgba(240, 227, 46, 0.2) -15px 15px, rgba(240, 221, 46, 0.1) -20px 20px, rgba(240, 221, 46, 0.05) -25px 25px;
    }
    .btn_recorrido{
        width: 24vw;
        height: 34vh;
        position:absolute;
        background:none;
        bottom:-1vh;
        left:0;
        border-radius:10px;
        border:0;
    }
    .btn_recorrido:hover{
        cursor: pointer;
    }

    .ambiente_puzzle{
        width: 24vw;
        height: 33vh;
        position:absolute;
        background-image: url('./images/puzz.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        bottom:14vh;
        right:4vw ;
        display:flex;
        border-radius:10px;

    }
    .name_amb3{
        bottom:0;
        height:10vh;
        width: 24vw;
        top:20vh;
        backdrop-filter: blur(2px);
        position:absolute;
        background-color: rgba(0, 7, 49, 0.644);
        padding:2.5vh 0 0 1vw;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

    }
    .ambiente_puzzle:hover{
        width: 24vw;
        height: 33vh;
        bottom:16.5vh;
        cursor: pointer;
        box-shadow: rgba(240, 211, 46, 0.4) -5px 5px, rgba(240, 221, 46, 0.3) -10px 10px, rgba(240, 227, 46, 0.2) -15px 15px, rgba(240, 221, 46, 0.1) -20px 20px, rgba(240, 221, 46, 0.05) -25px 25px;
    }
    .btn_puzzle{
        width: 24vw;
        height: 34vh;
        position:absolute;
        background:none;
        bottom:-1vh;
        left:0;
        border-radius:10px;
        border:0;
    }
    .btn_puzzle:hover{
        cursor: pointer;
    }
    #lin{
        color:white;
    }
 </style>


<div class="home_am">

        <p class="bienvenida">Bienvenido</p><p id="name_per"></p>
        <img id="image_astro" src="" alt="">
            <p id="title_mision">Selecciona una mision</p>

        <div class="ambiente_tarjetas">

            <p class="name_amb1" >Tarjetas Explorativas</p>
            <input class= "btn_tarjetas" type="button" id="stage_1" name="tarjetas" value="">
                <label for="stage_1"></label>
        </div>

        <a id="lin" href="https://zagu5.github.io/xplorer-jupiter-challengeNasa2021/">
        <div class="ambiente_recorrido">

            <p class="name_amb2" >Recorrido Jupiter</p>
            
           
        </div>
        </a>

        <div class="ambiente_puzzle">

            <p class="name_amb3" >Rompecabezas Espacial</p>
           
            <input class= "btn_puzzle" type="button" id="stage_3" name="rompecabezas" value="">
                <label for="stage_3"></label>
        </div>

</div>
        `;
    return container;
  }

