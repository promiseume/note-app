import React from 'react'
import {FaSearch} from 'react-icons/fa'

export default function Search({handleSearch}) {
    return (
        <div className='search'>
            <FaSearch/>
            <input onChange={(e) => 
                handleSearch(e.target.value)} 
                type='text' placeholder='type to search.....'/>
        </div>
    )
}
