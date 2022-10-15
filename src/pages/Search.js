import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { useStateValue } from '../StateProvider';
import { actiontypes } from '../reducer';
const Search = ({hideButtons=false}) => {
  const [{},dispatch]=useStateValue()
  const [input,setInput]=useState('')
  const history=useHistory();
  const search=e=>{
    e.preventDefault();
    dispatch({
      type:actiontypes.SET_SEARCH_TERM,
      term: input
    })
history.push('/search')
setInput('')
  }
  return (
    <form className='search'>
        <div className="search_input">
                <SearchIcon className='search_inputIcon'/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <MicNoneIcon />
        </div>
        {!hideButtons?(<div className="search_buttons">
            <Button variant='outlined' type='submit' onClick={search} className='search_button'>Google Search</Button>
            <Button variant='outlined' className='search_button'>I'm Feeling Lucky</Button>
        </div>):(
          <div className="search_buttonsHidden">
          <Button variant='outlined' type='submit' onClick={search} className='search_button'>Google Search</Button>
          <Button variant='outlined' className='search_button'>I'm Feeling Lucky</Button>
      </div>
        )}
        
    </form>
  )
}

export default Search