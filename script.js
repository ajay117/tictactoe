    let isGameOver = false;    
    let containerChildDiv = document.querySelectorAll('.game-container div');
    let [one,two,three,four,five,six,seven,eight,nine] = containerChildDiv;
    let playerTurn = 1;

    containerChildDiv.forEach(item => {
        item.addEventListener('click', () => {
            if(isGameOver === true) {
                console.log('Please restart the game.');
                return;
            }
            if(playerTurn === 1) {               
                item.textContent = 'X';
                item.classList.add('text');                
                playerTurn += 1;
                containerChildDiv = document.querySelectorAll('.game-container div');
                [one,two,three,four,five,six,seven,eight,nine] = containerChildDiv;
                play();
            } else {
                item.textContent = 'O';
                item.classList.add('text');
                playerTurn -= 1;
                containerChildDiv = document.querySelectorAll('.game-container div');
                [one,two,three,four,five,six,seven,eight,nine] = containerChildDiv; 
                play();
            }
        });
    });

    //Check if the game is finished  
    //Console.log who wins
    function play() {
        if(!isGameOver) {
            if((one.textContent === 'X' && two.textContent === 'X' && three.textContent === 'X') || 
            (one.textContent === 'X' && four.textContent === 'X' && seven.textContent === 'X') ||
            (one.textContent === 'X' && five.textContent === 'X' && nine.textContent === 'X') ||
            (three.textContent === 'X'&& six.textContent === 'X' && nine.textContent === 'X') ||
            (three.textContent === 'X'&& five.textContent === 'X'&& seven.textContent === 'X') ||
            (seven.textContent === 'X'&& eight.textContent === 'X'&& nine.textContent === 'X') ||
            (two.textContent === 'X' && five.textContent === 'X'&& eight.textContent === 'X') ||
            (four.textContent === 'X' && five.textContent === 'X'&& six.textContent === 'X')) {
                isGameOver = true;
                console.log('Player 1 Wins.');
            } else if((one.textContent === 'O' && two.textContent === 'O' && three.textContent === 'O') || 
            (one.textContent === 'O' && four.textContent === 'O' && seven.textContent === 'O') ||
            (one.textContent === 'O' && five.textContent === 'O' && nine.textContent === 'O') ||
            (three.textContent === 'O'&& six.textContent === 'O' && nine.textContent === 'O') ||
            (three.textContent === 'O'&& five.textContent === 'O'&& seven.textContent === 'O') ||
            (seven.textContent === 'O'&& eight.textContent === 'O'&& nine.textContent === 'O') ||
            (two.textContent === 'O' && five.textContent === 'O' && eight.textContent === 'O') ||
            (four.textContent === 'O' && five.textContent === 'O'&& six.textContent === 'O')) {
                isGameOver = true;
                console.log('Player 2 Wins.');
            } else if(one.textContent && two.textContent && three.textContent &&
                four.textContent && five.textContent && six.textContent &&
                seven.textContent && eight.textContent && nine.textContent) {
                    console.log('Draw');
                }
        }
    }
    