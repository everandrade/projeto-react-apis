import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from "../../components/Header"
import PokeCard from "../../components/PokeCard"

const Pokedex = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <>
            <Header />
            <Flex
                flexDir="column"
                paddingTop={5}
                justifyContent={"space-between"}
                background={"#5d5d5d"}
                padding={"30px 30px 0px 30px"}
                width={"1440px"}
            >
                <Heading
                    color={"white"}
                    fontFamily={"Poppins"}>
                    Meus Pokémons</Heading>
            </Flex>
            <Flex
                padding={"30px"}
                background={"#5d5d5d"}
                flexWrap={"wrap"}
                marginTop={"0px 0px"}
                gap={"20px"}
                justifyContent="space-around"
            >
                {pokemon.map((poke) => {
                    return <PokeCard
                        key={poke.name}
                        pokemon={poke}
                        pokeName={poke.name} />
                })}
            </Flex>
        </>
    )
}

export default Pokedex