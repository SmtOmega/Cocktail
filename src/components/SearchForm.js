import React, {useEffect, useRef} from 'react'
import {useGlobalContext} from '../context'

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()

    const searchValue = useRef('')
    const handleSearch = ()=> {
        setSearchTerm(searchValue.current.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    useEffect(()=>{
        searchValue.current.focus()
    }, [])
    return (
        <section className="section">
            <div className="input-container">
                <form action="" onSubmit={handleSubmit}>
                    <input type='text' ref={searchValue}
                     onChange={handleSearch} 
                    placeholder="Search your favorite cocktails"/>
                </form>
            </div>
        </section>
    )
}

export default SearchForm