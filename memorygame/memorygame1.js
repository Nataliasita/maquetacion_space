import cardgame from './cardgame.js'
import {autoPlay} from './playtime.js'
import tabgame from './tabgame.js'

const memorygame = {

  
    //PARA GENERAR EL TABLERO DE JUEGO DE LAS TARJETAS
    createBoard: (data) => {
      return cardgame.generateCards(data).sort(() => Math.random() - 0.5);
    },

    generateClicks: ()=>{
        cardgame.rotateCard();
    },

    createtabgame: (data) => {
      return tabgame.containerTab(data);

  },


    btnPlay: () => {
      autoPlay();
    }

}

export default memorygame;