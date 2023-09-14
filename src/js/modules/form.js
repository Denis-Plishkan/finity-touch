function contactsForm () {
    const contactsForm = document.querySelectorAll(".contacts__form-group");
    
    contactsForm.forEach((contactForm) => {
        // contactForm.addEventListener("click", () => {
        //     const span = contactForm.querySelector('span');
            
        //     span.classList.toggle('active');
        // })
        const input = contactForm.querySelector('input');
        const span = contactForm.querySelector('span');

        input.addEventListener("input", () => {
            if(input.value.trim() !== '') {
                span.classList.add('active');
            } else {
                span.classList.remove('active');
            }
        })
    })
}

contactsForm();