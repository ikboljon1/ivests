let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}




var jobResponsive = {
    0: {
        items: 1
    },
    576:{
        items: 1
    },
    768: {
        items: 1
    },
    992: {
        items: 1
    },
    1200:{
        items: 1
    }
    
};

owlCarsouelActivate1('.jobDep', false, jobResponsive, 5000, 1500, true, false, 1500, true );

var workResponsive = {
    0: {
        items: 1
    },
    576:{
        items: 1
    },
    768: {
        items: 1
    },
    992: {
        items: 1
    },
    1200:{
        items: 1
    }
    
};

owlCarsouelActivate1('.workProject',true, workResponsive, 5000, 1500, true, true, 1500, );

//owl carousel activate function 
function owlCarsouelActivate1(selector, nav, responsive, autoplayTimeout, autoplaySpeed, dots = true, animateOut, smartSpeed, autoplayHoverPause, margin = 0, loop = true, autoplay = true) {
    var $selector = $(selector);
    if ($selector.length > 0) {
        $selector.owlCarousel({
            loop: loop,
            autoplay: true,
            autoplayTimeout: autoplayTimeout,
            autoplaySpeed: autoplaySpeed,
            dots: dots,
            nav: nav,
            navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
            smartSpeed: smartSpeed,
            autoplayHoverPause: autoplayHoverPause,
            animateOut: animateOut,
            margin: margin,
            responsive: responsive
        });
    }
}


