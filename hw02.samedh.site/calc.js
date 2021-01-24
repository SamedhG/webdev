(function() {
    "use strict";
    // The ID of the function is where it appears in this list
    const funcs = ["+/=", "-", "*", "/"]
    // A function ID
    let curr_func =  0;
    let curr_num = 0;
    let dec = false;
    let next_num = false;
    function num(n) {
        let display = document.getElementById('display');
        if(next_num) {
            display.innerText = n
            next_num = false;
        }
        else if (display.innerText.length <= 10) {
            display.innerText = display.innerText + n
        }
    }

    function fun(n) {
        let display = document.getElementById('display');
        if (!next_num) {
            let num = parseFloat(display.innerText);
            switch(curr_func) {
                case 0:
                    curr_num = curr_num + num;
                    break;
                case 1:
                    curr_num = curr_num - num;
                    break;
                case 2:
                    curr_num = curr_num * num;
                    break;
                case 3:
                    curr_num = curr_num / num;
                    break;
                default: 
                    alert("error")
            }
            display.innerText = curr_num;
        }
        next_num = true;
        document.getElementById(funcs[curr_func]).className = "button";
        document.getElementById(funcs[n]).className = "selected_button";
        curr_func = n;
    }

    function clear() {
        dec = false;
        curr_num = 0;
        next_num = false;
        curr_func = 0;
        document.getElementById('display').innerText = "";
    }
    
    function decimal() {
        if (dec == false) num(".")
        dec = true;
    }

    function setup_calc () {
        let main = document.getElementById('calc');
        // The bottom row added manually
        // THe clean button
        let button = document.createElement("DIV");
        button.innerHTML = "C";
        button.className = "button";
        button.addEventListener('click', clear, false); 
        main.appendChild(button);
        // The 0 button
        button = document.createElement("DIV");
        button.innerHTML = 0;
        button.className = "button";
        button.addEventListener('click', () => num(0), false); 
        main.appendChild(button);
        // The decimal button
        button = document.createElement("DIV");
        button.innerHTML = ".";
        button.className = "button";
        button.addEventListener('click', decimal, false); 
        main.appendChild(button);
        // The plus function
        button = document.createElement("DIV");
        button.innerHTML = funcs[0];
        button.id = funcs[0];
        button.className = "button";
        button.addEventListener('click', () => fun(0), false); 
        main.appendChild(button);
        // Adding all the other buttons
        for (let i = 1; i <=9; i++) {
            let button = document.createElement("DIV");
            button.innerHTML = i;
            button.className = "button";
            button.addEventListener('click', () => num(i), false); 
            main.appendChild(button);
            if (i % 3 == 0) {
                let button = document.createElement("DIV");
                button.innerHTML = funcs[i/3];
                button.id = funcs[i/3];
                button.className = "button";
            button.addEventListener('click', () => fun(i/3), false); 
                main.appendChild(button);
            }
        }
    }

    window.addEventListener('load', setup_calc, false);
})()
