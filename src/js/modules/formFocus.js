function formFocus () {
    const contactsForm = document.querySelectorAll(".contacts__form-group");
    console.log(contactsForm);
    contactsForm.forEach((contactForm) => {
        const span = contactForm.querySelector('span');
        const input = contactForm.querySelector('input');

        span.addEventListener('click', (e) => {
            console.log(e.target);
            if(e.target == span) {
                span.blur();
                input.focus();
            }
        })
    })
}

formFocus();