import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { resetForm } from '../../actions/FormAction'
import './ResponseBox.scss';

function ResponseBoxButtons(props) {
    const { message } = props;

    return (
        <Box className="buttons-box">
            <Box className="right">
                <Button onClick={() => resetForm()} className="transparent pink">
                    {message ? message : 'Volver a Password Manager'}
                    <i className="arrow right" />
                </Button>
            </Box>
        </Box>
    )
}


export default ResponseBoxButtons