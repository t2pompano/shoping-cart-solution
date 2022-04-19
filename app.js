function UpdateProductNumber(product, price, isincreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isincreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

}
// handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    UpdateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    UpdateProductNumber('phone', 1210, false);
})


// handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function () {
    UpdateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    // const productInput = document.getElementById('case-number');
    // const productNumber = productInput.value;
    UpdateProductNumber('case', 59, false);

});