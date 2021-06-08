    let isGameOver = false;    
    let containerChildDiv = document.querySelectorAll('.game-container div');
    let [one,two,three,four,five,six,seven,eight,nine] = containerChildDiv;
    let playerTurn = 1;
    let resetButton = document.querySelector('.reset-button');
    let alertPlayer = document.querySelector('.alert');
    let playWithComputer = document.querySelector('.with-computer');
    let playWithHuman = document.querySelector('.with-human');
    let computerPlay = false;
    let computerOn;
    let humanOn = false;
    
    // playWithComputer.addEventListener('click', () => {
    //     computerOn = true;
    // });

    playWithHuman.addEventListener('click', () => {
        playerTurn = 1;
        containerChildDiv.forEach(item => item.textContent = '');
        humanOn = true;
        playWithComputer.classList.remove('hide');
        playWithHuman.classList.add('hide');
    });

    playWithComputer.addEventListener('click', () => {
        playerTurn = 1;
        containerChildDiv.forEach(item => item.textContent = '');
        humanOn = false;
        playWithComputer.classList.add('hide');
        playWithHuman.classList.remove('hide');
    });

    function computerTurn() {
        let indexArray = [];
        let containerChildDiv = document.querySelectorAll('.game-container div');
        updateIndexArray();
        
        let randomNum = Math.floor(Math.random() * indexArray.length);
        let randomBox = indexArray[randomNum];
        
            if(computerPlay && indexArray.length >= 2) {
                containerChildDiv[randomBox].textContent = 'O';
                containerChildDiv[randomBox].classList.add('text');
                playerTurn -= 1;
                computerPlay = false;
            }

        function updateIndexArray() {
            for(let i = 0; i < containerChildDiv.length; i++) {
                if(containerChildDiv[i].textContent !== 'X' &&
                 containerChildDiv[i].textContent !== 'O') {
                    indexArray.push(i);
                }
            }
        }
    }

    resetButton.addEventListener('click', reset);

    containerChildDiv.forEach(item => {
        item.addEventListener('click', () => {
            if(isGameOver === true) {
                return;
            }
            if(!item.textContent) {
                if(playerTurn === 1) {               
                    item.textContent = 'X';
                    item.classList.add('text');
                    playerTurn += 1;
                    computerPlay = true;
                    if(computerPlay && !humanOn) {
                        computerTurn();
                    }
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
            }
        });
    });

    //Functions...
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
                alertPlayer.textContent = 'Player 1 wins the game.';
                alertPlayer.classList.add('alert-player');                
            } else if((one.textContent === 'O' && two.textContent === 'O' && three.textContent === 'O') || 
            (one.textContent === 'O' && four.textContent === 'O' && seven.textContent === 'O') ||
            (one.textContent === 'O' && five.textContent === 'O' && nine.textContent === 'O') ||
            (three.textContent === 'O'&& six.textContent === 'O' && nine.textContent === 'O') ||
            (three.textContent === 'O'&& five.textContent === 'O'&& seven.textContent === 'O') ||
            (seven.textContent === 'O'&& eight.textContent === 'O'&& nine.textContent === 'O') ||
            (two.textContent === 'O' && five.textContent === 'O' && eight.textContent === 'O') ||
            (four.textContent === 'O' && five.textContent === 'O'&& six.textContent === 'O')) {
                isGameOver = true;
                alertPlayer.textContent = 'Player 2 wins the game.';
                alertPlayer.classList.add('alert-player');
            } else if(one.textContent && two.textContent && three.textContent &&
                four.textContent && five.textContent && six.textContent &&
                seven.textContent && eight.textContent && nine.textContent) {
                    alertPlayer.textContent = 'Draw! Click Reset to play again.';
                    alertPlayer.classList.add('alert-player');
                }
        }
    }

    function reset() {
        containerChildDiv.forEach(item => {
            item.textContent = '';
        });
        alertPlayer.textContent = '';
        alertPlayer.classList.remove('alert-player');
        [one,two,three,four,five,six,seven,eight,nine] = containerChildDiv;
        isGameOver = false;
        playerTurn = 1;
    }
    