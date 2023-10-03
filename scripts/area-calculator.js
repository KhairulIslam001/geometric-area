// triangle
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

    addToCalculationEntry('Triangle', area);
    

}

// Rectangle
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

    // validate input: width and length(format-1)
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return; //process r shamne aghabe na
    }


    // calculate the area 
    const area = width * length;
    console.log(area);

    // show rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

    addToCalculationEntry('Rectangle', area);
}


// reuseable function --> reduce duplicate code
// for Parallelogram
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // validate input: width and length(format-1)
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return; //process r shamne aghabe na
    }
    // calculate the area 
    const area = base * height;
    // show area
    setElementInnerText('parallelogram-area',area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area);
}

// for ellipse card
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    const area = 3.1416 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}

// ****************all functions*************
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

// add to calculation entryc
/* 
1.get the element where you want to add the dynamic HTML
2.create an element you want to add
3.if needed add some class
4.set inner HTML, it could be dynamic template string
5.append the created element as a child of the parent 
*/
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    // count
    const count = calculationEntry.childElementCount;

    // inner html
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <btn btn-sm class="btn btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}






// data validation:
/* 
1.set the proper type of input field(number,date,email)
2.check type using typeof
3.
*/
