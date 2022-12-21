import React from 'react'
import pokemon from "../assets/pokemon.svg"
import { Flex, Button } from '@chakra-ui/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { goToHomePage, goToPokedexPage, goToDetailsPage } from "../routes/coordinator"

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

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
                    marginLeft={"300px"}
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
        case "/details":
            return (<Flex
                height={"160px"}
                width={"1200px"}
                color={"white"}

                justifyContent={"center"}
            >
                <Flex
                    width={"800px"}
                    height={"113px"}
                    marginTop={"21px"}
                    marginLeft={"300px"}
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
                        onClick={() => goToDetailsPage(navigate)}>
                        Details</Button>
                </Flex >
            </Flex>)
        default:
            break;
    }
}

export default Header
