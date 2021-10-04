import {resetTime} from './timecard.js';


const cardgame = {

    
    selections : [],
    
    generateCards: (data)=>{
        
        const arrayDataCard= data
        let cards = [];
        `<div class='btnPlay'>
        <button type="" id="btnPlay">PLAY</button>
    </div>`
        for (let i = 0; i < 24; i++) {
            cards.push(`
            <!-- Rotating card -->
            
            <div class="card-wrapper">
        
                <div id="card${i}" class="card" >
            
                    <!-- Front Side -->
                    <div class="face front">
        
                    <!-- Avatar -->
                        <div class="avatar">
                            <img id="fnd_card" src="images/fnd_card_t1.png" >
                        </div>
                    </div>
                    <!-- Front Side -->
                    
                    <!-- Back Side -->
                    <div id="back${i}" class="face back" data-name="${arrayDataCard[0].name}">
                            <!-- Content -->
                            <img src="${arrayDataCard[0].url}">
                        </div>
                    </div>
                    <!-- Back Side -->
                            
                </div>
            </div>
            <!-- Rotating card -->
            `)
            if (i % 2 == 1) {
                arrayDataCard.splice(0, 1)
            }
        }//END FOR
        
        return cards;
    },

    rotateCard: ()=> {
        for (let i = 0; i < 24; i++) {
            let card = document.getElementById("card" + i);
            card.addEventListener('click', () => {
                if (card.style.transform != "rotateY(180deg)") {
                    card.style.transform = "rotateY(180deg)",
                    cardgame.selections.push(i);
                }
                if (cardgame.selections.length == 2) {
                    cardgame.deselect(cardgame.selections);
                    cardgame.selections = [];
                }
              });
        }
    },

    deselect:(selections)=> {
        setTimeout(() => {
            let backCard1 = document.getElementById("back" + selections[0])
            let backCard2 = document.getElementById("back" + selections[1])
            //COMPARA SI LAS TARJETAS SON DIFERENTES PARA ROTARLAS NUEVAMENTE
            if (backCard1.innerHTML != backCard2.innerHTML) {
                let card1 = document.getElementById("card" + selections[0])
                let card2 = document.getElementById("card" + selections[1])
                card1.style.transform = "rotateY(0deg)"
                card2.style.transform = "rotateY(0deg)"
            }
            //COMPARA SI LAS TARJETAS SON IGUALES PARA DEJARLAS EN ESA POSICION
            else{
                backCard1.style.background = "plum";
                backCard2.style.background = "plum";
                const elementsNameJupiter = backCard2.dataset.name;
                const jupiterElements = document.getElementsByClassName("jupiterElements");
                const score = document.getElementById("score");
                //PARA RECORRER LAS CLASES DE LOS PARRAFOS DE LOS ELEMENTOS 
                Array.from(jupiterElements).map(elem =>{
                    if(elem.dataset.name === elementsNameJupiter){
                        //PARA CAMBIAR EL COLOR DEL NOMBRE DE LA LISTA DE ELEMENTOS
                        elem.style.color = "green";
                        //PARA CONTAR LA CANTIDAD DE ACIERTOS DE LAS TARJETAS
                        score.textContent = parseInt(score.textContent) + 1;
                        //PARA DETENER EL CRONOMETRO CUANDO SCORE SEA IGUALA 12
                        if(parseInt(score.textContent)== 12){
                            resetTime();
                            console.log("ganaste")
                        }
                        
                    }
                })
            }
        }, 1000);
    }
};

export default cardgame;