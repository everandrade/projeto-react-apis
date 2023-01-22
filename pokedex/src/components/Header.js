import React, { useContext } from 'react'
import pokemon from "../assets/pokemon.svg"
import { Flex, Button } from '@chakra-ui/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { goToPokedexPage } from "../routes/coordinator"
import { PokemonContext } from '../context/PokemonContext'
import swal from 'sweetalert'
import imageXclude from "../assets/imageXclude.png"

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(PokemonContext)
    const { pokemonDetails, pokedexList, namesUrl, setPokedexList, setNamesUrl } = context

    const deletePokemon = () => {
        const newListPokemon = [{ name: pokemonDetails.data.name }, ...namesUrl]
        setNamesUrl(newListPokemon)
        swal({
            icon: imageXclude,
            timer: 2000,
            buttons: false
        });
        const newPokedex = [...pokedexList]
        const findPokemon = newPokedex.findIndex((item) => item.data.name === pokemonDetails.data.name)
        newPokedex.splice(findPokemon, 1)
        setPokedexList(newPokedex)
    }

    switch (location.pathname) {
        case "/":
            return (<Flex
                height={"160px"}
                width={"1440px"}
                margin={"0 auto"}
                color={"white"}
                justifyContent={"center"}
            >
                <Flex
                    width={"800px"}
                    height={"113px"}
                    marginTop={"21px"}
                    marginLeft={"250px"}
                    justifyContent={"center"}>
                    <img src={pokemon} alt="logo pokemon"></img>
                </Flex>
                <Flex
                    alignItems={"center"}
                    justifyContent={"start"}>
                    <Button
                        width={"287px"}
                        height={"74px"}
                        margin-top={"41px"}
                        margin-left={"1112px"}
                        borderRadius={"8px"}
                        padding={"4px 10px 4px 10px"}
                        color={"white"}
                        bgColor={"#33A4F5"}
                        fontWeight={700}
                        fontSize={"24px"}
                        fontFamily={"Poppins"}
                        lineHeight={"36px"}
                        onClick={() => goToPokedexPage(navigate)}>
                        Pokédex</Button>
                </Flex >
            </Flex>)
        case "/pokedex":
            return (<Flex
                height={"160px"}
                width={"1440px"}
                color={"white"}
                justifyContent={"flex-start"}
            >
                <Flex
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    color={'#1A1A1A'}
                    width={"270px"}
                    height={"36px"}
                    marginTop={"62px"}
                    marginLeft={"100px"}
                    fontStyle={"normal"}
                    fontWeight={"700"}
                    fontFamily={"Poppins"}
                    fontSize={"24px"}
                    lineHeight={"36px"}
                    textDecoration={"underline"}
                >
                    <Link
                        to={'/'}>
                        {'< '}Todos os Pokémons</Link>
                </Flex >
                <Flex
                    width={"800px"}
                    height={"113px"}
                    marginTop={"21px"}
                    justifyContent={"center"}>
                    <img src={pokemon} alt="logo pokemon"></img>

                </Flex>
            </Flex>)
        case `/details`:
            return (<Flex
                height={"160px"}
                width={"1440px"}
                margin={"0 auto"}
                color={"white"}
                justifyContent={"center"}
            >
                <Flex
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    color={'#1A1A1A'}
                    width={"379px"}
                    height={"36px"}
                    marginTop={"62px"}
                    fontStyle={"normal"}
                    fontWeight={"700"}
                    fontFamily={"Poppins"}
                    fontSize={"24px"}
                    lineHeight={"36px"}
                    textDecoration={"underline"}
                >
                    <Link
                        to={'/'}>
                        {'< '}Todos os Pokémons</Link>
                </Flex >
                <Flex
                    width={"800px"}
                    height={"113px"}
                    marginTop={"21px"}
                    marginLeft={"270px"}
                    justifyContent={"left"}>
                    <img src={pokemon} alt="logo pokemon"></img>
                </Flex>
                <Flex
                    alignItems={"center"}
                    width={"500px"}
                    justifyContent={"flex-start"}
                    >
                    <Button
                        width={"287px"}
                        height={"74px"}
                        margin-top={"41px"}
                        borderRadius={"8px"}
                        padding={"4px 10px 4px 10px"}
                        color={"white"}
                        bgColor={"#FF6262"}
                        fontWeight={700}
                        fontSize={"24px"}
                        fontFamily={"Poppins"}
                        lineHeight={"36px"}
                        onClick={() => deletePokemon()}
                    >
                        Excluir da Pokédex</Button>
                </Flex >
            </Flex>)
        default:
            break;
    }
}

export default Header
