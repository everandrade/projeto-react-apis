import { ChakraProvider } from '@chakra-ui/react'
import Router from "./routes/Router"
import { GlobalStyle } from "./GlobalStyle"
import { PokemonContext } from "./context/PokemonContext"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './constants/url'


function App() {
  const [pokemonDetails, setPokemonDetails] = useState()
  const [pokedexList, setPokedexList] = useState([])
  const [namesUrl, setNamesUrl] = useState([])

  useEffect(() => {
    getNames()
  }, [])

  const getNames = async () => {
    try {
      const resposta = await axios.get(BASE_URL + 'pokemon/')
      setNamesUrl(resposta.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const context = {
    namesUrl: namesUrl,
    setNamesUrl: setNamesUrl,
    pokedexList: pokedexList,
    setPokedexList: setPokedexList,
    pokemonDetails: pokemonDetails,
    setPokemonDetails: setPokemonDetails,
  }

  return (
    <PokemonContext.Provider value={context}>
      <ChakraProvider>
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </PokemonContext.Provider>
  );
}

export default App;
