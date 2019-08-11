import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from './View/TabMenu.tsx'

// Import firebase
import * as firebase from 'firebase';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CategoryView from "./View/Category.tsx";
import QuestionnairePage from "./View/QuestionPage.tsx";
import Category from "./model/Category";

const firebaseConfig = {
    apiKey: "AIzaSyBykjMJdKSEx_b55QRd6_36dYfu9XnSiCc",
    authDomain: "quizapp-7ba4c.firebaseapp.com",
    databaseURL: "https://quizapp-7ba4c.firebaseio.com",
    projectId: "quizapp-7ba4c",
    storageBucket: "quizapp-7ba4c.appspot.com",
    messagingSenderId: "857418678843",
    appId: "1:857418678843:web:e24fbc7638decb3d"
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            currentCategory: null
        }
    }

    loginFirebase = () => {
        let that = this;
        if (!firebase.auth().currentUser) {
            firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch(function (error) {
            });
        }
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                that.setState({currentUser: user});
            } else {
                // No user is signed in.
            }
        });
    };
    logoutFirebase = () => {
        let that = this;
        firebase.auth().signOut().then(() => {
            that.setState({currentUser: null});
        });
    };

    componentDidMount() {
        let that = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                that.setState({currentUser: user});
            } else {
                // No user is signed in.
            }
        });
    }



    render() {
        return (
            <Router>
                <div>
                    <h1>Chào Tùng</h1>
                    {
                        !this.state.currentUser ?
                            <button onClick={() => this.loginFirebase()}>Đăng nhập với firebase</button> :
                            <button onClick={() => this.logoutFirebase()}>Đăng xuất với firebase</button>
                    }
                    <h2>Tên đăng nhập: {this.state.currentUser ? this.state.currentUser.displayName : ''}.</h2>
                    {
                        this.state.currentUser ? <TabMenu/> : <div></div>
                    }

                </div>
                <Route exact path="/" component={CategoryView} />
                <Route path="/questionnaire" component={QuestionnairePage}/>
                {/*<Route path="/topics" component={Topics} />*/}
            </Router>
        );
    }
}

export default App;
