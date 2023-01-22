import styled from "styled-components"

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:grey;
    min-height: 76vh;
`

export const Pokemons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1400px;
    min-width: 330px;

    header{
            color: white;
            padding: 16px;
            font-size: 48px;
            font-weight: bold;
            text-align: center;
            align-self: center;
        }

    .pokemonsPokedex{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`