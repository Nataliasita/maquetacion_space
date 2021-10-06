
const content = document.getElementById('root');
const game = document.getElementById('game');
const sidebar = document.getElementById('sidebar');


import memorygame from './memorygame/memorygame.js'
import data from "./memorygame/data.js"

window.addEventListener('load', () => {
    // let startGame = false;
    sidebar.innerHTML = memorygame.createtabgame(data);
    game.innerHTML = memorygame.createBoard(data).join(" ");
    memorygame.btnPlay();

    // if(startGame){
    //     // memorygame.generateClicks();
    // }

});