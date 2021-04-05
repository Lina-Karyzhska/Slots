import React, { forwardRef, useState } from 'react';
import Display from './Display';
import Controllers from './Controllers'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Game = ({ isOpen, handleClose, addGame }) => {
    let numbersAmount = [0];
    const [numbers, setNumbers] = useState([7, 7, 7]);

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max + 1);
    }

    const makeSpin = (e, arr) => {
        if (localStorage.dollars < 1) {
            alert("U don`t have enough money");
            return;
        }
        let newNumbers = arr || [];
        if (!arr) {
            for (let i = 0; i < 3; ++i) {
                newNumbers.push(getRandomInt(7))
            }
        }

        setNumbers([...newNumbers]);
        analyzeNumbers(newNumbers)
        let date = new Date().toString().split(" ");
        date.splice(date.length - 5, 5);
        addGame(newNumbers.join(" "), date.join(" "));
    }

    const countNumbers = (numbers) => {
        for(let i = 0 ; i < 3; ++i){
            for(let j = i + 1; j < 3; ++j){
                if(numbers[i] === numbers[j]) {
                    numbersAmount[0]++; 
                    numbersAmount[1] = numbers[i];
                }
            }
        }
    }

    const analyzeNumbers = (numbers) => {
        countNumbers(numbers);

        if (numbersAmount[0] === 3 ) {
            numbersAmount[1] === 7 ? setDollars(10) : setDollars(5);
        } else if (numbersAmount[0] === 2) {
            setDollars(0.5);
        } else {
            setDollars();
        }
    }

    const setDollars = (win = 0) => {
        localStorage.dollars = +localStorage.dollars - 1 + win;
    }

    return (
        <Dialog fullScreen open={isOpen} TransitionComponent={Transition}>
            <Display numbers={numbers}/>

            <Controllers handleSpin={makeSpin} makeFakeSpin={(e) => makeSpin(e, [7, 7, 7])} handleClose={handleClose}/>
        </Dialog>
    )
}

export default Game;
