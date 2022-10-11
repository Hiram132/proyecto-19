    //Se definen las variables que alojaran a los objetos  
    var ghost, torre, puerta, climber;
    var ghostImg,torreImg, puertaImg, climberImg; 
  var puertaGrup, climberGrup;
  var invblokGrup, invblok;
  var gameState = "play"

    //Se llama a la funcion que pre-carga las imagenes en png
    function preload () {
      torreImg = loadImage ("tower.png");
      ghostImg = loadImage ("ghost-standing.png");
      puertaImg = loadImage ("door.png");
     climberImg = loadImage ("climber.png");

      //Se define el grupo de imagenes que apareceran aleatoriamente en el lienzo de trabajo de las puertas
      

      //Se define el grupo de imagenes que aparecera al par de las puertas
      

      //Se define las propiedades para todo el grupo de animaciones de los bloques invicibles que van apareciendo
      
    }

    //Se llama la funcion para asignar propiedades
    function setup () {
      //Se crea el lienzo de trabajo
      createCanvas (600,600);
      //Se agrega la musica del juego
     
      //Se diseña el objeto de la torre
      torre = createSprite (300, 300);
      //Se carga la animacion de la torre con la funcion
      torre.addImage ("torre", torreImg);
      //Se define un dezplazamiento hacia abajo segun las perspectiva del lienzo
      torre.velocityY = 1;

      //Diseño del personaje ghost
    ghost = createSprite (300,500,50,50);
    ghost.addImage("ghost",ghostImg);
    ghost.scale= 0.5

    puertasGrupo = new Group();
    climberGrupo = new Group();
    bloque_invisibleGrupo = new Group();
    }

    //Se llama ala funcion de dibujo 
    function draw () {
      //Se define el color del fondo
      background (0);
    
      if(gameState === "play"){
  if(keyDown("left")){
ghost.x = ghost.x-3
  }
  if(keyDown("right")){
    ghost.x = ghost.x + 3
      }
      if(keyDown("up")){
        ghost.velocityY = -3
          }

  ghost.velocityY = ghost.velocityY +0.5

          //Se condicion a un codigo para ciclar el desplazamiento de la animacion de la torre, cada vez que llege a la posicion y = 300, se regresa a la posicion mas y = 400
      if (torre.y > 400){
        torre.y = 300
      }

      spawnPuertas();


      if (bloque_invisibleGrupo.isTouching(ghost)){
 ghost.velocityY = 0
      }
      if (climberGrupo.isTouching(ghost)||ghost.y > 600){
        gameState = "end";
             }
             drawSprites();

      }

      if(gameState === "end"){
text("GameOver",300,300);
ghost.destroy();
puertasGrupo.destroyEach();
climberGrupo.destroyEach();
bloque_invisibleGrupo.destroyEach();

      }

      //Se llama al comando para dibujar todos los objetos en el lienzo de trabajo
      //Se define el estado de juego end y los elementos que muestra
      
    }

function spawnPuertas(){
  if(frameCount % 60 === 0){
  puerta = createSprite(300,300,30,30);
  puerta.addImage(puertaImg);
  puerta.x = random(100,400);
  puerta.y = random(-10,-5);
  climber = createSprite(300,300,30,30);
  climber.addImage(climberImg);
  climber.x = puerta.x
  climber.y = puerta.y + 70
  bloque_invisible = createSprite(300,300,100,10);
  bloque_invisible.x = climber.x
  bloque_invisible.y = climber.y
  bloque_invisible.visible = false;
puertasGrupo.add(puerta);
climberGrupo.add(climber);
bloque_invisibleGrupo.add(bloque_invisible);
puerta.velocityY = + 5
climber.velocityY = + 5
bloque_invisible.velocityY = + 5

  }
}
 
