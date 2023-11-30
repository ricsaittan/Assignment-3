/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayCounter = 0;
let dailyRate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let dayList = document.querySelectorAll(".blue-hover");

function dayButton(element) {
    element.addEventListener('click', function confirmation() {
        if (element.classList.contains("small-button")) {
            
        }
        else if (element.classList.contains("clicked")) {
            element.classList.remove("clicked");
            dayCounter -= 1;
            calculate();
        }
        else {
            element.classList.add("clicked");
            dayCounter += 1;
            calculate();
        }
    }); 
}

dayList.forEach(dayButton);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");

function cleared(element) {
    if (element.classList.contains("small-button")) {
            
    }
    else {
        element.classList.remove("clicked");
        dayCounter = 0;
        calculate();
        document.getElementById("half").classList.remove("clicked");
        if (document.getElementById("full").classList.contains("clicked")) {

        } else {
            document.getElementById("full").classList.add("clicked");
        }
    }
}

function sort() {
    dayList.forEach(cleared);
}


clearButton.addEventListener('click', sort);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


let smallButton = document.querySelectorAll(".small-button");

function ratesChanger(element) {
    element.addEventListener('click', function changer() {
        if (element.innerHTML == "half") {
            if (element.classList.contains("clicked")) {
                
            } else {
                element.classList.add("clicked");
                document.getElementById("full").classList.remove("clicked");
                dailyRate = 20;
                calculate();
            }
        }
        else if (element.innerHTML == "full") {
            if (element.classList.contains("clicked")) {
                
            } else {
                element.classList.add("clicked");
                document.getElementById("half").classList.remove("clicked");
                dailyRate = 35;
                calculate();
            }
        }
    }); }

smallButton.forEach(ratesChanger);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    document.getElementById("calculated-cost").innerHTML = dailyRate * dayCounter;
}