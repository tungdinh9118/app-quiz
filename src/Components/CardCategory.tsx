import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Category from "../model/Category";

const useStyles = makeStyles({
    card: {
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

export default function SimpleCard(props:any) {
    const classes = useStyles();
    const { categorys } = props;
    const bull = <span className={classes.bullet}>•</span>;
    const CardItem = categorys.map((category:Category,idx:number)=>{
        console.log('index',idx)
        console.log('category',category)
        return (
            <Card key={idx} className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {category.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">bộ câu hỏi</Button>
                </CardActions>
            </Card>

        );
    })
    return (<div>{CardItem}</div>)

}
