import React from 'react'
import './404.css'
import pic from '../../../assets/404.jpg'

function Error404() {
    return (
        <div className="wrapper">
            <div className="descr">
                <div className="num">404</div>
                <div className="text">Page not found!</div>
            </div>
            <img className='pic' src={pic} alt="pic"/>
        </div>
    )
}

export default Error404
