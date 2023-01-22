import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/home/Home"
import DetailsPage from "../pages/details/DetailsPage"
import Pokedex from "../pages/pokedex/Pokedex"
import NotFound from '../pages/notFound/notFound'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/" element={<DetailsPage />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
