function createGridSquare(rows, columns){
    const container = document.getElementById(`grid-container`);
    for(let i = 1; i <= rows*columns; i++ ){
        const square = document.createElement(`div`);
        square.classList.add(`square`);
        square.addEventListener('click', function changeSquareColor(){
            square.classList.toggle('clicked');
        });
        container.appendChild(square);
    }
}
createGridSquare(16, 16);