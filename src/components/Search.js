import React from 'react'
import {MdOutlineLabel} from 'react-icons/md'
function Search({handleSearchNote}) {
  return (
    <div className='search-bar'>
    <MdOutlineLabel className='MdOutlineLabel' size={'1.3rem'} /> <input onChange={(event) => handleSearchNote(event.target.value)} className='input-search' type='text' placeholder='type to search...' />
  </div>
    )
}

export default Search