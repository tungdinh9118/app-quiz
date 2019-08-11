import React,{Component} from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Category from "../model/Category";
import SimpleCard from '../Components/CardCategory';
import {object} from "prop-types";
import firebase from 'firebase/app';
// import Query = firebase.firestore.Query;
let Query = require('firebase/firestore');

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

interface IState {
    name: string;
    categorys: Category[];
    flag_add: boolean
}
export default class  CategoryView extends Component <{},IState> {
    constructor(props:any) {
        super(props);
        const initialState: IState ={
            name: "",
            categorys: [],
            flag_add:false
        }

        this.state = initialState
        this.getAllCategory = this.getAllCategory.bind(this)
    }
    handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({name: event.target.value });
        console.log("name category",this.state.name)
    };
    createCategory(){
        debugger
        let new_category = new Category()
        new_category.name = this.state.name
        new_category.insert().then((data)=>{
            this.setState({flag_add:false})
        })
    }
    handleAddCategory(){
        this.setState({flag_add:true})
    }
    getAllCategory(){
        // @ts-ignore
        let query:Query = new Category().getAllCategorys()
        query.onSnapshot((querySnapshot:any)=>{
            let list_category: Category[]=[]
            querySnapshot.forEach((doc:any)=>{
                let record = new Category()
                Object.assign(record,doc.data())
                record.id = doc.id
                list_category.push(record)
            })
            console.log(list_category)
            this.setState({categorys: list_category})
            console.log("categorys",this.state.categorys)
        })
        // return new Promise((resolve, reject) => {
        //     // @ts-ignore
        //     query.get().then(()=>{
        //          resolve()
        //     })
        // })
    }
    componentWillMount(){
        this.getAllCategory()

    }
    const [classes] = useStyles();
    render() {

        return (
            <div>
                <Button  variant="contained" onClick={()=>this.handleAddCategory()} color="primary" className={classes.button}>
                    Add category
                </Button>
                {
                    this.state.categorys.length >0 ?
                        <SimpleCard categorys={this.state.categorys}/>
                        :<div></div>}{

                    // this.state.flag_add ?
                    // <form className={classes.container} noValidate autoComplete="off">
                    //  <TextField
                    //      id="outlined-full-width"
                    //      label="Name category"
                    //      style={{ margin: 8 }}
                    //      placeholder="Placeholder"
                    //      helperText="Full width!"
                    //      name={'name'}
                    //      value={this.state.name}
                    //      fullWidth
                    //      onChange={this.handleChange()}
                    //      margin="normal"
                    //      variant="outlined"
                    //      InputLabelProps={{
                    //          shrink: true,
                    //      }}
                    //  />
                    // <Button  variant="contained" onClick={()=>this.createCategory()} color="primary" className={classes.button}>
                    //  Create
                    // </Button>
                    // </form>:<div></div>
                }
            </div>
        );
    }


// } function CategoryView()  {
//     const classes = useStyles();
//     const [values, setValues] = React.useState<State>({
//         name: 'Cat in the Hat',
//         category:  Category,
//     });
//
//     const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({ ...values, [name]: event.target.value });
//     };
//         return (
//
//         )
}
