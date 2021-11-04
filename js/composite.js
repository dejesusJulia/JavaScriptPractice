const primeOrComposite = (compositeInput) => {
    const primeInput = compositeInput.value;
    // For Message Display
    const primeAlert = document.createElement('div');
    const primeAlertMsg = document.createElement('p');
    primeAlert.setAttribute('id', 'primeAlert');
    let msg = "";
    // Factors Array
    let compositeArr = [];
    let f = 0;
    
    if(primeInput === ""){
        msg = "Please enter a number";
        primeAlert.classList.add("alert", "alert-warning", "mx-3", "mb-3", "text-center");
    }else{
        
        // LOGIC
        if(primeInput <=1){
            msg = "Not Valid";
            primeAlert.classList.add("alert", "alert-danger", "mx-3", "mb-3", "text-center");
        }else{

            // Test for factors
            for(let i = 2; i < primeInput; i++){
                if(primeInput % i == 0){
                    compositeArr[f] = i;
                    f++; 
                }
            }
            // For message display
            if(f == 0){
                // Prime
                msg = `${primeInput} is prime.`;
                primeAlert.classList.add("alert", "alert-success", "mx-3", "mb-3", "text-justify");
            }else{
                // Composite
                //Display message
                msg = `${primeInput} is composite. Its other factors are: `;
                primeAlert.classList.add("alert", "alert-danger", "mx-3", "mb-3", "text-justify");

            }
        }
    }
    // Append message
    let txtnode = document.createTextNode(msg);
    // Append paragraph
    primeAlertMsg.appendChild(txtnode);
    primeAlert.appendChild(primeAlertMsg);
    
    // Append list to Alert Box if Existing
    if(f !== 0){
        // List of factors
        let list = "<ul>";
        compositeArr.forEach(element => {
            list += "<li>" + element + "</li>";
        });
        list += "</ul>";
        primeAlertMsg.insertAdjacentHTML("afterend", list);
    }
    
    document.querySelector("#primeComposite-card").appendChild(primeAlert);
    setTimeout(function(){
        primeAlert.remove();
    }, 3000);
    
};

export default primeOrComposite;