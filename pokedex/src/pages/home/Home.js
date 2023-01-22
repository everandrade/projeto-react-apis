import React, { useContext } from 'react'
import Header from "../../components/Header"
import PokemonCard from '../../components/PokemonCard'
import { PokemonContext } from '../../context/PokemonContext'
import { Div, Pokemons } from './HomeStyled'

const Home = () => {
    const context = useContext(PokemonContext)
    const { namesUrl } = context

    return (
        <>
            <Header />
            <Div>
                <Pokemons>
                    <header>
                        TODOS OS POKÉMONS
                    </header>
                    <div className="pokemonsList">
                        {namesUrl.map((pokemon) => {
                            return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        })}
                    </div>
                </Pokemons>
            </Div>
        </>
    )
}

export default Home
