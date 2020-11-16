let dateNumber = '20.04.2020' ;

function isDateValid(dateString) {
    let dateNumber  = dateString;

    let day = dateNumber.substring(0, 2);
    let month = dateNumber.substring(3, 5);
    let year = dateNumber.substring(6, 10);

    return isLengthCorrect(dateNumber) &&
           isSetupcorrect(dateNumber)  &&
           isYearCorrect(year) &&
           isMonthCorrect(month) &&
           isDayCorrect(day, month, year);

}

function isLengthCorrect(dateLength) {
    return dateLength.length == 10;

}
    function isSetupcorrect(dateString) {
    return dateString.charAt(2) === '.' && dateString.charAt(5) === '.';
    }

function isYearCorrect(year) {
    return parseInt(year) >= 0000 && parseInt(year) <=9999;
}

function isMonthCorrect(month) {
    return parseInt(month) >=01 && parseInt(month) <= 12 && month.length ==2;

}

function isLeapYear(year) {
    return (year) % 4 == 0 && year % 100 != 0 || year % 400 == 0;

}

function isDayCorrect(day,month,year) {
    if ((month === '02') && (day <= '28')) {
        return true;
    }
    else if ((month === '04' || month === '06' || month === '09'|| month === '11') && (day <= '30' && day >= '01')) {
        return true;
    }
    else if (month === '02' && isLeapYear(year) && day <= '29') {
        return true;
    }
    else if ((month === '01' || month === '03' || month === '05' || month === '07'
    || month === '08' || month === '10' || month === '12' && day <= '31')) {
        return true;
    } else {
        return false;
    }
}