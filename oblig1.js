// let dateNumber = '20.04.2020' ;

function isDateValid(dateString) {

    return isLengthCorrect(dateString) &&
           isSetupcorrect(dateString)  &&
           isYearCorrect(dateString) &&
           isMonthCorrect(dateString) &&
           isDayCorrect(dateString);

}

// Sjekker lengde 

    function isLengthCorrect(dateLength) {
    return dateLength.length == 10;

}

// Sjekker om det er punktum i tredje og i sjette posisjon

    function isSetupcorrect(dateString) {
    return dateString.charAt(2) === '.' && dateString.charAt(5) === '.';
    }

// Sjekker om året er 0000 eller større og 9999 eller mindre

    function isYearCorrect(dateString) {
    let year = dateString.substring(6, 10);
    return parseInt(year) >= 0000 && parseInt(year) <=9999 && year.length ==4; 

}

// Sjekker om mnd er 01-12

    function isMonthCorrect(dateString) {
    let month = dateString.substring(3, 5);
    return parseInt(month) >='01' && parseInt(month) <= '12' && month.length ==2;

}

// Sjekker om det er skuddår

    function isLeapYear(year) {
    return (year % 4 == 0) && year % 100 != 0 || year % 400 == 0;

}

// Sjekker at datoer passer mnd 

    function isDayCorrect(dateString) {
    let day = dateString.substring(0, 2);
    let month = dateString.substring(3, 5);
    let year = dateString.substring(6, 10);
  
    if ((month === '02') && (day <= '28' && day >= '01')) {
        console.log ('if')
        return true;
    }
    else if ((month === '04' || month === '06' || month === '09'|| month === '11') && (day <= '30' && day >= '01')) {
        console.log ('else if 1')
        return true;
    }
    else if (month === '02' && isLeapYear(year) && day == '29') {
        console.log ('else if 2')
        return true;
    }
    else if ((day >='01' && day <= '31') && ( month === '01'  || month === '03' || month === '05' || month === '07'
            || month === '08' || month === '10' || month === '12')) {
         console.log ('else if 3')
                return true;
    } else {
        return false;
    }
}