import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');


const takeValues = () => {
    // const { elements: {
    //     email,
    //     message }, } = form;
     const currentValue = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    return currentValue
}




const onFormClick = () => {
    //     const mailVal = form.elements.email.value;
    // const messageVal = form.elements.message.value;
    // console.log(form.elements.email.value);
    // console.log(form.elements.message.value);
   
        // console.log(email, message)

   

    // console.log(email, message)
    // takeValues()

    const createForm = takeValues();
     localStorage.setItem('feedback-form-state', JSON.stringify(createForm));


    // console.log(takeValues()); 
};

form.addEventListener('input', onFormClick);

// console.log(localStorage.getItem('feedback-form-state'))


const onSubmit = (evt) => {
    evt.preventDefault()
    if (localStorage.getItem('feedback-form-state')) {

        const savedValues = localStorage.getItem("feedback-form-state") || '';
        const parsedValues = JSON.parse(savedValues);
        console.log(parsedValues);
    }
    {
        form.elements.email.value = '';
        form.elements.message.value = '';
    }
    form.reset();
}

window.addEventListener('submit', onSubmit);