
var x1=32;
var y1=120;
var x2=80;
var y2=5;
var x3=180;
var y3=175;
var x4=30;
var y4=175;
var x5=50;
var y5=150;
var d1=false;
var d2=false;
var d4=false;
var d3=false;
var d5=false;

function setup() {
  createCanvas(600,600);
}

function draw() {

background(255,240,255);
  
  funv(width-150,height-110);
  noFill();
  stroke(3);
  beginShape();
  curveVertex(x1,y1);
  curveVertex(x2,y2);
  curveVertex(x3,y3);
  curveVertex(x4,y4);
  
  curveVertex(x5,y5);
  
  endShape();
  
  stroke(0);
  
  
  
 // bezier(x1,y1,x2,y2, x3, y3, x4, y4);
 ellipse(x5,y5,10,10);
  ellipse(x1,y1,10,10);
    ellipse(x4,y4,10,10);
    
     ellipse(x2,y2,10,10); 
      ellipse(x3,y3,10,10);
  stroke(200);

  line(x1, y1, x2, y2);

  line(x4,y4,x5,y5);

  
 fill(0,0,255,100);
noStroke();
  text("("+x1+","+y1+")",x1,y1);
  text("("+x2+","+y2+")",x2,y2);
  text("("+x3+","+y3+")",x3,y3);
  text("("+x4+","+y4+")",x4,y4);
    text("("+x5+","+y5+")",x5,y5);
   
  
    if(d1){
        x1=mouseX;
    y1=mouseY;
  }
      if(d2){
        x2=mouseX;
    y2=mouseY;
  }
      if(d3){
        x3=mouseX;
    y3=mouseY;
  }
      if(d4){
        x4=mouseX;
    y4=mouseY;
  }
  if(d5){
        x5=mouseX;
    y5=mouseY;
  }
}

function mouseDragged(){
  
  if(dist(mouseX,mouseY,x1,y1)<10){
d1=true;
    
  }
    if(dist(mouseX,mouseY,x2,y2)<10){
d2=true;
    
  }
    if(dist(mouseX,mouseY,x3,y3)<10){
d3=true;
    
  }
    if(dist(mouseX,mouseY,x4,y4)<10){
d4=true;
    
  }
  if(dist(mouseX,mouseY,x5,y5)<10){
d5=true;
    
  }
  

  
}

function mouseReleased(){

    d1=false;
     d2=false;
      d3=false;
       d4=false;
        d5=false;

}

function funv(_x,_y){
  noStroke();
   fill(100);
   textSize(14);
     text("beginShape();",_x,_y);
     text("curveVertex("+x1+","+y1+");",_x,_y+15);
          text("curveVertex("+x2+","+y2+");",_x,_y+30);
               text("curveVertex("+x3+","+y3+");",_x,_y+45);
                    text("curveVertex("+x4+","+y4+");",_x,_y+60);
                         text("curveVertex("+x5+","+y5+");",_x,_y+75);
                              text("endShape();",_x,_y+90);
   
}
