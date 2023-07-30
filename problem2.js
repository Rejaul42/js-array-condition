
function getGreat(myScore){
    if(myScore >= 80){
        return 'A';
    }
    else if(myScore >= 60){
        return 'B';
    }
    else if(myScore >= 50){
        return 'C';
    }
    else if(myScore >= 40){
        return 'D';
    }
    else{
        return 'F';
    }
}
 var great = getGreat(30);
 console.log(great);
