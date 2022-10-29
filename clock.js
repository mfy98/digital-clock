function time(){
    var currentTime = new Date();
    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    

    const hoursJS = document.getElementById('hours');
    hoursJS.textContent = hours;
    const minutesJS = document.getElementById('minutes');
    minutesJS.textContent = minutes;
    const secondsJS = document.getElementById('seconds');
    secondsJS.textContent = seconds;
    const isPM = document.getElementById('isPM');

    if(hours>12){
        isPM.textContent = 'PM';
        hours -=12;
    }
    else
        isPM.textContent = 'AM';
    
    setTimeout("time()",1000);


    
}
time();