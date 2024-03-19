let isMouseDown = false;
let colorPicker = document.getElementById(`colorPicker`);
let currentColor = String(colorPicker.value);
let eraser = document.getElementById(`eraser`);
let eraserCursor = 'url(images/ecursor.png), auto';
let eraserSelected = false;
let brush = document.getElementById(`brush`);
let brushCursor = 'url(images/bcursor.png), auto';
let brushSelected = false;
function hoverColorChanger(){
    let root = document.documentElement;
    root.style.setProperty(`--hoverColor`, `${currentColor}`);
}
colorPicker.addEventListener('input', function() {
    currentColor = colorPicker.value;
    hoverColorChanger();
});
function selectEraser() {
    eraserSelected = true;
    currentColor = `white`;
    hoverColorChanger();
    colorPicker.disabled = true;
}
function deselectEraser(){
    currentColor = `black`;
    eraserSelected = false;
}
function selectBrush(){
    deselectEraser();
    brushSelected = true;
    currentColor = `black`;
    hoverColorChanger();
    colorPicker.value = `#000000`;
    colorPicker.disabled = false;
}
eraser.addEventListener('click', selectEraser);
brush.addEventListener(`click`, selectBrush);
function createGridSquare(rows, columns){
    const container = document.getElementById(`grid-container`);
    container.addEventListener('mouseover', function() {
        if (eraserSelected){
            container.style.cursor = eraserCursor;
        }
        else if(brushSelected){
            container.style.cursor = brushCursor;
        }
    });
    for(let i = 1; i <= rows*columns; i++ ){
        const square = document.createElement(`div`);
        square.classList.add(`square`);
        square.addEventListener('mouseover', function () {
            if (isMouseDown) {
                square.style.backgroundColor = currentColor;
            }
        });
        square.addEventListener('mousedown', function (event) {
            event.preventDefault();
            isMouseDown = true;
            square.style.backgroundColor = currentColor;
        });
        square.addEventListener('mouseup', function () {
            isMouseDown = false;
        });
        container.appendChild(square);
    }
}
createGridSquare(16, 16);