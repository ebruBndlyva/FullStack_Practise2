import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const FavoriteContext = createContext()

function FavoriteProvider({ children }) {
    let localFavorite = localStorage.getItem("favorites")
    let [favoriteData, setFavoriteData] = useState(localFavorite ? JSON.parse(localFavorite) : [])


    useEffect(() => {
        if (favoriteData) {
            localStorage.setItem("favorites", JSON.stringify(favoriteData))
        }
    }, [favoriteData])
    let values={
        favoriteData,
        setFavoriteData
    }
    return (
        <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>
    )
}

export default FavoriteProvider