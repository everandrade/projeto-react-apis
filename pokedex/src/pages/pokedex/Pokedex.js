import React, { useContext } from 'react'
import Header from "../../components/Header"
import PokedexCard from '../../components/PokedexCard'
import { PokemonContext } from "../../context/PokemonContext"
import { Div, Pokemons } from "./PokedexStyled"

const Pokedex = () => {

    const context = useContext(PokemonContext)
    const { pokedexList } = context

    return (
        <>
            <Header />
            <Div>
                <Pokemons>
                    <header>
                        MEUS POKÉMONS
                    </header>
                    <div className="pokemonsPokedex">
                        {pokedexList?.map((pokemon) => {
                            return <PokedexCard key={pokemon.data.id} pokemon={pokemon} />
                        })}
                    </div>
                </Pokemons>
            </Div>
        </>
    )
}

export default Pokedex