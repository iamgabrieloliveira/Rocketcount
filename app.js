var day = 8;
var hour = 12;
var minute = 35;
var second = 60;

setInterval(tempo, 1000)

function TwoDigits(digit){
    if(digit < 10){
        return '0' + digit
    }else{
        return digit
    }
}
function tempo(){
    second--
    if(second == 1){
        second = 60;
        minute--
    }
    if(minute == 1){
        minute = 60;
        hour--
    }
    if(hour == 1){
        day--
        hour == 24
    }
    document.querySelector('.watch').innerHTML = TwoDigits(day) + ':' + TwoDigits(hour) + ':' + TwoDigits(minute) + ':' + TwoDigits(second)
}

