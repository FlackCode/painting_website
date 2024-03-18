let isMouseDown = false;
function createGridSquare(rows, columns){
    const container = document.getElementById(`grid-container`);
    for(let i = 1; i <= rows*columns; i++ ){
        const square = document.createElement(`div`);
        square.classList.add(`square`);
        square.addEventListener('mouseover', function(){
            if(isMouseDown){
                square.classList.add('clicked');
            }
        });
        square.addEventListener(`mousedown`, function(){
            event.preventDefault();
            isMouseDown = true;
            square.classList.add('clicked');
        });
        square.addEventListener(`mouseup`, function(){
            isMouseDown = false;
        });
        container.appendChild(square);
    }
}
createGridSquare(16, 16);