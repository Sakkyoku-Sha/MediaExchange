import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles'
import {Button} from "@material-ui/core";

const headerTheme = makeStyles({
    header : {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '10px'
    },

    appBarDiv: {
        position: 'relative',  
    },
    userInfo : {
        position: 'relative',
        width: '200px',
        fontWeight : 'bold'
    },
    exchange : {
        position: 'relative',
        width: '200px',
        row: 2,
        fontWeight : 'bold',
        overflow: 'auto',
    }
});

interface headerProps {
    userName : string
}

const AppHeader = (props : headerProps)  => {
    
    const styles = headerTheme();
    
    return <AppBar className={styles.header} position={"static"} color={"inherit"} variant={"elevation"}>
            <div className={styles.appBarDiv}>
                <Button className={styles.exchange}>Exchange</Button>
                <Button className={styles.userInfo}>User Info</Button>
            </div>
        </AppBar>
};


export default AppHeader