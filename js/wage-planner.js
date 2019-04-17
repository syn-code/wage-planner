
document.querySelector('#submit-button').addEventListener('click', () => {

    

    const allInput = document.querySelector('#form-holder').querySelectorAll('input');
    var date = new Date();
    
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();

    var today = `${year}-${month}-${day}`; 
    //pass to an empty object
    const paymentObject = {};

    paymentObject.totalBill = 0;

    //create properties and their values within the object
    allInput.forEach((input) => {

        if (input.id !== 'next_payday') {

            paymentObject[input.id] =  parseFloat(input.value);

        } else {

            paymentObject[input.id] =  input.value;
            
        }

        //add up all outgoings 
        if ( input.id !== 'monthly_wage' && input.id !== 'next_payday' ) {
            paymentObject.totalBill += parseFloat(input.value);
        }
        

    });
    

paymentObject.moneyLeft = paymentObject.monthly_wage - paymentObject.totalBill;
    var dateEntered = new Date(paymentObject.next_payday);
    var daysLeftUntilPayDay = dateEntered.getDate() - parseInt(day);
    this.daysLeft = daysLeftUntilPayDay;
    var dailySpend = paymentObject.moneyLeft / daysLeftUntilPayDay;
    console.table(paymentObject);
    console.log(dailySpend);


});

