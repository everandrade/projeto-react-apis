import {
    Heading,
    Stack,
    Image,
    ScaleFade,
    Button,
    Skeleton,
    Text,
    Flex
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../constants/url'
import { typePokemon } from "../constants/typePokemon"
import pokebolaShadow from "../assets/pokebolaShade/pokebola-shadow.png"


const PokeCard = ({ pokeName }) => {
    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [typeOfPokemon, setTypeOfPokemon] = useState([])
    const location = useLocation()

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        if (!pokeName) return
        try {
            setIsLoading(true)
            const response = await axios.get(`${BASE_URL}pokemon/${pokeName}`)
            setPokemon(response.data)
            setTypeOfPokemon([typePokemon[response.data.types[0].type.name], typePokemon[response.data.types[1]?.type.name]])
            setIsLoading(false)
            // console.log(`fetchpokemon`, response.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScaleFade initialScale={0.9} in={true}>
            <Skeleton isLoaded={!isLoading}>
                <Flex
                    padding={"20px 0 20px 20px"}
                    flexDirection={"column"}
                    bgImage={pokebolaShadow}
                    bgRepeat={'no-repeat'}
                    bgPosition={"right"}
                    width={"440px"}
                    height={"210px"}
                    marginTop={"36px"}
                    borderRadius={"12px"}
                    bgColor={typeOfPokemon[0] && typeOfPokemon[0].color}
                    justifyContent={"space-between"}>

                    {/* ID e nome */}
                    <Flex
                        flexDirection={"column"}>
                        <Skeleton isLoaded={!isLoading}>
                            <Stack color={"#ffffff"}>
                                <Text 
                                fontSize={"16px"} 
                                fontWeight={"bold"} 
                                marginBottom={"-16px"}>#{pokemon.id < 100 ? pokemon.id < 10 ? `00${pokemon.id}` : `0${pokemon.id}` : pokemon.id}</Text>
                                <Heading 
                                textTransform={"capitalize"} 
                                fontSize={"32px"}>{pokemon.name}</Heading>
                            </Stack>
                        </Skeleton>

                        {/* escudo */}
                        <Skeleton isLoaded={!isLoading}>
                            <Flex paddingTop={"8px"} gap={"16px"}>
                                {pokemon.types?.map((type) => {
                                    return <Image
                                        key={type.type.name}
                                        src={typePokemon[type.type.name]?.urlImg}
                                        alt='Shield of type' />
                                })}
                            </Flex>
                        </Skeleton>
                    </Flex>

                    <Skeleton isLoaded={!isLoading}>
                        <Flex
                            w={"400px"}
                            position={"relative"}
                            justifyContent={"space-between"}
                            align-items={"center"}
                            fontFamily={"Poppins"}>

                            {/* Detalhes */}
                            <Stack
                                color={"#ffffff"}
                                fontSize={"16px"}
                                fontWeight={"bold"}
                                textDecoration={"underline"}
                                margintop={"auto"}>
                                <Link
                                to={"/details"}
                                >Detalhes
                                </Link>
                            </Stack>

                            {/* Imagem */}
                            <Image
                                position={"absolute"}
                                left={'230px'}
                                top={"-185px"}
                                height={"193px"}
                                width={"193px"}
                                src={pokemon.sprites && pokemon.sprites?.other['official-artwork']['front_default']} alt='Imagem do pokémon'
                            />

                            {/* Botão capturar e excluir */}
                            {location.pathname === "/pokedex" ?
                                <Button
                                    w={"146px"}
                                    marginTop={"auto"}
                                    marginBottom={"12px"}
                                    color={"#ffffff"}
                                    bgColor={"#FF6262"}
                                > Excluir</Button> :
                                <Button
                                    w={"146px"}
                                    h={"38px"}
                                    marginTop={"auto"}
                                    marginBottom={"12px"}
                                    color={"#000000"}
                                    bgColor={"#ffffff"}
                                > Capturar!
                                </Button>
                            }
                        </Flex>
                    </Skeleton>
                </Flex>
            </Skeleton>
        </ScaleFade >
    );
}

export default PokeCard