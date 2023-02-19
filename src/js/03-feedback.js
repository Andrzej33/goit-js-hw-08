import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state'

const form = document.querySelector('.feedback-form');

onLoadingPage()



// const takeValues = () => {
//     // const { elements: {
//     //     email,
//     //     message }, } = form;
//      const currentValue = {
//         email: form.elements.email.value,
//         message: form.elements.message.value,
//     }
//     return currentValue
// }

const currentValue = {};


const onFormClick = (evt) => {
   

    currentValue[evt.target.name] = evt.target.value;

   
     localStorage.setItem(STORAGE_KEY, JSON.stringify(currentValue));


    };

form.addEventListener('input', throttle(onFormClick,500));



const onSubmit = (evt) => {
    evt.preventDefault()
       
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(currentValue)
    }

window.addEventListener('submit', onSubmit);


function onLoadingPage() {
    const savedFormData = localStorage.getItem(STORAGE_KEY) || '';
    if (savedFormData) {
        
    const parsedValues = JSON.parse(savedFormData);
       form.elements.email.value = parsedValues.email;
        form.elements.message.value = parsedValues.message;
    }
    
}