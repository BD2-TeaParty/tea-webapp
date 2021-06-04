import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, Button, 
        CircularProgress, TextField, Typography, withStyles }
from '@material-ui/core';

import { signIn } from '../../redux/actions/userActions';

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


const LoginPanel = props => {

    const notLoggedIn = 'Nie jesteś zalogowany!'

    const [loginExpanded, setLoginExpanded] = useState(false);
    const [registerExpanded, setRegisterExpanded] = useState(false);

    const [loginSubmitClicked, setLoginSubmitClicked] = useState(true);
    const [registerPasswordError, setRegisterPasswordError] = useState(false);
    const [registerHelperText, setRegisterHelperText] = useState('');

    const loginRef = useRef();
    const passwordRef = useRef();

    const registerNick = useRef();
    const registerMail = useRef();
    const registerPassword = useRef();
    const registerRepeatPassword = useRef();


    const submitLogin = () => {
        const loginJson = {}

        loginJson.user = loginRef.current.value;
        loginJson.password = passwordRef.current.value;
        
        setLoginSubmitClicked(true);
        console.log(loginSubmitClicked, props.userLoading, props.userError);

        console.log(loginJson);
        props.signIn(loginJson);
    }

    const submitRegister = () => {
        setLoginSubmitClicked(false);        

        const registerJson = {}

        registerJson.nick = registerNick.current.value;
        registerJson.mail = registerMail.current.value;
        
        if (registerPassword.current.value === registerRepeatPassword.current.value) {
            registerJson.password = registerPassword.current.value;
            // props.tryRegistering(registerJson);
        } else {

            setRegisterPasswordError(true);
            setRegisterHelperText('Hasła nie są takie same');
        }

        console.log(registerJson);

    }
    const resetError = () => {
        setRegisterPasswordError(false);
        setRegisterHelperText('');
    }
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

                    {props.userLoading ? <CircularProgress /> : null}

                     <CustomAccordion variant='outlined' expanded={loginExpanded} >

                        <AccordionSummary onClick={ () => toggleLogin()}>
                            <Typography style={{textAlign: 'center', flex: 1, fontWeight: 600}}>ZALOGUJ SIĘ</Typography>
                        </AccordionSummary>

                        <AccordionDetails style={{flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center'}}>
                            <TextField fullWidth label='Pseudonim / e-mail' inputRef={loginRef}/>
                            <TextField fullWidth label='Hasło' inputRef={passwordRef}/>
                            <Button variant='outlined' color='secondary' onClick={() => submitLogin()}>Potwierdź</Button>

                            {loginSubmitClicked && props.userError 
                                ? <Typography style={{color: 'red', fontSize: '0.75rem'}}>{props.errorMessage}</Typography>
                                : null 
                            }

                        </AccordionDetails>
                    </CustomAccordion>


                    <CustomAccordion variant='outlined' expanded={registerExpanded} >

                        <AccordionSummary onClick={ () => toggleRegister()} >
                            <Typography style={{textAlign: 'center', flex: 1, fontWeight: 600}}>ZAREJESTRUJ SIĘ</Typography>
                        </AccordionSummary>

                        <AccordionDetails style={{flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center'}}>
                            <TextField fullWidth label='Pseudonim' inputRef={registerNick}/>
                            <TextField fullWidth label='e-mail' inputRef={registerMail}/>
                            <TextField fullWidth label='Hasło' inputRef={registerPassword}/>
                            <TextField fullWidth label='Powtórz hasło' inputRef={registerRepeatPassword} 
                                error={registerPasswordError} 
                                helperText={registerHelperText}
                                onClick={() => resetError()}
                            />
                            <Button variant='outlined' color='secondary' onClick={ () => submitRegister()}>Potwierdź</Button>

                            { !loginSubmitClicked && props.userError 
                                ? <Typography style={{color: 'red', fontSize: '0.75rem'}}>{props.errorMessage}</Typography>
                                : null 
                            }
                            
                        </AccordionDetails>
                    </CustomAccordion>

                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        userLoading: state.userReducer.userLoading,
        userError: state.userReducer.userError,
        errorMessage: state.userReducer.errorMessage,
    }
}


export default connect(mapStateToProps, {signIn})(LoginPanel);