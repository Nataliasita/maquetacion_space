import { renderHome } from '../controls/renderViews.js';


export function router(hash, $containerGeneral) {
//  console.log(hash)
  switch (hash) {
    case 'home':
      renderHome($containerGeneral);
      break;
  
  }
}
