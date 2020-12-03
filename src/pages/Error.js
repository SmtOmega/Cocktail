import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
    return (
        <section className="section error-page"> 
            <h1 className="section-title">Oops! what you searching for can not be found</h1>
            <Link to="/">
                Back Home
            </Link>
        </section>
    )
}

export default Error