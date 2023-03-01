import {Link} from 'react-router-dom'

const Nav =()=>{
    return <nav className='nav'>
        <ul>
            <li key='dashboard'>
                <Link to='/'>Home</Link>
            </li>
            <li key='newTweet'>
                <Link to='/new'>New Tweet</Link>
            </li>
        </ul>
    </nav>
}

export default Nav;