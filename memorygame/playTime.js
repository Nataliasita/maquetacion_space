import { startTime } from './timecard.js';
import memorygame from './memorygame.js'


export function autoPlay(){
    const btnplay = document.getElementById('btnplay');
    
    btnplay.addEventListener('click', () => {
        startTime();
        memorygame.generateClicks();
        
    });
    

}; 
