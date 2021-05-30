
var photo = ['img/11.jpg','img/22.jpg','img/33.jpg']
var imgId = document.querySelector(".img");

var count = 0;
function next(){
    count ++;
    if(count >= photo.length){
        count = 0;
        imgId.src = photo[count];
    }else{
        imgId.src = photo[count];
    }
    
}

function pree(){
    count --;
    if(count < 0 ){
        count =  photo.length -1;
        imgId.src = photo[count];
    }else{
        imgId.src = photo[count];
    }
}