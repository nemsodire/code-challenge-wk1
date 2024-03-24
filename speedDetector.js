const speedlimit=70

function speedDetector (speed){
    let demerit=Math.floor((speed-speedlimit)/5)
    if (speed<=speedlimit){
        return "Ok"
    }
    else if (demerit>0){
        return `points:${demerit}`
    }
    else if (demerit>12){
        return "License suspended"
    }

}
