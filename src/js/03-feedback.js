import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');



const onFormClick = () => { 
    const mailVal = form.elements.email.value;
const messageVal = form.elements.message.value;
    // console.log(form.elements.email.value);
    // console.log(form.elements.message.value);
    const currentValues = {
        email: mailVal,
        message: messageVal,
    }
    // console.log(currentValues)
    localStorage.setItem('feedback-form-state', JSON.stringify(currentValues));
    
};

form.addEventListener('input', onFormClick);

// console.log(localStorage.getItem('feedback-form-state'))


const onSubmit = () => {
    // if (localStorage.getItem('feedback-form-state'))

    const savedValues = localStorage.getItem("feedback-form-state");
const parsedValues = JSON.parse(savedValues);
// console.log(parsedValues); 
}

window.addEventListener('submit', onSubmit);