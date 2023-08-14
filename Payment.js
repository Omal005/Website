const cardNumberInput = document.getElementById("cardnumber");
    const maxDigits = 16; // Including the spaces

    cardNumberInput.addEventListener("input", function() {
      const inputValue = cardNumberInput.value;
      const cleanedValue = inputValue.replace(/\D/g, ""); // Remove non-digit characters
      const limitedValue = cleanedValue.slice(0, maxDigits); // Limit to maxDigits
      
      // Add spaces every 4 characters
      const formattedValue = limitedValue.replace(/\s+/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

      cardNumberInput.value = formattedValue;
    });



    const expiryInput = document.getElementById("expirydate");
    const maxDigit = 4;

    expiryInput.addEventListener("input", function() {
      const inputValue = expiryInput.value;
      const cleanedValue = inputValue.replace(/\D/g, ""); // Remove non-digit characters
      const limitedValue = cleanedValue.slice(0, maxDigit); // Limit to maxDigits

      // Add slashes to format as MM/YY
      const formattedValue = limitedValue.replace(/(\d{2})(\d{0,2})/, (match, p1, p2) => {
        if (p2) {
          return p1 + "/" + p2;
        } else {
          return p1;
        }
      });

      expiryInput.value = formattedValue;
    });

    const form = document.getElementById('paymentform');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const cardNumber = document.getElementById('cardnumber').value;
      const expiryDate = document.getElementById('expirydate').value;
      const cvv = document.getElementById('cvv').value;
      const cardholderName = document.getElementById('cardholdername').value;

      // Create an object to store the values
      const paymentData = {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv,
        cardholderName: cardholderName
      };

      // Store the payment data in local storage
      localStorage.setItem('paymentData', JSON.stringify(paymentData));

      alert('Payment successful! Data stored in local storage.');
      window.location.href='Confirmation.html';
      // You can redirect or perform other actions here
    });
