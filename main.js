function showTime(){
    let date = new Date(); //global date object
    let hours = date.getHours(); //0-23
    let minutes = date.getMinutes()//0-59
    let seconds = date.getSeconds()//0-59


    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds}`

}

//zero before 01

function addZero(time){
    if(time<10){
        time = "0" + time
    }
    return time
}

showTime()
//showTimea a callback
setInterval(showTime,1000)