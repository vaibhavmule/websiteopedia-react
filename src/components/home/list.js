import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props)
{
    return <ListItem button component="a" {...props} />;
}

function MyList(props)
{
    const classes = useStyles();
    return (
        <div>
            <h2>
                {props.title}
            </h2>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                {props.topweb.map(web =>
                    <ListItemLink href={web}>
                        <ListItemText primary={web} />
                    </ListItemLink>
                )}
            </List>
        </div>
    )
}

export default MyList;
