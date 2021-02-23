var rect = document.querySelector(".rect");
var square = document.querySelector(".square");
var circle = document.querySelector(".circle");
var circleHole = document.querySelector(".circle-hole");
var rectHole = document.querySelector(".rect-hole");
var squareHole = document.querySelector(".square-hole");
var start = document.querySelector("body");
var ele ;
var eleHole;
start.addEventListener("load", getShape);

// getting the shapes to spon randomly onload

function getShape(){

        val = Math.ceil(Math.random()*3);
        console.log(val);
        if(val == 1){
            ele = circle;
            eleHole = circleHole;
            rect.style.display = "none";
            square.style.display = "none";
            
        }   
        if(val == 2){
            ele = square;
            eleHole = squareHole;
            
            rect.style.display = "none";
            circle.style.display = "none";
            
            
        } 
        if(val == 3){
            ele = rect;
            eleHole = rectHole;
            
            circle.style.display = "none";
            square.style.display = "none";
            
            
        }
        // getElement();
        
        
        // making the shape move once mouse is pressed down upon
        ele.addEventListener("mousedown", getElement)
        
        function getElement(e){
            ele.style.zIndex = 1;
            eleHole.style.zIndex = 1;

            ele.style.position = "absolute"
            
            function moveElement(pageX, pageY) {
                ele.style.left = pageX - ele.offsetWidth/2 + "px";
                ele.style.top = pageY - ele.offsetWidth/2 + "px";
                
            }
            
            // moveElement(e.pageX, e.pageY);
            
            document.addEventListener("mousemove", onMove);
            
            function onMove(e){
                moveElement(e.pageX, e.pageY);
                
            }
            
            ele.onmouseup = function(){
                document.removeEventListener("mousemove", onMove);
                ele.onmouseup = null;
            }  
            
            
            
        }
        
        
        
        
        eleHole.addEventListener("mouseover", change);
        
        function change(val ){
            val = 0;
            // return val;
            location.reload();
        }
        
        
        // alert successful
        
        // draged shape should dissappear
        // rectangle should fill withh color
    }