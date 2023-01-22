import {
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text,
    Button,
    CardFooter,
    Box
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../routes/coordinator"
import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import swal from "sweetalert"
import pokebolaShadow from "../assets/pokebolaShade/pokebola-shadow.png"
import { backgroundCard, backgroundType } from "../utilities/backgroundColor"
import imageXclude from "../assets/imageXclude.png"

const PokedexCard = (props) => {
    const { pokemon } = props
    const { namesUrl, setNamesUrl, pokedexList, setPokedexList, setPokemonDetails } = useContext(PokemonContext)
    const navigate = useNavigate()
    const sendToDetails = () => {
        setPokemonDetails(pokemon)
    }
    const deleteFromPokedex = () => {
        const newListPokemon = [{ name: pokemon.data.name }, ...namesUrl]
        setNamesUrl(newListPokemon)
        swal({
            icon: imageXclude,
            timer: 2000,
            buttons: false
        });
        const newPokedex = [...pokedexList]
        const findIndex = newPokedex.findIndex((item) => item.data.name === pokemon.data.name)
        newPokedex.splice(findIndex, 1)
        setPokedexList(newPokedex)
    }

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            minW={{ base: '330', sm: '440px' }}
            maxW={{ base: '330', sm: '440px' }}
            minH={{ base: '440px', sm: '210px' }}
            maxH={{ base: '440px', sm: '210px' }}
            borderRadius='12px'
            m='8px'
            justifyContent={'center'}
            alignItems='center'
            backgroundImage={pokebolaShadow}
            backgroundSize={'auto'}
            backgroundPosition={{ base: 'center', sm: 'right' }}
            backgroundRepeat={'no-repeat'}
            backgroundColor={backgroundCard(pokemon?.data.types[0].type.name)}
        >
            <Stack
                justifyContent={'space-evenly'}
                maxH={{ base: '360px', sm: '210px' }}
                maxW='250px'
                p={1}
            >
                <CardBody
                    display={'flex'}
                    flexDir="column"
                    justifyContent='space-between'
                    m={1}
                    p={1}
                    h='80px'
                    alignItems={{ base: "center", sm: "flex-start" }}
                >
                    <Text
                        color='white'
                    >
                        #{pokemon ? (pokemon.data.id) : ("loading")}
                    </Text>
                    <Heading
                        size='md'
                        color='white'
                    >
                        {pokemon ? (pokemon.data.name.toUpperCase()) : ("loading")}
                    </Heading>
                    <Box
                        display='flex'
                        flexDir="row"
                        maxW='100%'
                        maxH='100%'
                        alignItems='center'
                        justifyContent={{ base: "center", sm: "flex-start" }}
                    >
                        {pokemon?.data.types.map((types) => {
                            return (
                                <Text
                                    key={types.type.name}
                                    borderRadius={'8px'}
                                    maxW='80px'
                                    minW=' 80px'
                                    maxH='31px'
                                    minH='31px'
                                    marginRight={1}
                                    marginTop={1}
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='center'
                                    backgroundColor={() => backgroundType(types.type.name)}
                                    color='white'
                                >
                                    {types.type.name}
                                </Text>
                            )
                        })}
                    </Box>
                </CardBody>
                <CardFooter
                    w='250px'
                    justifyContent={'space-evenly'}
                    alignItems='center'
                    display='flex'
                    flexDir={{ base: 'column', sm: 'row' }}
                    onClick={() => sendToDetails()}
                    p={1}
                >
                    <Button
                        variant='solid'
                        colorScheme='green'
                        w='146px'
                        h='38px'
                        marginTop={1}
                        onClick={() => goToDetailsPage(navigate)}
                        marginRight={1}
                    >
                        Detalhes
                    </Button>
                    <Button
                        variant='solid'
                        colorScheme='red'
                        w='146px'
                        h='38px'
                        onClick={() => deleteFromPokedex()}
                        marginRight={1}
                        marginTop={1}
                    >
                        Excluir
                    </Button>
                </CardFooter>
            </Stack>
            <Image
                objectFit={{ base: 'cover', sm: 'cover' }}
                boxSize="100%"
                overflow={'hidden'}
                borderRadius='5px'
                maxW={{ base: '220px', sm: '193px' }}
                minW={{ base: '220px', sm: '193px' }}
                maxH={{ base: '220px', sm: '193px' }}
                minH={{ base: '220px', sm: '193px' }}
                src={pokemon?.data.sprites.other['official-artwork'].front_default}
                alt='Pokemon image'
                alignSelf={{ base: 'center', sm: 'flex-start' }}
            />
        </Card>
    )
}

export default PokedexCard