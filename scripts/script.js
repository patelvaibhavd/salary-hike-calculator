function activeSection(value) {
  switch (value) {
    case 'salarybyPercentage':
      document.getElementById("salarybyPercentageSection").classList.remove("hide");
      document.getElementById("salarybyPercentageSection").classList.add("active");
      document.getElementById("percentagebyNewSalarySection").classList.remove("active");
      document.getElementById("percentagebyNewSalarySection").classList.add("hide");
      document.getElementById("salarybyPercentage").classList.add("active");
      document.getElementById("percentagebyNewSalary").classList.remove("active");
      break;
    case 'percentagebyNewSalary':
      document.getElementById("percentagebyNewSalarySection").classList.remove("hide");
      document.getElementById("percentagebyNewSalarySection").classList.add("active");
      document.getElementById("salarybyPercentageSection").classList.remove("active");
      document.getElementById("salarybyPercentageSection").classList.add("hide");
      document.getElementById("percentagebyNewSalary").classList.add("active");
      document.getElementById("salarybyPercentage").classList.remove("active");
      break;
    default: break;
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function clearFieldsForm1() {
  document.getElementById('currentSalary').value = '';
  document.getElementById('percentageofIncrement').value = '';
  document.getElementById('result1').innerHTML = 0;
}

function calculateNewSalary() {
  const currentSalary = document.getElementById('currentSalary').value ? document.getElementById('currentSalary').value : 0;
  const percentageofIncrement = document.getElementById('percentageofIncrement').value ? document.getElementById('percentageofIncrement').value : 0;
  const result = (+percentageofIncrement * +currentSalary)/100 + +currentSalary;
  const result1 = document.getElementById('result1');
  result1.innerHTML = numberWithCommas(parseFloat(result).toFixed(2));
}

function clearFieldsForm2() {
  document.getElementById('currentSalaryPS').value = '';
  document.getElementById('newSalary').value = '';
  document.getElementById('result2').innerHTML = '0 %';
}

function calculatePercentageofIncrement() {
  const currentSalaryPS = document.getElementById('currentSalaryPS').value ? document.getElementById('currentSalaryPS').value : 0;
  const newSalary = document.getElementById('newSalary').value ? document.getElementById('newSalary').value : 0;
  const result = ((newSalary-currentSalaryPS)/currentSalaryPS)*100;
  const result2 = document.getElementById('result2');
  result2.innerHTML = numberWithCommas(parseFloat(result).toFixed(2)) + '%';
}

