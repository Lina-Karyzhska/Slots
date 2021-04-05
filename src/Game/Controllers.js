import React from 'react';
import Button from '@material-ui/core/Button';

const Controllers = ({handleSpin, makeFakeSpin, handleClose}) => {  
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleSpin} style={{width: '150px', margin: '0 10px'}}>Spin</Button>
            <Button variant="contained" color="primary" onClick={makeFakeSpin} style={{width: '150px', margin: '0 10px'}}>Fake spin</Button>
            <Button variant="contained" color="primary" onClick={handleClose} style={{width: '150px', margin: '0 10px'}}>Close Game</Button>
        </div>
    )
}

export default Controllers;
