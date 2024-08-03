const startBtn = document.getElementsByClassName("startBtn")[0];
const timer = document.getElementsByClassName("timer")[0];
const hr = document.getElementsByClassName("hr")[0];
const min = document.getElementsByClassName("min")[0];
const sec = document.getElementsByClassName("sec")[0];
const stopBtn = document.getElementsByClassName("stopBtn")[0];
const resetBtn = document.getElementsByClassName("resetBtn")[0];



let i = 0;
let j = 0;
let k = 0
let intervalId;

const updateTime = () => {
    i < 10 ? sec.innerHTML = "0"+ i : sec.innerHTML = i ;
    j < 10 ? min.innerHTML = "0"+j : min.innerHTML = j ;
    k < 10 ? hr.innerHTML = "0"+k : hr.innerHTML = k ;

}

startBtn.addEventListener("click", ()=>{
    if(!intervalId){
        intervalId = setInterval(()=>{
            ++i;
            if(i ===  60) {
                i = 0;
                ++j;
                if(j === 60){
                    j = 0;
                    ++k;
                }
            }
            updateTime();
        },1000)
    }
})

stopBtn.addEventListener("click",()=>{
    clearInterval(intervalId);
    intervalId = null;
})

resetBtn.addEventListener("click", ()=> {
    clearInterval(intervalId);
    i = 0;
    intervalId = null;
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";
})

updateTime();