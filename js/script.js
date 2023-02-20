// Blog Button
document.getElementById("blog-btn").addEventListener('click', function () {
    window.location.href = "blog.html";
})


// Findings all of the button's ID.
const triangleBtn = document.getElementById('triangle-btn');
const rectangleBtn = document.getElementById('rectangle-btn');
const parrallelogramBtn = document.getElementById('parallelogram-btn');
const rhombusBtn = document.getElementById('rhombus-btn');
const pentagonleBtn = document.getElementById('pentagon-btn');
const ellipseBtn = document.getElementById('ellipse-btn');

// Get all display outputs ids
const displayTriangleOutput = document.getElementById("triangleResult");
const displayRectangleOutput = document.getElementById("rectangleResult");
const displayParallelogramOutput = document.getElementById("parallelogramResult");
const displayRhombusOutput = document.getElementById("rhombusResult");
const displayPentagonOutput = document.getElementById("pentagonResult");
const displayEllipseOutput = document.getElementById("ellipseResult");


// For Triangle Calculation
triangleBtn.addEventListener('click', function () {

    // input for b feild
    const getInput1 = document.getElementById("triangle-b");
    const input1 = getInput1.value;
    const input1Value = parseFloat(input1);

    // input for h feild
    const getInput2 = document.getElementById("triangle-h");
    const input2 = getInput2.value;
    const input2Value = parseFloat(input2);

    // clean the input field
    getInput1.value = "";
    getInput2.value = "";

    // validation checker
    if (isNaN(input1) || isNaN(input2)) {
        alert("Input should be a number");
        return;
    }

    else if (input1 == "" && input2 == "") {
        alert("Input field empty!");
        return;
    }

    else if (input1 <= -1 || input2 <= -1) {
        alert("Input should not be a negative number");
        return;
    }

    else {
        const inputResult = (0.5 * input1Value * input2Value).toFixed(2);
        displayTriangleOutput.innerHTML = `
        <li class="my-1 py-1">
            <div class="d-flex justify-content-between align-items-center row">
                <div class="col-lg-4"> Triangle </div>
                <div class="col-lg-4"> ${inputResult} cm<sup>2</sup> </div>
                <button class="btn btn-primary px-4 col-lg-4">Convert m<sup>2</sup></button>
            </div>

        </li>
        `;
    }
})


// For Rectangle Calculation
rectangleBtn.addEventListener('click', function () {

    // input for w feild
    const getInput1 = document.getElementById("rectangle-w");
    const input1 = getInput1.value;
    const input1Value = parseFloat(input1);

    // input for l feild
    const getInput2 = document.getElementById("rectangle-l");
    const input2 = getInput2.value;
    const input2Value = parseFloat(input2);

    // clean the input field
    getInput1.value = "";
    getInput2.value = "";

    // validation checker
    if (isNaN(input1) || isNaN(input2)) {
        alert("Input should be a number");
        return;
    }

    else if (input1 == "" && input2 == "") {
        alert("Input field empty!");
        return;
    }

    else if (input1 <= -1 || input2 <= -1) {
        alert("Input should not be a negative number");
        return;
    }

    else {
        const inputResult = (input1Value * input2Value).toFixed(2);
        displayRectangleOutput.innerHTML = `
        <li class="my-1 py-1">
            <div class="d-flex justify-content-between align-items-center row">
                <div class="col-lg-4"> Rectangle </div>
                <div class="col-lg-4"> ${inputResult} cm<sup>2</sup> </div>
                <button class="btn btn-primary px-4 col-lg-4">Convert m<sup>2</sup></button>
            </div>
            
        </li>
        `;
    }
})


// For Parallelogram Calculation
parrallelogramBtn.addEventListener('click', function () {

    // input for b feild
    const getInput1 = document.getElementById("parallelogram-b");
    const input1 = getInput1.value;
    const input1Value = parseFloat(input1);

    // input for h feild
    const getInput2 = document.getElementById("parallelogram-h");
    const input2 = getInput2.value;
    const input2Value = parseFloat(input2);

    // clean the input field
    getInput1.value = "";
    getInput2.value = "";

    // validation checker
    if (isNaN(input1) || isNaN(input2)) {
        alert("Input should be a number");
        return;
    }

    else if (input1 == "" && input2 == "") {
        alert("Input field empty!");
        return;
    }

    else if (input1 <= -1 || input2 <= -1) {
        alert("Input should not be a negative number");
        return;
    }

    else {
        const inputResult = (input1Value * input2Value).toFixed(2);
        displayParallelogramOutput.innerHTML = `
        <li class="my-1 py-1">
            <div class="d-flex justify-content-between align-items-center row">
                <div class="col-lg-4"> Parallelogram </div>
                <div class="col-lg-4"> ${inputResult} cm<sup>2</sup> </div>
                <button class="btn btn-primary px-4 col-lg-4">Convert m<sup>2</sup></button>
            </div>
            
        </li>
        `;
    }
})


// ===============================> Row - 2 <================================== //

