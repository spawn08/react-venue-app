import React from 'react';
import Button from '@material-ui/core/Button';
import ticket from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
    return (

        <Button
            href= {props.link}
            target='_blank'
            variant="contained"
            size="small"
            style={{ background: props.bck, color: props.color }}
        >
            <img src={ticket} className="iconImage" alt="ticker" />
            {props.text}
        </Button>

    );
};

export default MyButton;