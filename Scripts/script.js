// Get the modal
const modal = document.getElementsByClassName('modal');
const signUp = document.getElementById('signuplink');
/*signUp.addEventListener("click", ()=> {
    console.log(click)
})*/

// closes modal when user clicks "x"
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}