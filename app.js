// https://www.omnicalculator.com/chemistry/percentage-concentration-to-molarity#how-do-i-convert-molarity-to-percentage-concentration

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const molarityRadio = document.getElementById('molarityRadio');
const molarmassRadio = document.getElementById('molarmassRadio');
const densityofsolutionRadio = document.getElementById('densityofsolutionRadio');
const percentageRadio = document.getElementById('percentageRadio');

let molarity;
let molarmass = v1;
let densityofsolution = v2;
let percentage = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

molarityRadio.addEventListener('click', function() {
  variable1.textContent = 'Molar mass (g)';
  variable2.textContent = 'Density of solution (g/cm³)';
  variable3.textContent = 'Percentage (%)';
  molarmass = v1;
  densityofsolution = v2;
  percentage = v3;
  result.textContent = '';
});

molarmassRadio.addEventListener('click', function() {
  variable1.textContent = 'Molarity (mol/cm³)';
  variable2.textContent = 'Density of solution (g/cm³)';
  variable3.textContent = 'Percentage (%)';
  molarity = v1;
  densityofsolution = v2;
  percentage = v3;
  result.textContent = '';
});

densityofsolutionRadio.addEventListener('click', function() {
  variable1.textContent = 'Molarity (mol/cm³)';
  variable2.textContent = 'Molar mass (g)';
  variable3.textContent = 'Percentage (%)';
  molarity = v1;
  molarmass = v2;
  percentage = v3;
  result.textContent = '';
});

percentageRadio.addEventListener('click', function() {
  variable1.textContent = 'Molarity (mol/cm³)';
  variable2.textContent = 'Molar mass (g)';
  variable3.textContent = 'Density of solution (g/cm³)';
  molarity = v1;
  molarmass = v2;
  densityofsolution = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(molarityRadio.checked)
    result.textContent = `Molarity = ${computeMolarity().toFixed(2)} mol/cm³`;

  else if(molarmassRadio.checked)
    result.textContent = `Molar mass = ${computeMolarmass().toFixed(2)} g`;

  else if(densityofsolutionRadio.checked)
    result.textContent = `Density of solution = ${computeDensityofsolution().toFixed(2)} g/cm³`;

  else if(percentageRadio.checked)
    result.textContent = `Percentage = ${computePercentage().toFixed(2)} %`;
})

// calculation

function computeMolarity() {
  return (Number(percentage.value) * Number(densityofsolution.value)) / (Number(molarmass.value) * 100);
}

function computeMolarmass() {
  return (Number(percentage.value) * Number(densityofsolution.value)) / (Number(molarity.value) * 100);
}

function computeDensityofsolution() {
  return (Number(molarity.value) * Number(molarmass.value) * 100) / Number(percentage.value);
}

function computePercentage() {
  return (Number(molarity.value) * Number(molarmass.value) * 100) / Number(densityofsolution.value);
}