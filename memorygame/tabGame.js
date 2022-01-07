const tabgame = {
    
    containerTab: (data) =>{
        
        const items =[];
        
        data.map((item)=>{
            items.push(`<p class="jupiterElements" data-name="${item.name}">${item.name}</p>`)
        });
        
        return `
            <div class="containerTab">
                <div class="playerContainer">
                <div id="myModal1">
                  <p class="text_aviso" style="font-size: 1.5em; text-align: center;">Bienvenido a la mision Tarjetas Explorativas!!!!  </br></br> En esta mision tendras la oportunidad de conocer y seleccionar algunos de los elementos quimicos que se encuentran en planeta Jupiter y sus lunas Io y Europa, tambien elementos de exploracion espacial, y varias condiciones que los astronautas deben resistir en el espacio. </br></br></br></br></br></br></br></br></br></br>¡ pulsa play para comenzar y buena suerte !</p>
                  <img id="image_p" src="./images/parejas.png" alt=""><p id="tex2">Encuentra la pareja correcta</p>
                  <button id="btnplay">PLAY</button>
                  </div> 
                        <img id="playerAvatar" src="">
                        <button class="btn_return2" id="return_main2"></button>
                    <p id="playerName">Nombre de Astronauta</p>
                </div>
                <div class="containerDescription">
                    
                        <h3 class="titleE">ELEMENTOS DEL PLANETA JUPITER</h3>
                        <div class="cardOptions">
                            ${items.join(" ")}
                        </div>
                    
                
                    <div class="containerHits">
                        <label>ACIERTOS </label>
                        <label id="score">0</label>
                        <label>/ 12</label>
                    </div>
                    <div class="timeContainer">
                    <p>
                    <span >Tiempo</span>
                    <span id="minutes">00</span>:
                    <span id="seconds">00</span>
                    </p>
                    </div>
                    
                </div>
            </div>
        `;
    }

};

export default tabgame;