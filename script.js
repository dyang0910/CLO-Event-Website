/*** Dark Mode ***/
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***/
let rsvpButton = document.getElementById("rsvp-button");
const addParticipant = (event) => {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;

    const newElement = document.createElement("p");
    newElement.textContent = `🎟️ ${name} has signed up for ${date}.`;
    const rsvpList = document.querySelector(".rsvp-participants");
    rsvpList.append(newElement); 
    event.preventDefault();
}

/*** Form Validation ***/
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;
  var rsvpInputs = document.getElementById("rsvp-form").elements;
  for (let i = 0; i < rsvpInputs.length; i++){
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

  if (containsErrors == false){
    addParticipant(event);
    for (let i = 0; i < rsvpInputs.length; i++){
      rsvpInputs[i].value = "";
    }
  }
}
rsvpButton.addEventListener("click", validateForm)
