function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

function calculateRectangleArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // calculate the area 
    const area = width * length;
    console.log(area);

    // show rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}


// reuseable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // calculate the area 
    const area = base * height;
    // show area
    setElementInnerText('parallelogram-area',area);
}

// for ellipse card
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    const area = 3.1416 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area',area);


}

// ****************************************
// reusable get input value field in number
function getInputValue(filedId){
    const inputField = document.getElementById(filedId);
    const inputValueText = inputField.value;//always mone rakhbi input field er jonno value
    const value =parseFloat(inputValueText);
    return value;
}

// *****************************************
// reusable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
