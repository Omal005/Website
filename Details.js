
  //selecting gender in details page

  const genderSelect = document.getElementById("gender");

genderSelect.addEventListener("change", function() {
  const selectedGender = genderSelect.value;
  console.log("Selected gender: " + selectedGender);
});

const form = document.querySelector('form');
  const countryCodeSelect = document.getElementById('country-code');
  const mobileNumberInput = document.getElementById('mobnum');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const selectedCountryCode = countryCodeSelect.value;
    const mobileNumber = mobileNumberInput.value;

    const fullPhoneNumber = selectedCountryCode + mobileNumber;

    // Now you can use the fullPhoneNumber for your SMS service or further processing
    alert(`Full Phone Number: ${fullPhoneNumber}`);
  });



// Set the default selected country code
const defaultCountryCode = countryCodeSelect.value;

// Add event listener to update the input value when the country code changes
countryCodeSelect.addEventListener('change', () => {
  const selectedCountryCode = countryCodeSelect.value;
  mobileNumberInput.value = `${selectedCountryCode} ${mobileNumberInput.value}`;
});

// Add event listener to store the input value in local storage
mobileNumberInput.addEventListener('input', () => {
  const inputWithCountryCode = `${countryCodeSelect.value} ${mobileNumberInput.value}`;
  localStorage.setItem('mobileNumber', inputWithCountryCode);
});

// Check if there is a stored mobile number and set the input value accordingly
const storedMobileNumber = localStorage.getItem('mobileNumber');
if (storedMobileNumber) {
  const [storedCountryCode, storedNumber] = storedMobileNumber.split(' ');
  countryCodeSelect.value = storedCountryCode;
  mobileNumberInput.value = storedNumber;
}

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const continueButton = document.getElementById('continue-to-pay');

continueButton.addEventListener('click', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const genderValue = genderSelect.value;

  if (nameValue === '' || emailValue === '') {
    showError('Please fill in all required fields');
    return;
  }

  // Store the values in local storage
  localStorage.setItem('fullName', nameValue);
  localStorage.setItem('email', emailValue);
  localStorage.setItem('gender', genderValue);

  // Redirect to the payment page or perform any other necessary actions
  // window.location.href = 'payment.html';
  window.location.href = 'Payment.html';
});

function showError(errorMessage) {
  const errorMessagesContainer = document.getElementById('error-messages');
  errorMessagesContainer.textContent = errorMessage;
}
