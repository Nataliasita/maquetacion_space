export function personajes() {
    const container = `
 <style>
    .personajes{
        height: 100vh;
        width: 100vw;
        position:absolute;
        background-image: url('images/fnd_personajes.png');
        background-repeat: no-repeat;
        background-size: 100% 112%;
        overflow-y: hidden;
        font-family: 'Orbitron', sans-serif;
        font-weight: 700;
    }
    .title_personajes{
        color:#FFFFFF;
        position: absolute;
        margin:7vh 0 0 21vw;
        font-size:2em;
    }
    .personaje1{
        margin:19vh 0 0 10vw;
        height: 74vh;
        width:26vw;
        flex-direction: column;
    }
    .image_astro1{
        width:24vw;
        height: 64vh;
        margin: 0;
    }
    #astro_joe_name{
        width:20vw;
        height: 10vh;
        text-align:center;
        padding-top:2vh;
        margin:0 0 1vh 0;
        font-size:1.5em;
        color: #FFFFFF;
        font-weight: 500;
    }
    .image_principal{
        position:absolute;
        height:26vh;
        left:16.4vw;
        margin-top:4vh;
    }
    .descrption_jugador{
        width:18vw;
        height:30vh;
        background-color:#C4C4C4;
        position:absolute;
        top:61vh;
        left:11.5vw;
        border-radius: 8px;
    }
    .personaje2{
        margin:0 0 0 39vw;
        height: 74vh;
        width:26vw;
        flex-direction: column;
        position:absolute;
        top:19vh;
    }
    .image_astro2{
        width:24vw;
        height: 64vh;
        margin: 0;
    }
    #astro_lili_name{
        width:20vw;
        height: 10vh;
        text-align:center;
        padding-top:2vh;
        margin:0 0 1vh 0;
        font-size:1.5em;
        color: #FFFFFF;
        font-weight: 500;
    }
    .image_principal2{
        position:absolute;
        height:26vh;
        left:6vw;
        margin-top:4vh;
    }
    .descrption_jugador2{
        width:18vw;
        height:30.5vh;
        background-color:#C4C4C4;
        position:absolute;
        top:42vh;
        left:1.5vw;
        border-radius: 8px;
    }
    .personaje3{
        margin:0 0 0 70vw;
        height: 74vh;
        width:26vw;
        flex-direction: column;
        position:absolute;
        top:19vh;
    }
    .image_astro3{
        width:24vw;
        height: 64vh;
        margin: 0;
    }
    #astro_rover_name{
        width:20vw;
        height: 10vh;
        text-align:center;
        padding-top:2vh;
        margin:0 0 1vh 0;
        font-size:1.5em;
        color: #FFFFFF;
        font-weight: 500;
    }
    .image_principal3{
        position:absolute;
        height:23vh;
        left:5.5vw;
        margin-top:4vh;
    }
    .descrption_jugador3{
        width:18vw;
        height:33vh;
        background-color:#C4C4C4;
        position:absolute;
        top:40vh;
        left:1.5vw;
        border-radius: 8px;
    }
    #myModal{
        width:17vw;
        height:24vh;
        position:absolute;
        top:2vh;
        border-top:#E4C000 solid 3px;
        border-bottom:#E4C000 solid 3px;
        padding:0 1vw;
        transform: rotate(-15deg);
        font-size:0.5em;
        color:#E4C000;
    }
    .text_aviso{
        font-weight:500;
    }
    .descripcion_1{
        padding-left:1vw;
    }
    ul{
        margin:0;
    }
    li{
       padding:0;
    }
    .date_rover{
        font-size:0.88em;
       
    }
    .btn_joe{
        width:20.5vw;
        height: 64vh;
        left:10vw;
        position: absolute;
        background:none;
        cursor:pointer;
        border-radius: 10px;
    }
    .btn_joe:hover{
        border: #E4C000 3px solid;
        background-color:#e4c20050;
    }
    .btn_lili{
        width:20.5vw;
        height: 64vh;
        left:0;
        position: absolute;
        background:none;
        cursor:pointer;
        border-radius: 10px;
    }
    .btn_lili:hover{
        border: #E4C000 3px solid;
        background-color:#e4c20050;
    }
    .btn_rover{
        width:20.5vw;
        height: 64vh;
        left:0;
        position: absolute;
        background:none;
        cursor:pointer;
        border-radius: 10px;
    }
    .btn_rover:hover{
        border: #E4C000 3px solid;
        background-color:#e4c20050;
    }
 </style>


<div class="personajes">

        <h1 class="title_personajes" >Selecciona un personaje para iniciar la mision</h1>

    <div class="personaje1">
       <p id="astro_joe_name">Astronauta Joe</p>
          <img class="image_astro1" src="./images/cabina.png" alt="">
          <img class="image_principal" src="./images/joe-cm.png" alt="">
                 <div class="descrption_jugador">
                    <p class="descripcion_1">Especificaciones</p>
                    <ul><li class="date_rover">Su traje lo proteje de las extremas temperaturas y las peligrosas radiaciones del espacio</li></ul>
                    <ul><li class="date_rover">Posse habilidades de interaccion en la exploracion espacial</li></ul>
                 </div>
                 <input class= "btn_joe"type="button" id="taste_1" name="Astronauta Joe" value="">
                 <label for="taste_1"></label>
    </div>
         <div class="personaje2">
              <p id="astro_lili_name">Astronauta Lili</p>
                        <img class="image_astro2" src="./images/cabina.png" alt="">
                     <img class="image_principal2" src="./images/lili-cm.png" alt="">
                              <div class="descrption_jugador2">
                                  <p class="descripcion_1">Especificaciones</p>
                                  <ul><li class="date_rover">Su traje espacial es blanco porque este color es el que más refleja la luz del sol y la protege de la exposicion a la radiación</li></ul>
                              </div>
                <input class= "btn_lili"type="button" id="taste_2" name="Astronauta Lili" value="">
                <label for="taste_2"></label>
         </div>

         <div class="personaje3">
         <p id="astro_rover_name">Robot Rover</p>
                   <img class="image_astro3" src="./images/cabina.png" alt="">
                <img class="image_principal3" src="./images/rover-cm.png" alt="">
                         <div class="descrption_jugador3">
                           <p class="descripcion_1">Especificaciones</p>
                           <ul><li class="date_rover">Ideal para tareas peligrosas, repetitivas o tediosas</li></ul>
                           <ul><li class="date_rover">Disposición integrada de instrumentos científicos </li></ul>
                           <ul><li class="date_rover">Puede visitar lugares inaccesibles</ul></li>
                         </div>
                <input class= "btn_rover" type="button" id="taste_3" name="Robot Rover" value="">
                <label for="taste_3"></label>

        </div>

        <div id="myModal">
        <p class="text_aviso" style="font-size: 2.3em; text-align: center;">Recuerda que tu mision sera explorar el planeta Jupiter</br>¡ Buena Suerte !</p>
        </div>
        
    
       
</div>
        `;
    return container;
  }