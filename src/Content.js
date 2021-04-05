import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import HistoryTable from './HistoryTable/HistoryTable';
import Game from './Game/Game';

const Content = ({ changeDollars }) => {
    const [gameHistory, addGameToHistory] = useState([]);
    const [isGameOpen, toggleGame] = useState(false);

    useEffect(() => {
        if (localStorage.history) addGameToHistory([...JSON.parse(localStorage.history)])
    }, [isGameOpen])

    const openGame = () => {
        toggleGame(true);
    }

    const closeGame = () => {
        toggleGame(false);
        changeDollars();
    }

    const addGame = (slots, date) => {
        let newHistory = [...gameHistory];
        newHistory.push({id: gameHistory.length, slots, date})

        localStorage.history = JSON.stringify(newHistory)

        addGameToHistory(newHistory)
    }

    return (
        <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: '80%', padding: '10px'}}>
            <HistoryTable history={gameHistory}/>

            <Button variant="contained" color="primary" onClick={openGame}>Start Game</Button>

            <Game isOpen={isGameOpen} handleClose={closeGame} addGame={addGame}/>
        </main>
    )
}

export default Content;
