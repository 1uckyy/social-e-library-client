import React from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'

function MainPage(){
    return(
        <div className="root">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default MainPage