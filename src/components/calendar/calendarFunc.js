const numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysOfTheWeek = 7; // за функцией или внутри?? getMonthData


// подсчёт высокосного года
export const leapYear = (year) => {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

// Функция получает количество дней в месяце, тк бывает февраль 29 дней
export const getDaysOfTheMonth = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    return (leapYear(year) && month === 1) ? (numberOfDaysInMonth[month] + 1) : (numberOfDaysInMonth[month]); // 1 в сравнении это месяц февраль
}

// Получаем номер дня недели. Тк неделя начинается с воскресенья, то отнимаем единицу.
export const getDateOfWeek = (date) => {
    const dayOfWeek = date.getDay();
    return (dayOfWeek === 0) ? 6 : (dayOfWeek - 1);
}
// ДЛЯ выбора класса
export const setClass = (d, today, select) => {
    if (JSON.stringify(d) === today) {
        return 'day today'
    } else if (JSON.stringify(d) === JSON.stringify(select)) {
        return 'day selected'
    } else {
        return 'day'
    }
}


//Правильное расположение дат в месяце
export const getMonthData = (year, month) => {
    const res = [];
    const date = new Date(year, month);
    const daysOfTheMonth = getDaysOfTheMonth(date);
    const monthStartOn = getDateOfWeek(date);
    let day = 1;
    for (let i = 0; i < (daysOfTheMonth + monthStartOn) / daysOfTheWeek; i++) {
        res[i] = [];

        for (let j = 0; j < daysOfTheWeek; j++) {
            if ((i === 0 && j < monthStartOn) || day > daysOfTheMonth) {
                res[i][j] = undefined;
            } else {
                res[i][j] = new Date(year, month, day++);
            }
        }
    }
    return (
        res
    )
}

//подсчёт количества задач на день
export const countTask = (d, arr) => {
    let i = 0;   
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].date === d.toDateString()) {
            i = i + 1;            
        }
    }
    return i;
    
}

