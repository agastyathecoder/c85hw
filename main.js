canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_width=100;
car1_height=90;
car1_x=10;
car1_y=10;
car2_width=100;
car2_height=90;
car2_x=10;
car2_y=100;
background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image="car1.png";
car2_image="car2 (1).png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_image;
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        c1up();
        console.log("up");
    }
    if(keyPressed=='40'){
        c1down();
        console.log("up");
    }
    if(keyPressed=='37'){
        c1left();
        console.log("up");
    }
    if(keyPressed=='39'){
        c1right();
        console.log("up");
    }
    if(keyPressed=='87'){
        c2up();
        console.log("up");
    }
    if(keyPressed=='83'){
        c2down();
        console.log("down");
    }
    if(keyPressed=='65'){
        c2left();
        console.log("left");
    }
    if(keyPressed=='68'){
        c2right();
        console.log("right");
    }
}
function c1up(){
    if(car1_y>=0){
       car1_y=car1_y-10;
       uploadCar1()
       uploadBackground(); 
    }
}
function c1down(){
    if(car1_y<=500){
       car1_y=car1_y+10;
       uploadCar1()
       uploadBackground(); 
    }
}
function c1left(){
    if(car1_x>=0){
       car1_x=car1_x-10;
       uploadCar1()
       uploadBackground(); 
    }
}
function c1right(){
    if(car1_x>=0){
       car1_x=car1_y+10;
       uploadCar1()
       uploadBackground(); 
    }
}
function c2up(){
    if(car2_y>=0){
       car2_y=car2_y-10;
       uploadCar2()
       uploadBackground(); 
    }
}
function c2down(){
    if(car2_y<=500){
       car2_y=car2_y+10;
       uploadCar2()
       uploadBackground(); 
    }
}
function c2left(){
    if(car2_x>=0){
       car2_x=car2_x-10;
       uploadCar2()
       uploadBackground(); 
    }
}
function c2right(){
    if(car2_x>=0){
       car2_x=car2_y+10;
       uploadCar2()
       uploadBackground(); 
    }
}
if(car1_x>700){
    console.log("car1 won")
    document.getElementById("game_status").innerHTML="CAR 1 WON!!!"
}
else if(car2_x>700){
    console.log("car2 won")
    document.getElementById("game_status").innerHTML="CAR 2 WON!!!"
}