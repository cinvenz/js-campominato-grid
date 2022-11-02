const eleGrid = document.querySelector('.grid')
const eleBtn = document.querySelector('.btn')

eleBtn.addEventListener('click', function() {
    for (let i = 1; i <= 100; i++) {
        const eleCell = document.createElement('div');
        eleCell.classList.add('cell');
        eleGrid.append(eleCell);

        eleCell.innerHTML += `<div">${i}</div>`;
        
        eleCell.addEventListener('click', function(){
            this.classList.toggle('active')
            this.style.cursor = "url('cursor url with protocol'), auto";
        })
    }

    
})