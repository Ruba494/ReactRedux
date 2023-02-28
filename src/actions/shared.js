import {getInitialData} from "../utils/api";
import {receiveTweets} from './tweets'
import {receiveUsers} from './users'
import {setAuthUser} from "./authUser";
import {showLoading,hideLoading} from "react-redux-loading-bar";

const AUTH_ID='tylermcginnis';
//action creator
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthUser(AUTH_ID));
            dispatch(hideLoading())
        })
    }
}