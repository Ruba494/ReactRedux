import {useEffect} from "react";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import {LoadingBar} from "react-redux-loading-bar";

const App = (props) => {
    console.log(props)
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    return <div>
        <LoadingBar />
        {props.loading===true ?null:<Dashboard/>}
    </div>;
};

const mapStateToProps = ({authUser}) => ({
    loading: authUser == null,
});

export default connect(mapStateToProps)(App);
