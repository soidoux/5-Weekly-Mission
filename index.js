const emailInput = document.querySelector('#email-input');
const emailErrorMessage = document.querySelector('.emailerrormessage');
const passwordInput = document.querySelector('#password-input')
const passwordErrorMessage = document.querySelector('.passworderrormessage');
const loginButton = document.querySelector('.button');

function isEmailValid(email) {
  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    return false;
  }
  if (email.indexOf('@') > email.lastIndexOf('.')) {
    return false;
  }
  return true;
}//이 방법말고 이메일형식인지 알아보는 방법이 있나요?


function validateEmailInput(event) {

  const email = emailInput.value;

  if(email === "") {
    emailInput.classList.add('sign-input-error');
    emailErrorMessage.classList.add('error-message-on');
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    return;
  }
  if(!isEmailValid(email)) {
    emailInput.classList.add('sign-input-error');
    emailErrorMessage.classList.add('error-message-on');
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    return;
  }

  emailInput.classList.remove("sign-input-error");
  emailErrorMessage.classList.remove("error-message-on");
  emailErrorMessage.textContent = "";
}

function validatePasswordInput(event) {

  const password = passwordInput.value;

  if(password === "") {
    passwordInput.classList.add('sign-input-error');
    passwordErrorMessage.classList.add('error-message-on');
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    return;
  }

  passwordInput.classList.remove("sign-input-error");
  passwordErrorMessage.classList.remove("error-message-on");
  passwordErrorMessage.textContent = "";
}

emailInput.addEventListener('focusout', validateEmailInput);

passwordInput.addEventListener('focusout', validatePasswordInput);

function loginUser() {
  const email = emailInput.value;
  const password = passwordInput.value;

  const validEmail = "test@codeit.com";
  const validPassword = "codeit101";

  if (email === validEmail && password === validPassword) {
    
    return window.location.href = "/folder";
  }
  else {
    emailInput.classList.add('sign-input-error');
    emailErrorMessage.classList.add('error-message-on');
    emailErrorMessage.textContent = "이메일을 확인해 주세요.";

    passwordInput.classList.add('sign-input-error');
    passwordErrorMessage.classList.add('error-message-on');
    passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
    return;
  }

  passwordInput.classList.remove("sign-input-error");
  passwordErrorMessage.classList.remove("error-message-on");
  passwordErrorMessage.textContent = "";
}
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    loginUser();
  }
});

loginButton.onclick= loginUser;
