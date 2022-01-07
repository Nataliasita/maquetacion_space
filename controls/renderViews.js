import { home_desktop } from '../views/home_desktop.js';
import { home_mobile } from '../views/home_mobile.js';
import '../components/desktop-menu.js';
import '../components/mobile-menu.js';
import { home1 }from '../components/home1.js'
import { homeInit } from '../components/homeInit.js';
import { personajes} from '../components/personajes.js';
import { homeAmbientes } from '../components/ambientes.js';
import { modal_return } from '../components/modal.js';



export function renderHome($containerGeneral){
  Menu($containerGeneral);
  $containerGeneral.innerHTML +=homeInit();
  let prueba= document.querySelector('.btn_init');
  prueba.onclick= function(){
    document.querySelector(".home_init").style.display = "none";
    $containerGeneral.innerHTML +=personajes();
    
    function MyTest() {
          var aviso1= document.getElementById("myModal");
           aviso1.style.opacity = 1;

         var cambio= setInterval(function() {
          aviso1.style.opacity = aviso1.style.opacity ==1 ? 0 : 1;
          }, 3000);
      }
      MyTest();

      let cambio_stage_astro1 = document.querySelector('.btn_joe');
      cambio_stage_astro1.onclick= function(){
        document.querySelector(".personajes").style.display = "none";
        $containerGeneral.innerHTML +=homeAmbientes();
        var x= document.getElementById("taste_1").name;
        console.log(x)
//        console.log(name1);
        document.getElementById("name_per").innerHTML=x;
        document.getElementById("image_astro").setAttribute('src','images/joeM.png');

        let cambio_ambiente1= document.querySelector('.btn_tarjetas');
        cambio_ambiente1.onclick= function(){
        document.querySelector(".home_am").style.display = "none";
        // $containerGeneral.innerHTML +=stage_tar();
        // var content_target = document.querySelector(".home_p");
//        content_target.insertAdjacentHTML('afterbegin','<div id="root"></div>');
//        var clon = document.getElementById('root').cloneNode(true);
//        clon.setAttribute('style',"display: block;")
          function r($containerGeneral){
            document.getElementById('root').style.display ='block';
            document.querySelector('.bigContainer').style.display = "none";
            document.getElementById("playerAvatar").setAttribute('src','images/media_joe.png');
            document.getElementById("playerName").innerHTML=x;


            // CAMBIO MODAL //

            
            let btn_modal2=document.getElementById('return_main2');
            btn_modal2.addEventListener('click', ()=>{

            
            var contain_target=document.getElementById('root');
            contain_target.innerHTML+=modal_return();

            document.querySelector('.modal_puzz').style.display ='block';

            var modal_ok=document.getElementById('btn_modal_1');
            modal_ok.addEventListener('click', ()=>{
            document.getElementById('root').style.display ='none';
            document.querySelector('.bigContainer').style.display = "block";
            document.querySelector(".home_am").style.display = "block";
            document.querySelector('.modal_puzz').style.display ='none';

             })
    
            var modal_none=document.getElementById('btn_modal_2');
              modal_none.addEventListener('click', ()=>{
              document.querySelector('.modal_puzz').style.display ='none';
    
            })
    
            })
            







          }
          r();
                    function MyTest2() {
              document.getElementById("myModal1").style.display = "none";
              setTimeout(function() {
                  document.getElementById("myModal1").style.display = "block";
              }, 0);
             
          }
          MyTest2();
          
         

       }

       // cambio Ambiente 3 

       let cambio_ambiente3= document.querySelector('.btn_puzzle');
       cambio_ambiente3.onclick= function(){
       document.querySelector(".home_am").style.display = "none";
        

       function r($containerGeneral){
        document.querySelector('.container').style.display ='block';
        document.querySelector('.bigContainer').style.display = "none";
        document.getElementById("gamer_img").setAttribute('src','images/media_joe.png');
        document.getElementById("gamer").innerHTML=x;
        // var contain_puzz= document.querySelector('.modal_puzz');
        // contain_puzz.style.display="none";
        var contain_puzzle=document.querySelector('.container');
        contain_puzzle.innerHTML+=modal_return();
        let btn_modal=document.getElementById('return_main');
        btn_modal.addEventListener('click', ()=>{
      
        document.querySelector('.modal_puzz').style.display ='block';
        var modal_ok=document.getElementById('btn_modal_1');
        modal_ok.addEventListener('click', ()=>{
        document.querySelector('.container').style.display ='none';
        document.querySelector('.bigContainer').style.display = "block";
        document.querySelector(".home_am").style.display = "block";
        document.querySelector('.modal_puzz').style.display ='none';
         })

        var modal_none=document.getElementById('btn_modal_2');
          modal_none.addEventListener('click', ()=>{
          document.querySelector('.modal_puzz').style.display ='none';

        })

        })



      }
      r();
              
       
       // var content_target = document.querySelector(".home_p");
//        content_target.insertAdjacentHTML('afterbegin','<div id="root"></div>');
//        var clon = document.getElementById('root').cloneNode(true);
//        clon.setAttribute('style',"display: block;")
        //  function r($containerGeneral){
        //    document.getElementById('root').style.display ='block';
        //    document.querySelector('.bigContainer').style.display = "none";
        //    document.getElementById("playerAvatar").setAttribute('src','images/media_joe.png');
        //    document.getElementById("playerName").innerHTML=x;
        //  }
        //  r();
        //            function MyTest2() {
        //      document.getElementById("myModal1").style.display = "none";
        //      setTimeout(function() {
        //          document.getElementById("myModal1").style.display = "block";
        //      }, 0);
            
        //  }
        //  MyTest2();
         
        

      }

 
    



      }

///lili


      let cambio_stage_astro2 = document.querySelector('.btn_lili');
      cambio_stage_astro2.onclick= function(){
        document.querySelector(".personajes").style.display = "none";
        $containerGeneral.innerHTML +=homeAmbientes();
        var x= document.getElementById("taste_2").name;
        console.log(x)
//        console.log(name1);
        document.getElementById("name_per").innerHTML=x;
        document.getElementById("image_astro").setAttribute('src','images/liliM.png');

        
        let cambio_ambiente1= document.querySelector('.btn_tarjetas');
        cambio_ambiente1.onclick= function(){
        document.querySelector(".home_am").style.display = "none";
        //        $containerGeneral.innerHTML +=stage_tar();
        function r($containerGeneral){
          document.getElementById('root').style.display ='block';
          document.querySelector('.bigContainer').style.display = "none";
          document.querySelector('#playerAvatar').setAttribute('src','images/media_lili.png');
          document.getElementById("playerName").innerHTML=x;
        }
        r();
                  function MyTest2() {
            document.getElementById("myModal1").style.display = "none";
            setTimeout(function() {
                document.getElementById("myModal1").style.display = "block";
            }, 0);
          
        }
        MyTest2();

        
        



       }
       let cambio_ambiente3= document.querySelector('.btn_puzzle');
      cambio_ambiente3.onclick= function(){
      document.querySelector(".home_am").style.display = "none";
     
      function r($containerGeneral){
       document.querySelector('.container').style.display ='block';
       document.querySelector('.bigContainer').style.display = "none";
       
       document.getElementById("gamer_img").setAttribute('src','images/media_lili.png');
        document.getElementById("gamer").innerHTML=x;

        var contain_puzzle=document.querySelector('.container');
        contain_puzzle.innerHTML+=modal_return();
        let btn_modal=document.getElementById('return_main');
        btn_modal.addEventListener('click', ()=>{
      
        document.querySelector('.modal_puzz').style.display ='block';
        var modal_ok=document.getElementById('btn_modal_1');
        modal_ok.addEventListener('click', ()=>{
        document.querySelector('.container').style.display ='none';
        document.querySelector('.bigContainer').style.display = "block";
        document.querySelector(".home_am").style.display = "block";
        document.querySelector('.modal_puzz').style.display ='none';
         })

        var modal_none=document.getElementById('btn_modal_2');
          modal_none.addEventListener('click', ()=>{
          document.querySelector('.modal_puzz').style.display ='none';

        })

        })

     }
     r();
    }






      }

      let cambio_stage_astro3 = document.querySelector('.btn_rover');
      cambio_stage_astro3.onclick= function(){
        document.querySelector(".personajes").style.display = "none";
        $containerGeneral.innerHTML +=homeAmbientes();
        var x= document.getElementById("taste_3").name;
        console.log(x)
//        console.log(name1);
        document.getElementById("name_per").innerHTML=x;
        document.getElementById("image_astro").setAttribute('src','images/roverM.png');

        
        let cambio_ambiente1= document.querySelector('.btn_tarjetas');
        cambio_ambiente1.onclick= function(){
        document.querySelector(".home_am").style.display = "none";
//        $containerGeneral.innerHTML +=stage_tar();

        function r($containerGeneral){
          document.getElementById('root').style.display ='block';
          document.querySelector('.bigContainer').style.display = "none";
          document.querySelector('#playerAvatar').setAttribute('src','images/media_rover.png');
          document.getElementById("playerName").innerHTML=x;
        }
        r();
                  function MyTest2() {
            document.getElementById("myModal1").style.display = "none";
            setTimeout(function() {
                document.getElementById("myModal1").style.display = "block";
            }, 0);
          
        }
        MyTest2();






       }
       let cambio_ambiente3= document.querySelector('.btn_puzzle');
      cambio_ambiente3.onclick= function(){
      document.querySelector(".home_am").style.display = "none";
     
      function r($containerGeneral){
       document.querySelector('.container').style.display ='block';
       document.querySelector('.bigContainer').style.display = "none";
       
       document.querySelector('#gamer_img').setAttribute('src','images/media_rover.png');
          document.getElementById("gamer").innerHTML=x;

          var contain_puzzle=document.querySelector('.container');
          contain_puzzle.innerHTML+=modal_return();
          let btn_modal=document.getElementById('return_main');
          btn_modal.addEventListener('click', ()=>{
        
          document.querySelector('.modal_puzz').style.display ='block';
          var modal_ok=document.getElementById('btn_modal_1');
          modal_ok.addEventListener('click', ()=>{
          document.querySelector('.container').style.display ='none';
          document.querySelector('.bigContainer').style.display = "block";
          document.querySelector(".home_am").style.display = "block";
          document.querySelector('.modal_puzz').style.display ='none';
           })
  
          var modal_none=document.getElementById('btn_modal_2');
            modal_none.addEventListener('click', ()=>{
            document.querySelector('.modal_puzz').style.display ='none';
  
          })
  
          })
  
     }
     r();
    }

      }

      
     

  //   function MyTest() {
  //     document.getElementById("myModal").style.display = "none";
  //     setTimeout(function() {
  //         document.getElementById("myModal").style.display = "block";
  //     }, 3000);
  // }
  // MyTest();
  
  // var close = document.getElementsByClassName("close") [0];
  // close.onclick = function() {
  //     myModal.style.display = "none";
  // }
      
  
      
    
  

  
  
  }
 
}






export function Menu($containerGeneral) {
  const mql = window.matchMedia('(max-width: 768px)');
  function pantalla(mobileView) {
    if (mobileView) {
      $containerGeneral.innerHTML= home_mobile();    
    } else {
      $containerGeneral.innerHTML= home_desktop();
    }
  }
  mql.addEventListener('change', (e) => {
    const mobileView = e.matches;
    pantalla(mobileView);
    location.reload();
  });
  const mobileView = mql.matches;
  pantalla(mobileView);
}