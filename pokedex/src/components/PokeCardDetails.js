import {
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
    Box,
    Progress,
    Button
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import pokebolaShadow from '../assets/pokebolaShade/pokebola-shadow.png'
import swal from "sweetalert"
import { backgroundCard, backgroundType } from '../utilities/backgroundColor'
import image from "../assets/image.png"

function PokemonCardDetails() {
    const { pokemonDetails, pokedexList, namesUrl, setPokedexList, setNamesUrl } = useContext(PokemonContext)
    const [attacks, setAttacks] = useState(pokemonDetails?.data.moves.slice(0, 8) || [])

    const handleCapture = () => {
        const newPokedex = [...pokedexList, pokemonDetails]
        setPokedexList(newPokedex)
        swal({
            icon: image,
            timer: 2000,
            buttons: false
        });
        const newListPokemon = [...namesUrl]
        const findPokemon = newListPokemon.findIndex((pokemon) => pokemon.name === pokemonDetails.data.name)
        newListPokemon.splice(findPokemon, 1)
        setNamesUrl(newListPokemon)
    }

    const capButton = () => {
        for (let i = 0; i < namesUrl.length; i++) {
            if (pokemonDetails?.data.name === namesUrl[i].name) {
                return (
                    <Button
                        onClick={() => handleCapture()}
                    >Capturar!
                    </Button>
                )
            }
        }
    }

    return (
        <Center
            px={6}
            py={3}
            bg={useColorModeValue('grey', 'gray.900')}
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
        >
            <Box
                display='flex'
                flexDir={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                w={{ sm: '100%', md: '1200px' }}
                m={1}
            >
                <Heading
                    fontFamily={'body'}
                    fontSize={'48px'}
                    fontWeight='bold'
                    color='white'
                    py={1}
                >
                    DETALHES
                </Heading>
                {capButton()}
            </Box>
            <Stack
                borderRadius='37.89px'
                boxShadow={'2xl'}
                w={{ sm: '300px', md: '1200px' }}
                height={{ sm: '1376px', md: '663px' }}
                p={{ sm: '0', md: '32px' }}
                display='flex'
                flexDirection={{ base: 'column-reverse', md: 'row' }}
                justifyContent={{ base: 'space-between', sm: 'flex-end', md: 'space-between' }}
                alignItems='center'
                backgroundColor={backgroundCard(pokemonDetails?.data.types[0].type.name)}
                backgroundImage={pokebolaShadow}
                backgroundSize={'contain'}
                backgroundPosition={'right'}
                backgroundRepeat={'no-repeat'}
            >
                <Flex
                    flexDirection={{ base: 'column', sm: 'row', md: 'column' }}
                    maxH={'610px'}
                    minH={'610px'}
                    justifyContent='space-between'
                    m={{ base: '24px', sm: '0px' }}
                >
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        maxH='282px'
                        minH='282px'
                        maxW='282px'
                        minW='282px'
                        src={
                            pokemonDetails?.data.sprites.front_default
                        }
                        borderRadius={'8px'}
                        overflow={'hidden'}
                        backgroundColor='white'
                    />
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        maxH='282px'
                        minH='282px'
                        maxW='282px'
                        minW='282px'
                        src={
                            pokemonDetails?.data.sprites.back_default
                        }
                        borderRadius={'8px'}
                        overflow={'hidden'}
                        backgroundColor='white'
                    />
                </Flex>
                <Stack
                    flex={1}
                    display='flex'
                    flexDirection="column"
                    alignItems='flex-start'
                    justifyContent='flex-start'
                    backgroundColor='white'
                    borderRadius='12px'
                    maxH={'613px'}
                    minH={'613px'}
                    minW={{ base: '300px', md: '343px' }}
                    maxW={{ base: '300px', md: '343px' }}
                >
                    <Heading
                        fontSize={'2xl'}
                        fontFamily={'body'}
                        m={4}
                        display='flex'
                        alignItems='flex-start'
                        justifyContent='flex-start'
                    >
                        Base stats
                    </Heading>
                    <Box
                        mt={'1rem'}
                        flex={1}
                        display='flex'
                        flexDirection="column"
                        alignItems='flex-start'
                        justifyContent='flex-start'
                        p={2}
                    >

                        {pokemonDetails?.data.stats.map((status) => {
                            return (
                                <Box
                                    display='flex'
                                    flexDir='row'
                                    key={status.stat.name}
                                    justifyContent='center'
                                    alignItems='center'
                                    textTransform={'capitalize'}
                                >
                                    <Text
                                        m={1}
                                    >
                                        {status.stat.name}
                                    </Text>
                                    <Text
                                        m={1}
                                    >
                                        {status.base_stat}
                                    </Text>
                                    <Progress colorScheme='yellow' size='sm' value={status.base_stat}
                                        borderRadius='5px'
                                        minW='120px'
                                        m={1}
                                    />
                                </Box>
                            )
                        })}
                    </Box>
                </Stack>
                <Stack
                    flex={1}
                    display='flex'
                    flexDirection="column"
                    alignItems='center'
                    justifyContent='space-between'
                    borderRadius='12px'
                    maxH={'613px'}
                    minH={'613px'}
                    minW='292px'
                    maxW='292px'
                >
                    <Heading
                        fontSize={'4xl'}
                        fontFamily={'body'} p={2}
                        color='white'
                    >
                        {pokemonDetails?.data.name.toUpperCase()}
                    </Heading>
                    <Box
                        display='flex'
                        flexDir="row"
                        maxW='100%'
                        maxH='100%'
                        alignItems='center'
                        justifyContent={{ base: "center", sm: "flex-start" }}
                        p={1}
                    >
                        {pokemonDetails?.data.types.map((types) => {
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
                    <Stack
                        backgroundColor='white'
                        borderRadius='16px'
                        h='453px'
                        minW='292px'
                        maxW='292px'
                        alignSelf='center'
                    >
                        <Heading
                            fontSize={'2xl'}
                            fontFamily={'body'}
                            m={4}
                        >
                            Moves:
                        </Heading>
                        <Box
                            color={useColorModeValue('gray.700', 'gray.400')}
                            m={4}
                            p={2}
                            display='flex'
                            flexWrap='wrap'
                            flexDir='row'
                            justifyContent='center'
                            textTransform={'capitalize'}
                        >
                            {attacks?.map((attack) => {
                                return (
                                    <Text
                                        key={attack.move.name}
                                        borderRadius={'8px'}
                                        backgroundColor='#ECECEC'
                                        maxW='150px'
                                        minW='150px'
                                        maxH='31px'
                                        minH='31px'
                                        m={1}
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        {attack.move.name}
                                    </Text>
                                )
                            })}
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Center >
    );
}

export default PokemonCardDetails