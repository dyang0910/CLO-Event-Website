/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    // This section will run whenever the button is clicked
    document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function.
themeButton.addEventListener("click", toggleDarkMode);
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// // Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button");
const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;

    const newElement = document.createElement("p");
    newElement.textContent = `🎟️ ${name} has signed up for ${date}.`;
    const rsvpList = document.querySelector(".rsvp-participants");
    rsvpList.append(newElement); 
    event.preventDefault();
}

// /*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++){
    // TODO: Inside loop, validate the value of each input
    const input = rsvpInputs[i];
    if (input.value.length < 2){
      containsErrors = true;
      input.classList.add("error");
    }else{
      input.classList.remove("error");
    }
  }

  let email = document.getElementById("email");
  if (!email.value.includes(".com")){
    containsErrors = true;
    email.classList.add("error");
  }else{
    email.classList.remove("error");
  }

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false){
    addParticipant(event);
    for (let i = 0; i < rsvpInputs.length; i++){
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm)
// /*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
// /*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
