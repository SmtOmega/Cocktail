import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import Loading from '../components/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)
    useEffect(()=>{
        setLoading(true)
        async function getCocktail(){
            try {
                const res = await fetch(`${url}${id}`)
                const data = await res.json()
                if(data.drinks){
                    const {
                        strDrink: name, 
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5]
                    const newDrink = {name, image, info, category, glass, instructions, ingredients}
                    setCocktail(newDrink)
                }
                else{
                    setCocktail(null)
                }
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        } 
        getCocktail()
    }, [id])
    if(loading) {
        return(
            <Loading />
        )
    }
    if(!cocktail){
        return(
            <h2 className="section-title">There is no cocktail to display</h2>
        )
    }

    const {name, info, image, glass, instructions, ingredients, category} = cocktail
    return (
        <section className="section single-cocktail">

            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={image} alt={name}/>
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name  :  </span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">category : </span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">info :  </span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">glass :  </span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions :  </span>
                        {instructions}
                    </p>
                    <p>
                        <span className="drink-data">ingredients :  </span>
                        {ingredients.map((ingre, index)=>{
                            return ingre ? <span key={index}>{ingre}, </span> : null
                        })}
                    </p>
                </div>
            </div>
            <div className="back section-title">
                <Link to="/" >
                    Back Home
                </Link>
            </div>

        </section>
    )
}

export default SingleCocktail