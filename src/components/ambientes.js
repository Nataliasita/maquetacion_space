export function homeAmbientes() {
    const container = `
 <style>
    .home_am{
        height: 100vh;
        width: 100vw;
        position:absolute;
        background-color:#00052B;
        overflow-y: hidden;
        font-family: 'Orbitron', sans-serif;
        color:#FFFFFF;
        font-size:1.4em;
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
        background-color:red;
        bottom:14vh;
        left:4vw;
        display:flex;
        border-radius:10px;
    }
    .name_amb1{
        bottom:0;
        height:10vh;
        width: 24vw;
        top:20vh;
        position:absolute;
        background-color:#DEDEDE;
        padding:2.5vh 0 0 2vw;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .ambiente_tarjetas:hover{
        width: 24vw;
        height: 33vh;
        bottom:16vh;
        cursor:pointer;
    }
    .btn_tarjetas{
        width: 24vw;
        height: 34vh;
        position:absolute;
        background:none;
        bottom:-1vh;
        left:0;
        border-radius:10px;
        cursor:pointer;
    }

 </style>


<div class="home_am">

        <p class="bienvenida">Bienvenido</p><p id="name_per"></p>
        <img id="image_astro" src="" alt="">
            <p id="title_mision">Selecciona una mision</p>

        <div class="ambiente_tarjetas">

            <p class="name_amb1" >Tajetas Explorativas</p>
            <input class= "btn_tarjetas" type="button" id="stage_1" name="tarjetas" value="">
                <label for="stage_1"></label>
        </div>

</div>
        `;
    return container;
  }