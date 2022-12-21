import React, { useEffect, useState } from 'react'
import Header from "../../components/Header"
import { BASE_URL } from "../../constants/url"
import axios from 'axios'
import { Flex, Heading } from '@chakra-ui/react'
import PokeCard from '../../components/PokeCard'

const Home = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(`${BASE_URL}pokemon?limit=20&offset=0.`)
            setPokemon(response.data.results)
            // console.log(response.data.results);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            <Flex
                flexDir={"column"}
                width={"1440px"}
                paddingTop={5}
                justifyContent={"space-between"}
                background={"#5d5d5d"}
                padding={"30px 30px 0px 30px"}
            >
                <Heading
                    color={"white"}>
                    Todos os Pokémons</Heading>
            </Flex>
            <Flex
                padding={"30px"}
                width={"1440px"}
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

export default Home
