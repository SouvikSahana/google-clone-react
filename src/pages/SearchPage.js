import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'
import useGoogleSearch from './useGoogleSearch'
import logo from './google.png'
import Search from './Search'

const SearchPage = () => {
    const [{term},dispatch]=useStateValue()
    const {data}= useGoogleSearch(term)

  return (
    <div className='searchPage'>
        <div className="searchPage_header">
            <Link to='/'>
                <img src={logo} alt="" className='searchPage_logo' />
            </Link>
            <div className="searchPage_headerBody">
                <Search hideButtons/>
                {/* <div className="searchPage_options">

                </div> */}
            </div>
        </div>
        {true && (
        <div className="searchPage_results">
            <p className="searchPage_resultCount">
               About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>
            {data?.items.map(item=>{
                return (
                    <div className="searchPage_result">
                       <a href={item.link}>{item.displayLink}</a> 
                       <a href={item.link} className="searchPage_resultTitle"><h4>{item.title}</h4></a>
                       <p className="searchPage_resultSnippet">{item.snippet}</p>
                    </div>
                )
            })}
        </div>)}
        
    </div>
  )
}
//AIzaSyDwVHQRywDY2vG9Zssvy_JvdvC15pBcPEs

export default SearchPage