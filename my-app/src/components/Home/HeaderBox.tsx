import React from 'react'

const HeaderBox = ({type, title, user, subtext}) => {
  return (
    <div className='header-box'>
        <h1>
        {title}
        <span className='user-name'>&nbsp;{user}</span>
        {/* {type === 'greeting ' && (<span>{user}</span>)} */}
    </h1>
    <h3>
        {subtext}
    </h3>
    </div>
    
    
  )
}

export default HeaderBox;