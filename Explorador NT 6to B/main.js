canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


mariposa_ancho=120;
mariposa_alto=120;

background_image = "gif.gif";

mariposa_image = "mariposa.png";

mariposa_x = 10;
mariposa_y = 10;


 function add(){
    background_imgTag=new Image();                           
    background_imgTag.onload = uploadBackground;                                                                   // Carga la imagen
    background_imgTag.src = background_image;

    mariposa_imgTag = new Image();  
    mariposa_imgTag.onload = uploadmariposa;   
    mariposa_imgTag.src = mariposa_image;
}                                     


function uploadBackground(){
    ctx.drawImage (background_imgTag ,0,0, canvas.width, canvas.height);
}                       

function uploadmariposa(){
    ctx.drawImage(mariposa_imgTag, mariposa_x, mariposa_y, mariposa_ancho, mariposa_alto);
    }



window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
}


function up(){
if(mariposa_y >=0){
    mariposa_y = mariposa_y - 5;
    uploadBackground();
    uploadmariposa();
 }
}
function down(){
    if(mariposa_y <=500){
        mariposa_y = mariposa_y + 5;
        uploadBackground();
        uploadmariposa();
 }
}
function left(){
    if(mariposa_x >=0){
        mariposa_x = mariposa_x - 5;
        uploadBackground();
        uploadmariposa();
     }
    }
function right(){
    if(mariposa_x <=700){
        mariposa_x= mariposa_x + 5;
        uploadBackground();
        uploadmariposa();
     }
    }