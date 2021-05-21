import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function HomeButton() {
    let { history } = useHistory();

    function goHome() {
        history.push("/");
    }

    return (
        <div>
            <Button id="home-button" type="primary" onClick={goHome}>Home</Button>
        </div>
    )
}

export {
    HomeButton
}
