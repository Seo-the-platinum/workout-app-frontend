import React from 'react'
import { useNavigate } from 'react-router-dom'
import { tabs } from '../../utils/mainNavOptions'
import './navBarStyles.css'

const MainNavBar = () => {
    //fix so that home tab on initial load is green
    const navigate = useNavigate()
    const handleTab = (tab, e)=> {
        const tabEls = document.getElementsByClassName('mainNavButton')
        const selected = document.getElementById(e.target.id)
        selected.style.color = 'rgba(9, 173, 121, 1)'
        for (let i = 0; i < tabs.length; i++) {
            if (tabEls[i] !== selected) {
                tabEls[i].style.color = 'white'
            }
        }
        navigate(tab.path)
    }
  return (
    <div id='mainNavContainer'>
        {tabs.map(tab=>
            <button className='mainNavButton' key={tab.label} onClick={(e)=>handleTab(tab,e)} id={tab.label}>
                {tab.label}
            </button>
        )}
    </div>
  )
}

export default MainNavBar