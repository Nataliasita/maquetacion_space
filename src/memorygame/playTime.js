import { startTime } from './timeCard.js';
import memoryGame from '../memorygame/memoryGame.js'


export function autoPlay(){
    const btnplay = document.getElementById('btnplay');
    
    btnplay.addEventListener('click', () => {
        startTime();
        memoryGame.generateClicks();
    });
    

}; 
