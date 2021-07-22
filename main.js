canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

c_height = 90;
c_width = 100;

c2_height = 90;
c2_width = 100;

car_x = 50;
car_y = 60;

car2_x = 50;
car2_y = 60;


var car_images = ["car.jpeg","car2.jpeg","car3.jpeg","car4.jpeg"];
r = Math.floor(Math.random() * 4);


c_img = 'TheCar';
c1_img = 'TheCar';
bg_img = car_images[r];

function add() {
bg = new Image();
bg.onload = bgUpload;
bg.src = bg_img;

r = new Image();
r.onload = rUpload;
r.src = r_img;
}

function bgUpload() {

ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

}

function cUpload() {

ctx.drawImage(r, car_x, car_y, c_width, c_height);
ctx.drawImage(r, car2_x, car2_y, c2_width, c2_height);

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;

if(keyPressed == '37'){
left();

}

else if(keyPressed == '38'){
up();

}
else if(keyPressed == '39'){
    right();

}
else if(keyPressed == '40'){
    down();

}

if(keyPressed == '87'){
w();

}

else if(keyPressed == '65'){
a();

}
else if(keyPressed == '83'){
    s();

}
else if(keyPressed == '68'){
    d();

}

}

function up()
{
if(car_y >=0)
{
car_y = car_y -10;
bgUpload();
rUpload();
}
}

function down()
{
if(car_y <=500)
{
car_y = car_y +10;
bgUpload();
rUpload();
}
}

function left()
{
if(car_x >= 0)
{
car_x = car_x -10;
bgUpload();
rUpload();
}
}

function right()
{
if(car_x <= 700)
{
car_x = car_x +10;
bgUpload();
rUpload();
}
}


function w()
{
if(car2_y >=0)
{
car2_y = car2_y -10;
bgUpload();
rUpload();
}
}

function s()
{
if(car2_y <=500)
{
car2_y = car2_y +10;
bgUpload();
rUpload();
}
}

function a()
{
if(car2_x >= 0)
{
car2_x = car2_x -10;
bgUpload();
rUpload();
}
}

function d()
{
if(car2_x <= 700)
{
car2_x = car2_x +10;
bgUpload();
rUpload();
}
}



