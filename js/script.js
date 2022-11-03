const eleGrid = document.querySelector('.grid')
const eleBtn = document.querySelector('.btn')

eleBtn.addEventListener('click', function() {
    let eleSelect = document.getElementById('select').value
    eleGrid.innerHTML = '';

    if (document.getElementById('select').value == 'Easy') {
        for (let i = 1; i <= 100; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleGrid.append(eleCell);

            eleCell.innerHTML += `<div">${i}</div>`;
            
            eleCell.addEventListener('click', function(){
                this.classList.toggle('active')
                
            })
        }
    } else if (document.getElementById('select').value == 'Hard') {
        for (let i = 1; i <= 81; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cellhard');
            eleGrid.append(eleCell);

            eleCell.innerHTML += `<div">${i}</div>`;
            
            eleCell.addEventListener('click', function(){
                this.classList.toggle('active')
               
            })
        }        
    } else {
        for (let i = 1; i <= 49; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cellcrazy');
            eleGrid.append(eleCell);

            eleCell.innerHTML += `<div">${i}</div>`;
            
            eleCell.addEventListener('click', function(){
                this.classList.toggle('active')
               
            })
        }
    }

    
});
