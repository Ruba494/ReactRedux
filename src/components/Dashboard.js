import {connect} from "react-redux";
import Tweet from "./Tweet";

const Dashboard = (props) => {
    console.log(props)
    return <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
            {
                props.tweetIds.map((id) => (
                    <li key={id}>
                       <Tweet id={id}/>
                    </li>
                ))
            }
        </ul>
    </div>
};

const mapStateToProps = ({tweets}) => ({
    tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
})
export default connect(mapStateToProps)(Dashboard);