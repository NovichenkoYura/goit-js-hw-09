import Notiflix from 'notiflix';

const form = document.querySelector(".form");


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  // if (shouldResolve) {
  //   // Fulfill
  // } else {
  //   // Reject
  // }


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      return resolve({ position, delay })    
    }
    else {
      return reject({ position, delay })
    }
      
  }, delay)

})
  
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
  
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

// Notiflix.Notify.success('Sol lucet omnibus');

// Notiflix.Notify.failure('Qui timide rogat docet negare');


const onFormSubmit = e => {
  e.preventDefault();
 
  const firstDelay = Number(e.currentTarget[0].value);
  const delayStep = Number(e.currentTarget[1].value);
  const amount = Number(e.currentTarget[2].value)

  let delay = firstDelay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)

    delay += delayStep
  }

}

form.addEventListener('submit', onFormSubmit) 
