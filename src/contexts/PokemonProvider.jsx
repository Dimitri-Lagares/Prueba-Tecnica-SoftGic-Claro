import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"

const PokemonProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [fullData, setFullData] = useState([])
    const baseUrl = "https://pokeapi.co/api/v2/pokemon"
    const AllPokemons = []

    useEffect(() => {
        fetch(`${baseUrl}?limit=20`)
            .then((response) => response.json())
            .then((data) => setResults(
                data.results.map((item, index) => {
                    fetch(item.url)
                        .then((response) => response.json())
                        .then((pokemons) => AllPokemons.push(pokemons))
                        setFullData(AllPokemons)
                })
            ))
    }, [])

    return (
        <PokemonContext.Provider value={{ fullData }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider