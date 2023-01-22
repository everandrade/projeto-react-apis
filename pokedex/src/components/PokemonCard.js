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
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { PokemonContext } from "../context/PokemonContext"
import swal from "sweetalert"
import pokebolaShadow from "../assets/pokebolaShade/pokebola-shadow.png"
import { backgroundCard, backgroundType } from "../utilities/backgroundColor"
import { goToDetailsPage } from "../routes/coordinator"
import { BASE_URL } from "../constants/url"
import image from "../assets/image.png"

const PokemonCard = (props) => {
  const { pokemon } = props
  const navigate = useNavigate()
  const [infoPokemon, setInfoPokemon] = useState()
  const { setPokemonDetails, pokedexList, setPokedexList, namesUrl, setNamesUrl } = useContext(PokemonContext)


  useEffect(() => {
    infoPokemons()
  }, [])

  const infoPokemons = async () => {
    try {
      const resposta = await axios.get(`${BASE_URL}pokemon/${pokemon.name}/`)
      setInfoPokemon(resposta)
    } catch (error) {
      console.log(error)
    }
  }

  const sentToDetails = () => {
    setPokemonDetails(infoPokemon)
  }

  const sentToPokedex = () => {
    const newPokedex = [...pokedexList, infoPokemon]
    setPokedexList(newPokedex)
    swal({
      icon: image,
      timer: 2000,
      buttons: false
    });
    const newListPokemon = [...namesUrl]
    const findPokemon = newListPokemon.findIndex((pokemonCaptured) => pokemonCaptured.name === pokemon.name)
    newListPokemon.splice(findPokemon, 1)
    setNamesUrl(newListPokemon)
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
      backgroundColor={backgroundCard(infoPokemon?.data.types[0].type.name)}

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
          <Text color='white'>#{infoPokemon ? (infoPokemon.data.id) : ("loading")}</Text>
          <Heading size='md' color='white'>
            {infoPokemon ? (infoPokemon.data.name.toUpperCase()) : ("loading")}
          </Heading>
          <Box
            display='flex'
            flexDir="row"
            maxW='100%'
            maxH='100%'
            alignItems='center'
            justifyContent={{ base: "center", sm: "flex-start" }}
          >
            {infoPokemon?.data.types.map((types) => {
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
                  backgroundColor={backgroundType(types.type.name)}
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
          onClick={() => sentToDetails()}
          p={1}
        >
          <Button
            variant='solid'
            colorScheme='green'
            w='146px'
            h='38px'
            marginTop={1}
            onClick={() => goToDetailsPage(navigate)}
            marginRight={1}>
            Detalhes
          </Button>
          <Button
            bg='white'
            color='black'
            w='146px'
            h='38px'
            onClick={() => sentToPokedex()}
            marginRight={1}
            marginTop={1}
            hover={{ backgroundColor: "blue" }}
          >Capturar</Button>
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
        src={infoPokemon?.data.sprites.other['official-artwork'].front_default}
        alt='Pokemon image'
        alignSelf={{ base: 'center', sm: 'flex-start' }}
      />
    </Card>
  )
}

export default PokemonCard
