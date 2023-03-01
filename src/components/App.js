import {useEffect,Fragment} from "react";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import {LoadingBar} from "react-redux-loading-bar";
import {Route,Routes} from "react-router-dom";

const App = (props) => {
    console.log(props)
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    return <div>
        <Fragment>
            <LoadingBar/>
            <div className='container'>
                <Nav/>
                {
                    props.loading === true ? null :<Routes>
                        <Route exact path='/' element={<Dashboard/>}/>
                        <Route path='/tweet/:id' element={<TweetPage/>}/>
                        <Route path='/new' element={<NewTweet/>}/>
                    </Routes>
                }
            </div>
        </Fragment>
    </div>;
};

const mapStateToProps = ({authUser}) => ({
    loading: authUser == null,
});

export default connect(mapStateToProps)(App);
