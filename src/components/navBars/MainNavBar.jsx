import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { tabs } from '../../utils/mainNavOptions'
import './navBarStyles.css'

const MainNavBar = () => {
    const navigate = useNavigate()
    const handleTab = (path)=> {
        navigate(path)
    }
    
  return (
    <div id='mainNavContainer'>
        {tabs.map(t=>
            <button className='mainNavButton' key={t.label} onClick={()=>handleTab(t.path)}>
                {t.label}
            </button>
        )}
    </div>
  )
}

export default MainNavBar