// For Rhombus Calculation
rhombusBtn.addEventListener('click', function () {

    // input for d1 feild
    const getInput1 = document.getElementById("rhombus-d1");
    const input1 = getInput1.value;
    const input1Value = parseFloat(input1);

    // input for d2 feild
    const getInput2 = document.getElementById("rhombus-d2");
    const input2 = getInput2.value;
    const input2Value = parseFloat(input2);

    // clean the input field
    getInput1.value = "";
    getInput2.value = "";

    // validation checker
    if (isNaN(input1) || isNaN(input2)) {
        alert("Input should be a number");
        return;
    }

    else if (input1 == "" && input2 == "") {
        alert("Input field empty!");
        return;
    }

    else if (input1 <= -1 || input2 <= -1) {
        alert("Input should not be a negative number");
        return;
    }

    else {
        const inputResult = (0.5 * input1Value * input2Value).toFixed(2);
        displayRhombusOutput.innerHTML = `
        <li class="my-1 py-1">
            <div class="d-flex justify-content-between align-items-center row">
                <div class="col-lg-4"> Rhombus </div>
                <div class="col-lg-4"> ${inputResult} cm<sup>2</sup> </div>
                <button class="btn btn-primary px-4 col-lg-4">Convert m<sup>2</sup></button>
            </div>

        </li>
        `;
    }
})


// For Pentagon Calculation
pentagonleBtn.addEventListener('click', function () {

    // input for p feild
    const getInput1 = document.getElementById("pentagon-p");
    const input1 = getInput1.value;
    const input1Value = parseFloat(input1);

    // input for b feild
    const getInput2 = document.getElementById("pentagon-b");
    const input2 = getInput2.value;
    const input2Value = parseFloat(input2);

    // clean the input field
    getInput1.value = "";
    getInput2.value = "";

    // validation checker
    if (isNaN(input1) || isNaN(input2)) {
        alert("Input should be a number");
        return;
    }

    else if (input1 == "" && input2 == "") {
        alert("Input field empty!");
        return;
    }

    else if (input1 <= -1 || input2 <= -1) {
        alert("Input should not be a negative number");
        return;
    }

    else {
        const inputResult = (0.5 * input1Value * input2Value).toFixed(2);
        displayPentagonOutput.innerHTML = `
        <li class="my-1 py-1">
            <div class="d-flex justify-content-between align-items-center row">
                <div class="col-lg-4"> Pentagon </div>
                <div class="col-lg-4"> ${inputResult} cm<sup>2</sup> </div>
                <button class="btn btn-primary px-4 col-lg-4">Convert m<sup>2</sup></button>
            </div>
            
        </li>
        `;
    }
})


// For Ellipse Calculation
ellipseBtn.addEventListener('click', function () {

    // input for p feild
    const getInput1 = document.getElementById("ellipse-a");
    const input1 = getInput1.value;
    const input1Value = parseFloat(input1);

    // input for b feild
    const getInput2 = document.getElementById("ellipse-b");
    const input2 = getInput2.value;
    const input2Value = parseFloat(input2);

    // clean the input field
    getInput1.value = "";
    getInput2.value = "";

    // validation checker
    if (isNaN(input1) || isNaN(input2)) {
        alert("Input should be a number");
        return;
    }

    else if (input1 == "" && input2 == "") {
        alert("Input field empty!");
        return;
    }

    else if (input1 <= -1 || input2 <= -1) {
        alert("Input should not be a negative number");
        return;
    }

    else {
        const inputResult = (3.1416 * input1Value * input2Value).toFixed(2);
        displayEllipseOutput.innerHTML = `
        <li class="my-1 py-1">
            <div class="d-flex justify-content-between align-items-center row">
                <div class="col-lg-4"> Ellipse </div>
                <div class="col-lg-4"> ${inputResult} cm<sup>2</sup> </div>
                <button class="btn btn-primary px-4 col-lg-4">Convert m<sup>2</sup></button>
            </div>
            
        </li>
        `;
    }
})



// ================= Random Color generator function =================== //
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}


// Triangle Card Color
document.getElementById("triangle-card").addEventListener("mouseover", function () {
    document.getElementById("triangle-card").style.backgroundColor = randomColor();
});


// Rectangle Card Color
document.getElementById("rectangle-card").addEventListener("mouseover", function () {
    document.getElementById("rectangle-card").style.backgroundColor = randomColor();
});


// Parallelogram Card Color
document.getElementById("paralleogram-card").addEventListener("mouseover", function () {
    document.getElementById("paralleogram-card").style.backgroundColor = randomColor();
});


// Rhombus Card Color
document.getElementById("rhombus-card").addEventListener("mouseover", function () {
    document.getElementById("rhombus-card").style.backgroundColor = randomColor();
});


// Pentagon Card Color
document.getElementById("pentagon-card").addEventListener("mouseover", function () {
    document.getElementById("pentagon-card").style.backgroundColor = randomColor();
});


// Ellipse Card Color
document.getElementById("ellipse-card").addEventListener("mouseover", function () {
    document.getElementById("ellipse-card").style.backgroundColor = randomColor();
});


// ---------------------------------> JS Ended<------------------------------------//





