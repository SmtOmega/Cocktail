import React, {useContext, useEffect, useState} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const {drinks} = data
    
            if(drinks){
                const newDrinks = drinks.map(drink => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newDrinks)
            }
            else {
                setCocktails([])
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            //setIsLoading(false)
        }

    }

    useEffect(()=>{
        fetchData()
    }, [searchTerm])
    return <AppContext.Provider
            value={{
                searchTerm,
                isLoading,
                setSearchTerm,
                cocktails
            }

            }
        >
        {children}
        
        </AppContext.Provider>
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}