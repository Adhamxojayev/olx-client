const signInLink = document.querySelector('.register-signin');
const signUpLink = document.querySelector('.register-signup');
const regSignIn = document.querySelector('.register-signin__group');
const regSignUp = document.querySelector('.register-signup__group')

signInLink.addEventListener('click', function(){
  regSignIn.classList.add('sign-in-up-active')
  regSignUp.classList.remove('sign-in-up-active')
  signInLink.classList.add('register-active')
  signUpLink.classList.remove('register-active')
});

signUpLink.addEventListener('click', function(){
  regSignIn.classList.remove('sign-in-up-active')
  regSignUp.classList.add('sign-in-up-active')
  signInLink.classList.remove('register-active')
  signUpLink.classList.add('register-active')
});