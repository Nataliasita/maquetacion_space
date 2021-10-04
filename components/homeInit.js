export function homeInit() {
    const container = `
 <style>
    .home_init{
        height: 100vh;
        width: 100vw;
        position:absolute;
        background-image: url('images/fnd.png');
        background-repeat: no-repeat;
        background-size: 100% 112%;
        overflow-y: hidden;
        
    }
    .title_name{
        height: 29vh;
        position:absolute;
        margin:25vh 0 0 35vw;
    }
    .nave_move{
        margin:45vh 0 0 9vw;
        transform: rotate(15deg);
    }
    .btn_init{
        position:absolute;
        height: 12vh;
        width: 18vw;
        bottom: 10vh;
        left:41vw;
        border-radius: 70px;
        background:none;
        color:#FFFFFF;
        font-size:1.5em;
        cursor:pointer;
        border-width:4px;
        font-family: 'Orbitron', sans-serif;
        font-weight: 800;
    }
    .btn_init:hover{
        background:#ff7f27;
        bottom: 11vh;
        left:41.2vw;
    }
 </style>


<div class="home_init">
    <img class="title_name" src="./images/name_game.png" alt="">
    <img class="nave_move" src="./images/nave_move.gif" alt="">
    <button class="btn_init" type="submit">START</button>
</div>
        `;
    return container;
  }