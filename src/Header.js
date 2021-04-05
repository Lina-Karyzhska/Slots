import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import LogIn from './LogIn';

const useStyles = makeStyles((theme) => ({
        orange: {
          color: theme.palette.getContrastText(deepOrange[500]),
          backgroundColor: deepOrange[500],
          cursor: 'pointer'
        }
    }));

const Header = (props) => {
    const [isLogin, setLogin] = useState(false);
    const [isPopupShown, togglePopup] = useState(false);
    const [name, setName] = useState("");

    const exit = () => {
        setLogin(false);
        localStorage.removeItem("name")
    }

    useEffect(() => {
        if (localStorage.name) {
            setName(localStorage.name);
            setLogin(true)
        }
    }, [])

    const classes = useStyles();

    const logIn = () => {
        togglePopup(true);
    }

    const closePopup = (e, name) => {
        e.preventDefault();
        togglePopup(false);
        
        if (name) {
            setName(name);
            setLogin(true)
            localStorage.name = name
        }
    }

    return (
        <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', height: '10%'}}>
            <div>
                <span>logo</span>
            </div>

            <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', width: '15%'}}>
                <p>{props.dollars}$</p>
                {isLogin ? <Avatar className={classes.orange} onClick={exit}>{`${name[0]}${name[1]}`.toUpperCase()}</Avatar> 
                : <Button variant="contained" onClick={logIn}>Log in</Button>}
            </div>

            {isPopupShown ? <LogIn close={closePopup} open={isPopupShown}/> : null}
        </header>
    )
}

export default Header;