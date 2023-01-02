let btn = document.getElementsByClassName("button");
let display = document.getElementById("display");
var string = "";

Array.from(btn).forEach((element) => {
    element.addEventListener("click", (e) => {
        let val = e.target.value;
        if(val == "="){
            string = eval(string);
            display.value = string;
        }else if(val == "C"){
            string = "0";
            display.value = string;
        }else if(val == "➤"){
                if(string.length<=1){
                    string = "0";
                    display.value = string;
                }else{
                    string = string.slice(0, string.length-1);
                    display.value = string;
                }
            }else if(string == "0"){
                string = "" + val;
                display.value = string;
            }else{
                string = string + val;
                display.value = string;
            
        }
    })
})
