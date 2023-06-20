var div = document.createElement("div");
div.setAttribute("class","div");

let par = document.createElement("p"); // create a p elem
par.setAttribute('class', 'paragraph'); // assing a class to it
par.innerHTML = 'COUNTDOWN USING CALLBACKHELL!';

let span =document.createElement("span");
span.setAttribute("class","span");
span.setAttribute('id','display');
par.appendChild(span);
div.appendChild(par);
document.body.append(div);

let timer=10;
let time = document.getElementById('display');
setTimeout(() => {
    time.innerHTML = timer--;
    setTimeout(() =>{
        time.className = "timer";
        time.innerHTML = timer--;
        setTimeout(() =>{
            time.className = "timer";
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "timer";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "timer";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "timer";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "timer";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "timer";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "timer";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "timer";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.className = "timer";
                                            time.innerHTML = "Happy Independence day"
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
}, 1000); 