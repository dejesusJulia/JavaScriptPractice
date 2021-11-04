const leapYear = (leapYearInput) => {
    const year = leapYearInput.value;
    // Create alert box
    const leapYearAlert = document.createElement("div");
    leapYearAlert.setAttribute("id", "leapYearAlert");

    // Alert Colors
    const alertsuccess = "alert-success";
    const alertdanger = "alert-danger";

    // Add classes to div and attach message to alert
    const popup = (color, alertmsg) => {
        leapYearAlert.classList.add("alert", color, "mx-3", "mb-3", "text-center");

        const txtnode = document.createTextNode(alertmsg);
        leapYearAlert.appendChild(txtnode);
    } 

    // COMPUTATION
    if(year === ""){
        // If input is empty
        leapYearInput.classList.add("is-invalid");
        setTimeout(() => {
            leapYearInput.classList.remove("is-invalid");
        }, 1500);
    }else{
        // If year is less than the year proposed in Gregorian Calendar
        if(year < 1582){
            // If YEAR is less than 1000
            popup("alert-warning", "Year not valid. Please enter another value");
            setTimeout(()=>{
                leapYearAlert.remove();
            }, 1500);

        }else{
            if(year % 4 == 0){
                if(year % 100 == 0){
                    if(year % 400 == 0){
                        // LEAP YEAR (CENTURIAL YEAR EXCEPTION)
                        popup(alertsuccess, "It is centurial leap year!");
                        setTimeout(()=>{
                            leapYearAlert.remove();
                        }, 1500);
                    }else{
                        // NOT LEAP YEAR (CENTURIAL YEAR)
                        popup(alertdanger, "It is a common centurial year!");
                        setTimeout(()=>{
                            leapYearAlert.remove();
                        }, 1500);
                    }
                }else{
                    // LEAP YEAR
                    popup(alertsuccess, "It is a leap year!");
                    setTimeout(()=>{
                        leapYearAlert.remove();
                    }, 1500);
                }
            }else{
                // NOT LEAP YEAR
                popup(alertdanger, "It is a common year!");
                setTimeout(()=>{
                    leapYearAlert.remove();
                }, 1500);
            }
        }

        // Append alert message to parent card
        document.querySelector("#leapYear-card").appendChild(leapYearAlert);
    }
};

export default leapYear;