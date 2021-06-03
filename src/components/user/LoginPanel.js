import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography, withStyles } from '@material-ui/core';


import './LoginPanel.css';

const CustomAccordion = withStyles( () => ({
    root: {
        width: '80%',
        background: 'rgba(0,0,0,0)',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: '#C51162',
        color: '#C51162',
        borderWidth: 1,
        borderRadius: 5,
        boxShadow: 'box-shadow: 10px 2px 10px 2px rgba(0,0,0,.2);',
        marginTop: '5%',
        
    },
    expanded: {
        background: 'rgba(1,1,1,0.5)',
        color: '#fff',
    }
}))(Accordion);


const LoginPanel = (loginCallback) => {

    const notLoggedIn = 'Nie jesteś zalogowany!'

    const [loginExpanded, setLoginExpanded] = useState(false);
    const [registerExpanded, setRegisterExpanded] = useState(false);

    const toggleLogin = () => {
        if (loginExpanded && !registerExpanded ) {
            setLoginExpanded(false);
        } else if (!loginExpanded && registerExpanded) {
            setRegisterExpanded(false);
            setLoginExpanded(true);
        } else 
            setLoginExpanded(true);
    }

    const toggleRegister = () => {
        if (registerExpanded && !loginExpanded) {
            setRegisterExpanded(false);
        } else if (!registerExpanded && loginExpanded) {
            setLoginExpanded(false);
            setRegisterExpanded(true);
        } else
            setRegisterExpanded(true);
    }



    return (
        <section id='login-panel-papa' className='login-container'>
            <div id='login-panel' className='login-panel'>
                <div className='login-panel-title-view'>
                    <Typography className='login-panel-title'>{notLoggedIn}</Typography>
                </div>
                <div className='login-panel-content' >

                     <CustomAccordion variant='outlined' expanded={loginExpanded} >
                        <AccordionSummary onClick={ () => toggleLogin()}>
                            <Typography style={{textAlign: 'center', flex: 1, fontWeight: 600}}>ZALOGUJ SIĘ</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center'}}>
                            <TextField fullWidth label='Pseudonim / e-mail'/>
                            <TextField fullWidth label='Hasło'/>
                            <Button variant='outlined' color='secondary'>Potwierdź</Button>
                        </AccordionDetails>
                        
                    </CustomAccordion>


                    <CustomAccordion variant='outlined' expanded={registerExpanded} >
                        <AccordionSummary onClick={ () => toggleRegister()} >
                            <Typography style={{textAlign: 'center', flex: 1, fontWeight: 600}}>ZAREJESTRUJ SIĘ</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center'}}>
                            <TextField fullWidth label='Pseudonim'/>
                            <TextField fullWidth label='e-mail'/>
                            <TextField fullWidth label='Hasło'/>
                            <TextField fullWidth label='Powtórz hasło'/>
                            <Button variant='outlined' color='secondary'>Potwierdź</Button>
                        </AccordionDetails>
                        
                    </CustomAccordion>

                </div>
            </div>
        </section>
    )
}


export default LoginPanel;