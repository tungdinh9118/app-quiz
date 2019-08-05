import React from 'react'
import Import from '../Imports/Import.js'
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
class Dashboard extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Redirect to="/import"></Redirect>
                        </li>
                    </ul>
                    <Route exact path="/import" component={Import}/>
                </div>
            </Router>
            )
        }
    }
export default Dashboard


