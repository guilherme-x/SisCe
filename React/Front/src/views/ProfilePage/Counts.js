import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div style={{ display: "flex", marginBottom:"2em" }}>

            <Card style={{ width: "35%", marginRight: "1.2em" }} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography style={{ fontSize: "1.5em" }} className={classes.title} color="textSecondary" gutterBottom>
                        Aparelhos cadastrados
        </Typography>
                    <Typography style={{ color: "#0b102d" }} variant="h2" component="h2">
                        19
        </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">VER TODOS</Button>
                </CardActions>
            </Card>
            <Card style={{ width: "35%", marginRight: "1.2em" }} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography style={{ fontSize: "1.5em" }} className={classes.title} color="textSecondary" gutterBottom>
                        Usuários cadastrados        </Typography>
                    <Typography style={{ color: "#0b102d" }} variant="h2" component="h2">
                        13
        </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">VER TODOS</Button>
                </CardActions>
            </Card>
            <Card style={{ width: "35%", marginRight: "1.2em" }} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography style={{ fontSize: "1.5em" }} className={classes.title} color="textSecondary" gutterBottom>
                        Locações registradas        </Typography>
                    <Typography style={{ color: "#0b102d" }} variant="h2" component="h2">
                        26
        </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">VER TODAS</Button>
                </CardActions>
            </Card>
        </div>

    );
}
