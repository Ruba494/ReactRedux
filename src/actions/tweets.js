import {saveLikeToggle, saveTweet} from "../utils/api";
import {showLoading,hideLoading} from "react-redux-loading-bar";

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEETS = 'TOGGLE_TWEETS'
export const ADD_TWEETS = 'ADD_TWEETS'

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}
function Addtweet(tweet) {
    return {
        type: ADD_TWEETS,
        tweet
    }
}
export function handleAddingTweet(text,replyingTo) {
    return (dispatch,getState)=>{
        const {authUser}=getState()
        dispatch(showLoading())
        return saveTweet({
            text,
            author:authUser,
            replyingTo
        }).then((tweet)=>dispatch(Addtweet(tweet))
            .then(()=>dispatch(hideLoading())))
    }
}

function toggleTweets({id, authUser, hasLiked}) {
    return {
        type: TOGGLE_TWEETS,
        id, authUser, hasLiked
    }
}

export function handleToggleTweet(info){
    return (dispatch)=>{
        dispatch(toggleTweets(info))
        return saveLikeToggle(info).catch((e)=>{
            console.warn('Error in handleToggleTweet: ',e)
            dispatch(toggleTweets(info))
            alert('there was an error liking the tweet. try again')
        })
    }
}

