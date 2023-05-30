// variables //

const canvas = document.getElementById("gameGrid");
const ctx = canvas.getContext("2d");
canvas.width = 901;
canvas.height = 901;


let loc_turn_Number = document.querySelector("#turn_Number");
let loc_player = document.querySelector("#player");
let numéro_Case = null;

const player_Color = ["WHITE", "BROWN"];
let player;


const loc_origine = document.querySelector("#case_origine");
const loc_arrivée = document.querySelector("#case_arrivée");


let whoseTurn = 1;
whoseTurn%2 !== 0 ?  player = player_Color[0] :  player = player_Color[1];
 
loc_infos = document.querySelector("#infos");


let pawns_initialPositions =  [{color:"WHITE", vacant:false}, {color:"WHITE", vacant:false}, {color:"WHITE", vacant:false}, {color:"WHITE", vacant:false}, {color:"WHITE", vacant:false},{color:"WHITE", vacant:false}, {color:"WHITE", vacant:false}, {color:"WHITE", vacant:false}, {color:"WHITE", vacant:false}, {color:"WHITE", vacant:false}, 
{color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true},                     
{color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true},                     
{color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true},                     
{color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true},                     
{color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true},                     
{color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true},                     
{color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true},                     
{color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true}, {color:"none", vacant:true},                     
{color:"browns", vacant:false}, {color:"browns", vacant:false}, {color:"browns", vacant:false}, {color:"browns", vacant:false},{color:"browns", vacant:false}, {color:"browns", vacant:false}, {color:"browns", vacant:false}, {color:"browns", vacant:false}, {color:"browns", vacant:false}, {color:"browns", vacant:false}] 



const cellSize = 90;
const cellGap = 5
let gameGrid = [];
let whitepawns = [];
let brownpawns = [];
const pawnsRadius = 40;



let canStep = false;
let canEat = false;


const plays_clues = document.querySelectorAll(".play_clue");

let playTurn = [];






// preparing the game conditions //





     
   
  
  
  




let movement = [];
   const Mouse = {x:undefined, y:undefined, width:0.1, height:0.1}
/* BON CODE 0 UTILISER */
  
   canvas.addEventListener("click", function collectCoord(e){
      
      
      const Mouse = {x:undefined, y:undefined, width:0.1, height:0.1}
      Mouse.x = e.screenX;
      Mouse.y = e.screenY; 
      let numéro_Case = (10*(Math.ceil(Mouse.y/90)-2)+Math.ceil(Mouse.x/90));
      let len = playTurn.length;
      let diff = loc_arrivée.value-loc_origine.value
     
      if(len<2){  playTurn.push(numéro_Case);
                  plays_clues[len].value = numéro_Case; 

      }else{ switch (Math.abs(diff)) {
         case 10:
                     alert("AVANCER")
            
            break;

         case 18:
                     alert("MANGER")
            
            break;

         case 22:
                     alert("MANGER")
            
            break;
      
         default:

                     alert("JOUER")
            break;
      }}})
         
         
         
         
        
                 
            // si 18 ou 22 manger //                                                                    

   

                                         

   
   /* jusqu'à là le code à utiliser */



      

     
     
     


  
   

 
                                 
   
                                                                                   
                                             

               
                                    
                                          
                                            
   function notice(e){
   
      let loc_arrivée = document.querySelector("#case_arrivée");
      let movement = [];
      let abscisse_CaseOrigine = (Number(Math.ceil(e.screenX/90)));
      let ordonnée_CaseOrigine = (Number(Math.ceil(e.screenY/90))-2);
       let numéro_Case = (10*(ordonnée_CaseOrigine)+abscisse_CaseOrigine);
      movement.push(numéro_Case);   }
                                             
                                             
                                            



/* PENSER Á VIDER LE TABLEAU UNE FOIS LES DONNÉES UTILISÉES  
PENSER Á FAIRE UNE FONCTION VÉRIFIANT QUE LE SENS DE DÉPLACEMENT EST CORRECT EN FONCTION DE LA COULEUR */

/* Initialize and draw the Gamegrid */   

class Cell {
                constructor (x, y){
                                     this.x = x;
                                     this.y = y;
                                     this.width = cellSize;
                                     this.height = cellSize;          
                                                                }

                draw(){  ctx.strokeStyle = "navy";
                         ctx.strokeRect(this.x, this.y, this.width, this.height);
                                                                                         } 
                                                                                            }    
                                                                                            
                                                                                            
function createGrid(){
                    for(let y = 0; y<canvas.height; y += cellSize){
                        for(let x = 0; x<canvas.width ; x+= cellSize){
                           gameGrid.push(new Cell(x, y)) 
                                                                             }
                                                                            }
                                                                        }

     createGrid();                                                                   
                                                                    

function handleGameGrid(){
                            for(let i = 0; i<gameGrid.length; i++){
                                gameGrid[i].draw();    }
                                                         }

handleGameGrid();


/* Initialize and draw the Pawns */

// Draws white pawns //
class Whitepawns {
                    constructor (x, y){
                                         this.x = x;
                                         this.y = cellSize/2;
                                         this.radius = pawnsRadius; 
                                         this.color = "Silver";         
                                                                       }


                    draw(){  ctx.fillStyle = this.color;
                             ctx.beginPath();
                             ctx.arc(this.x, this.y, pawnsRadius, 0, 2*Math.PI);
                             ctx.fill();
                                                                 
                                                                                   } 
                                                                                      }

function createWhitePawns(){
                             let y = 45
                             for(let x = cellSize/2; x<canvas.width; x+=cellSize){
                        
                                                                                  whitepawns.push(new Whitepawns(x, y)) }
                                                                                                                           }                 

createWhitePawns()                                                                                                                       
                                                        
             


 function handleWhitepawns(){ for(let i = 0; i<10; i++){ whitepawns[i].draw();}
                                                                                      }

                                                                                      handleWhitepawns();

// Draws brown pawns //
class Brownpawns {
                    constructor (x, y){
                                        this.x = x;
                                        this.y = 855;
                                        this.radius = pawnsRadius; 
                                        this.color = "Brown";   
                                                                          }       
                                                                                                                                           
                                                                    
draw(){  ctx.fillStyle = this.color;
         ctx.beginPath();
         ctx.arc(this.x, this.y, pawnsRadius, 0, 2*Math.PI);
         ctx.fill();
                                                                          }                                                                                                             
                                                                             } 
                                                                                                
 function createBrownPawns(){
                               let y = 855
                               for(let x = cellSize/2; x<canvas.width; x+=cellSize){
                                                                                      brownpawns.push(new Brownpawns(x, y)) }
                                                                                                                                                                                               }                 
createBrownPawns()                                                                                                                       
                                                                                                                            
                                                                                 
function handleBrownpawns(){ for(let i = 0; i<10; i++){ brownpawns[i].draw();}
                                                                                }

handleBrownpawns()
                                                                    

/* Pawns initialized and drawn */

// Playing Loop //


function incrementTurn(){
                            loc_turn_Number.value = ` ${whoseTurn} `;
                            loc_player.value = ` ${player} PLAYER PLEASE PLAY ! `;
                            whoseTurn += 1;
                                                                                        }

                                                                                   

 

function gameLoop(){incrementTurn();}

function avancer(){if(pawns_initialPositions[movement[0]].color == player){console.log("bonne couleur")}
 } 







function getPlay(){
                    const loc_arrivée = document.querySelector("#case_arrivée");
   
                     movement.push(numéro_Case);
                     loc_origine.value = numéro_Case;
                     alert(movement)
     }





 