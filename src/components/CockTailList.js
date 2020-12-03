import React from 'react'
import {useGlobalContext} from '../context'
import Cocktail from './Cocktail'
import Loading from './Loading'

const CockTailList = () => {
    const {cocktails, isLoading} = useGlobalContext()

    if(isLoading){
        return(
            <Loading />
        )
    }
    if(cocktails.length < 1){
        return(
            <h2 className="section-title">There is no cocktail matching your search criteria</h2>
        )
    }
    return(
        <section className="section">
            <h2 className="section-title">Cocktail</h2>
            <div className="cocktail-container">
                {cocktails.map(cocktail =>{
                    return <Cocktail key={cocktail.id} {...cocktail}/>
                })}
            </div>
        </section>
    )
}

export default CockTailList