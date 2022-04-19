function caseUpdateNumber(isincreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isincreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;

}
// handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    console.log('phone plus clicked');
})


// handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function () {
    caseUpdateNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    caseUpdateNumber(false);

});