import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Category from "../model/Category";

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        dense: {
            marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
    }),
);

interface State {
    name: string;
}
function createCategory(name:string){
    debugger
    let new_category = new Category()
    new_category.name = name
    new_category.insert().then((data)=>{

    })
}
export default function QuestionnairePage()  {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        name: 'Cat in the Hat'
    });

    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-full-width"
                label="Name Questionnaire"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="outlined-full-width"
                label="Name Questionnaire"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained" onClick={()=>createCategory(values.name)} color="primary" className={classes.button}>
                Add category
            </Button>
        </form>
    )
}
