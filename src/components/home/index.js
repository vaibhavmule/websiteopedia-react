import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import MyList from './list';
import { topWeb } from './data';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 900,
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    item: {
        margin: '0 auto'
    }
}));

function HomePage()
{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.item} item md={6} sx={12} >
                    <Paper className={classes.paper}><MyList topweb={topWeb} title='Top 20 Website Analyzed on Websiteopedia' /></Paper>
                </Grid>
                <Grid className={classes.item} item md={6} sx={12}>
                    <Paper className={classes.paper}><MyList topweb={topWeb} title='Recently Analyzed Websites on Websiteopedia' /></Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage;
