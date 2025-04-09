// Get the contact form element
const contactForm = document.getElementById('contactForm');

// Add event listener for form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // The form will still submit normally to the Web3Forms endpoint
        
        // For better user experience, you can add this timeout to reset the form
        // after the submission is complete and redirected
        setTimeout(function() {
            contactForm.reset();
        }, 1000);
    });
}

let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');

    
}
