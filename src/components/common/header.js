import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, TextField, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    logo: {
        display: 'flex',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        margin: '4% auto',
    },
    margin: {
        margin: theme.spacing(1),
    }

}));

function Header(props)
{
    const classes = useStyles();
    const [name, setName] = useState("");
    const handleChange = (event) =>
    {
        setName(event.target.value);
    };
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        props.history.push(`/${name}`)
    };

    return (
        <Box m={1}>
            <Box>
                <Link to="/">
                    <div className={classes.logo}>
                        <img src="https://websiteopedia.com/websiteopedia-logo.png" alt='websiteopedia' />
                    </div>
                </Link>
            </Box>
            <form className={classes.form} onSubmit={handleSubmit}>
                <FormControl fullWidth variant="filled" className={classes.margin}>
                    <TextField id="outlined-basic" label="Enter website URL" variant="outlined" value={name} onChange={handleChange} />
                </FormControl>
                <Button variant="contained" className={classes.margin} type="submit">Submit</Button>
            </form>
        </Box>
    )
}

export default withRouter(Header);
