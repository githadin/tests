function calculateMortgage() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const totalPayments = parseFloat(document.getElementById('years').value) * 12;

    const propertyTax = parseFloat(document.getElementById('property-tax').value) / 100 / 12 * principal;
    const homeInsurance = parseFloat(document.getElementById('home-insurance').value) / 12;
    const pmi = parseFloat(document.getElementById('pmi').value) / 100 / 12 * principal;

    const x = Math.pow(1 + interestRate, totalPayments);
    const monthlyPrincipalAndInterest = (principal * x * interestRate) / (x - 1);
    const monthlyPayment = monthlyPrincipalAndInterest + propertyTax + homeInsurance + pmi;

    document.getElementById('monthly-payment').innerText = monthlyPayment.toFixed(2);
}
