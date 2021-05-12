canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_img_arr = ["nasa_img_1.jpg", "nasa_img_2.jpg", "nasa_img_3.jpg", "nasa_img_4.jpg", "nasa_img_5.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number)
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;
rover_image = 'rover.png';
background_image = nasa_mars_img_arr[random_number];
console.log("background_img = "+background_image);
add();
function add(){
    console.log("came");
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover();
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
}
function up(){
    if(rover_y >= 0){
        rover_y = rover_y-10;
        console.log("When up key is pressed, X = "+rover_x+", Y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <= 340){
        rover_y = rover_y+10;
        console.log("When down key is pressed, X = "+rover_x+", Y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x-10;
        console.log("When left key is pressed, X = "+rover_x+", Y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x <= 680){
        rover_x = rover_x + 10;
        console.log("When right key is pressed, X = "+rover_x+", Y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}