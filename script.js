
document.querySelector('.buttons').addEventListener('click', function(event){
    let input = event.target.innerText;
    let output = document.getElementById('output').value;
    if(input == "C" ){
        document.getElementById('output').value = 0;
        return;
    }
    if(input == "Back"){
        let preBack = document.getElementById('output').value.split('')
        if(preBack.length == 1){
            document.getElementById('output').value = 0;
            return;
        }
        let afterBack = preBack.slice(0, preBack.length - 1).join('');
        document.getElementById('output').value = afterBack;
        return;
    }
    if(input == '='){
        calculation();
        return;    
    }
    if(output == 0){
        document.getElementById('output').value = input;
    }
    else{
        document.getElementById('output').value = output + input;
    }
    
});
function calculation() {
    let output = eval(document.getElementById('output').value);
    document.getElementById('output').value = output;
}