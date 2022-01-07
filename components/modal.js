export function modal_return(){
    const container = `
    <style>
    .modal_puzz{
        height:100vh;
        width: 100vw;
        top:0;
        position:absolute;
        background-color: #00052b6b;
        backdrop-filter: blur(2px);
        display:flex;
        flex-direction: column;
        font-family: 'Orbitron', sans-serif;
        justify-content: center;
        text-align: center;
        color:#ffffff;
        align-items: center;
       
    }
    .mesagge{
        display:flex;
        height:37vh;
        width: 50vw;
        flex-direction: column;
        justify-content: center;
        background-color: #00052B;
        text-align: center;
        border-radius: 20px;
        position:absolute;
        left:25vw;
        top:15vw;
    }
    .mesagge_btn{
        height: 11vh;
        width: 50vw;
        bottom: 0.5vh;
        display:flex;
        left:1vw;
        color:#FFFFFF;
        font-size:1.5em;
        border-width:4px;
        justify-content: center;
        flex-direction: row;
        font-family: 'Orbitron', sans-serif;
        font-weight: 700;
        align-items: center;

    }
    .title-modal{
        height:8vh;
        width: 50vw;
        margin:0;
        padding-top:2vh;
    }
    .description_modal{
        height:11vh;
        width: 50vw;
    }
    #btn_modal_1{
        height:8vh;
        width: 12vw;
        background:none;
        color:#FFFFFF;
        border-radius: 70px;
        margin-right: 3vw;
        font-size:0.9em;
        font-family: 'Orbitron', sans-serif;
    }
    #btn_modal_1:hover{
        background-color: #e6bb00;
        cursor:pointer;
    }
    #btn_modal_2{
        height:8vh;
        width: 12vw;
        background:none;
        color:#FFFFFF;
        border-radius: 70px;
        font-size:0.9em;
        font-family: 'Orbitron', sans-serif;
    }
    #btn_modal_2:hover{
        background-color: #e6bb00;
        cursor:pointer;
    }
    
    </style>

    <div class="modal_puzz" style="display:none;">
            <div class="mesagge">
                <h2 class="title-modal"> Atencion astronauta !!!!!!!!</h2>
                    <p class="description_modal">Recuerda que si te vas en este momento no podras recuperar el avance <br><br>¿ Estas seguro de abandonar la mision ?</p>
                    <div class="mesagge_btn">
                           <button id="btn_modal_1">Si</button>
                           <button id="btn_modal_2">No</button>
                    </div>
            </div>

    </div>





    `;
    return container;

}
