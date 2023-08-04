let i, selectedOperation='', initialValue;
let displayValue = $("#integerInput");
const operatorArray = ["plus", "minus", "multiply", "divide"];
let operationSelected = 0;
let cap = parseInt($("#integerInput").attr('max'));
for(i=0; i<=9; i++){
    $(`.${i}`).click(function() {
        let buttonText = $(this).text();
        let integerValue = parseInt(buttonText);
        let currentValue = displayValue.val();
        displayValue.val(currentValue * 10 + integerValue);
    });
}
$(".delete").click(function () {
    let currentValue = displayValue.val();
    displayValue.val(Math.floor(currentValue / 10));    
})
$(".AC").click(function () {
    location.reload();
})
for(i=0; i<operatorArray.length; i++){
    $(`.${operatorArray[i]}`).click(function() {
        selectedOperation = $(this).text();
        initialValue = displayValue.val();
        if(initialValue >= cap){
            alert("Please do not enter such a large number!!!")
            displayValue.val(0);
            initialValue = 0;
            selectedOperation = '';
        }
        else {
        $(this).css('background-color', 'green');
        displayValue.val(0);
        operationSelected++;
    }
    })
}
$(".equal").click(function() {
    let currentValue = displayValue.val();
    if(currentValue >= cap){
        alert("Please do not enter such a large number!!!");
        displayValue.val(0);
    }
    currentValue = displayValue.val();
    if(operationSelected != 1){alert("Multiple operations Selected.")
    location.reload();
    }
    else{
    operationSelected = 0;
    switch (selectedOperation) {
        case '+':
            $(".plus").css('background-color', 'orange');
            displayValue.val(currentValue - (initialValue * -1));
            break;
        case '-':
            $(".minus").css('background-color', 'orange');
            displayValue.val((initialValue - currentValue));
            break;
        case 'x':
            if ((currentValue * initialValue) > cap || (currentValue * initialValue) < (cap * -1)) {
                alert("Math Error");
                location.reload();
            } else {
                displayValue.val(currentValue * initialValue);
            }
            $(".multiply").css('background-color', 'orange');
            break;
        case '/':
            $(".divide").css('background-color', 'orange');
            if(currentValue == 0) {
                alert("Math Error");
                location.reload();
            }
            else{
                if ((currentValue / initialValue) > cap || (currentValue / initialValue) < (cap * -1)) {
                    alert("Math Error");
                    location.reload();
                } else {
                    displayValue.val(currentValue / initialValue);
                }
            }
            break;
        default:
            alert("please select an operation")
            break;
    }}
})