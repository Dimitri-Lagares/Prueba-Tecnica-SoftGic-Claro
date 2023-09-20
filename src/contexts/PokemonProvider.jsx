import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"
import axios from "axios"

const PokemonProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [fullData, setFullData] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [id, setId] = useState()
    const AllPokemons = []
    const baseUrl = "https://pokeapi.co/api/v2/pokemon"

    useEffect(() => {
        axios.get(baseUrl)
            .then((function (response) {
                setResults(
                    response.data.results.map((item) => {
                        axios.get(item.url)
                            .then(function (response) {
                                AllPokemons.push(response)
                                setFullData(AllPokemons)
                            })
                    })
                )
            })
            )
    }, [])

    useEffect(() => {
        axios.get(`${baseUrl}/${id}`)
            .then((function (response) {
                setPokemon(response.data)
            }))
    }, [id])

    return (
        <PokemonContext.Provider value={{ fullData, id, setId, pokemon }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider