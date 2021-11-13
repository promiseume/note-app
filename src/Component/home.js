import React from 'react'
import { Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='welcomepage'>
            <div>
           <h1>Welcome</h1>
           <Link to='/notes'> 
           <button className='btn'>Get Started</button>
           </Link>
           </div>
        </div>
    )
}

export default Home
