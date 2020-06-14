document.getElementById('frmCalculator').addEventListener('submit', function (e) {
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateLoan, 2000);
  e.preventDefault();
});

//UI  variables

const txtLoanAmount = document.querySelector('#txtLoanAmount');
const txtPercentage = document.querySelector('#txtPercentage');
const txtyearToRePay = document.querySelector('#txtyearToRePay');
const txtMonthlyAmount = document.querySelector('#txtMonthlyAmount');
const totalPayment = document.querySelector('#totalPayment');
const totalInterest = document.querySelector('#totalInterest');



function calculateLoan() {
  /* The mathematical formula for calculating EMIs is:
  
  EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P stands for the loan amount or principal, R is the interest rate per month [if the interest rate per annum is 11%, then the rate of interest will be 11/(12 x 100)], and N is the number of monthly instalments.
  */



  const principleAmount = parseFloat(txtLoanAmount.value);
  const rateOfInterest = parseFloat(txtPercentage.value) / 100 / 12;
  const numberOfMonths = parseFloat(txtyearToRePay.value) * 12;




  // Compute monthly payment
  const x = Math.pow(1 + rateOfInterest, rateOfInterest);
  const monthlyPayment = (principleAmount * x * rateOfInterest) / (x - 1);
  if (isFinite(monthlyPayment)) {

    txtMonthlyAmount.value = monthlyPayment.toFixed(2);
    totalPayment.value = (monthlyPayment * numberOfMonths).toFixed(2);
    totalInterest.value = ((monthlyPayment * numberOfMonths) - (principleAmount)).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  }
  else {
    showError('Please check your numbers');
  }


}

function showError(message) {
  console.log(message);
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';
  const errorDiv = document.createElement('div');
  errorDiv.className = "alert alert-warning";
  errorDiv.appendChild(document.createTextNode(message));

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);

}

function clearError() {
  document.querySelector('.alert').remove();

}