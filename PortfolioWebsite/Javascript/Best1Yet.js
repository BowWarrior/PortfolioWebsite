var i = 0;
var x = 0;
var ball = document.getElementsByClassName('ball')[0];
let m = false;
let j = 0;
let q = 0;




function myTransition(){
    $(document).ready(function(){
        $('.ball').animate({
            top: 0,
        }, 2000);
        //myBallDrop();
        
    });
}




function myBallDrop() {
    mySectionChange();
    
    var position = $('#section' + ScrollArr[j]).position();
    var TopOfSection = position.top;
    //alert(TopOfSection);
    var sectHeight = $('#section' + ScrollArr[j]).height()/2;
    //alert(sectHeight);
    //alert(ScrollArr[j]);
    //alert(sectHeight);
    $(document).ready(function(){
        $('.ball').animate({
            top: ((TopOfSection + sectHeight)),
        }, 1000); 
    });
    j = j+1;
  }








    
    
    
    ball.addEventListener("click", function(){
        m = true;
        myRandomDiv();
        return;
      });





function myBallMovingRandomly(){
    ball.addEventListener("click", function(){
        if(x < AmountOfSections){
            x++;
        } else{
            x--;
        }
      });

    //alert(ScrollArr[x]);
    var position = $('#section1').position();
    var TopOfSection = position.top;
    //alert(TopOfSection);
    //var position = $('#section' + ScrollArr[j]).position();
    var sectHeight = $('#section' + ScrollArr[j]).height()/2;
    
    if(q == 0){
        $('.ball').animate({
            left: (Math.random()*$(window).width()-50),
            top: (Math.random()*$(window).height()-50)   
        }, 5000); 
        $('.ball').css({
            AnimationTimeline: 'linear'
        });
    } else{
        //$('.ball').animate({top:$(window).height()-50 + TopOfSection});
        $('.ball').animate({
            left: (Math.random()*$(window).width()-50),
            top: (Math.random()*$(window).height()*q-50 + TopOfSection)   
        }, 5000); 
        $('.ball').css({
            AnimationTimeline: 'linear'
        });
    } //else{
        //$('.ball').animate({top:$(window).height()*q-50 + TopOfSection});
        /*$('.ball').animate({
            left: (Math.random()*$(window).width()-50),
            top: (Math.random()*(TopOfSection+(q+q)*sectHeight-50))  
        }, 5000); 
        $('.ball').css({
            AnimationTimeline: 'linear'
        });*/
   // }
    //alert(j);
}

function myRandomDiv(){ 
    switch(true){
        case (m === false):
            $('.ball').queue(myBallMovingRandomly());
            
        break;

        case (m === true):
            $(".ball").click(function(){
                jQuery.fx.off = true;
                jQuery.fx.off = false;
                //$('.ball').stop()
             });
            $('.ball').stop(true)
            $('.ball').queue(myTransition());
            $('.ball').queue(myBallDrop());
            $('.ball').stop(true)
             
            

            m = false;
            break;
        
        
        
        
        default:               
            break;
    }   
}





//switchController will determine whether 'q' should be rising or decreasing
let switchController = true;

let ScrollArr = [];

function mySectionChange() {    
    var AmountOfSections = document.querySelectorAll('section').length;

//this part here changes whether q should be increasing or decreasing
    if(q == 0){
        switchController = true;
    }
    if(q == AmountOfSections-1){
        switchController = false;
    }

    
    if(switchController == true){    
        q++;
    }else{
        q--;
    }


    //alert(AmountOfSections);
    var BallLink = document.getElementById("BallLink");
    

    switch(true){
        
        case (i < AmountOfSections):
            while(i < AmountOfSections){
                i = i+1;
                ScrollArr.push(i);
                //alert(ScrollArr);
            }
            ScrollArr.pop();
            ScrollArr.pop();
            //alert(ScrollArr);

        case (i >= AmountOfSections):
            while(i != 0 || i >= AmountOfSections){
                i = i-1;
                ScrollArr.push(i);
                //alert(ScrollArr);
            }
        
        let ScrollArrLen = ScrollArr.length;
        //alert(ScrollArr);
        //alert(ScrollArrLen);
        if(x < ScrollArrLen){
            BallLink.setAttribute("href", "#section" + ScrollArr[x]);
            x = x+1;
            //alert(x);
        }
        
            break;      
    }        
}



//this is the infinite loop that makes the ball go every 5sec
setInterval(myRandomDiv, 1000);