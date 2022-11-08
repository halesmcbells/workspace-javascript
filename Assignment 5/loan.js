function startOver(){
    document.getElementById('loan_amt').value = " ";
    document.getElementById("months").value = " ";
    document.getElementById('rate').value = " ";
    document.getElementById('extra').value = 0;

    document.getElementById('loan_info').innerHTML=" ";
    document.getElementById('table').innerHTML=" ";

}

function validate(){
    var loan_amt = document.getElementById('loan_amt').value;
    var months = document.getElementById("months").value;
    var rate = document.getElementById('rate').value ;
    var extra = document.getElementById('extra').value;

    if(loan_amt <=0|| isNaN(Number(loan_amt))){

        alert("Please enter a valid loan amount");
        document.loan_form.loan_amt.value="";

    }else if(months <= 0 ||parseInt(months)!= months){

        alert("Please enter a valid number of months ");
        document.loan_form.months.value="";

    }else if(rate <= 0|| isNaN(Number(rate))){

        alert("Please enter a valid interest rate");
        document.loan_form.rate.value="";

    }else if(extra <0|| isNaN(Number(months))){

        alert("Please enter a valid amount for extra payment");
        document.loan_form.extra.value="";

    }else{

        alert("Validation Complete");
        calculate();
    }
}

function calculate(){
    var loan_amt = document.getElementById('loan_amt').value;
    var months = document.getElementById("months").value;
    var rate = document.getElementById('rate').value ;
    var extra = document.getElementById('extra').value;

    var interest =(loan_amt*(rate*.02)/months);
    var payment = (loan_amt/months)+interest;
}