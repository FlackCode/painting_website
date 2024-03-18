let isMouseDown = false;
let currentColor = `black`;
function createGridSquare(rows, columns){
    const container = document.getElementById(`grid-container`);

    container.addEventListener('mouseleave', function() {
        isMouseDown = false;
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
        document.getElementById(`red`).addEventListener(`click`, function(){
            currentColor = `red`;
        })
        document.getElementById(`blue`).addEventListener(`click`, function(){
            currentColor = `blue`;
        })
        document.getElementById(`green`).addEventListener(`click`, function(){
            currentColor = `green`;
        })
        document.getElementById(`yellow`).addEventListener(`click`, function(){
            currentColor = `yellow`;
        })

        container.appendChild(square);
    }
}
createGridSquare(16, 16);