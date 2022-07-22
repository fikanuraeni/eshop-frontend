import React from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const dummyProducts = [
    {
        id: 0,
        tittle: "Produk A",
        price: 20000,
        description: "Bagus Banget Dong",
        image: 'https://p4.wallpaperbetter.com/wallpaper/758/592/32/amoled-dark-vertical-hd-wallpaper-preview.jpg',
        quantity: 1,
    },
    {
        id:2,
        tittle: "Produk B",
        price: 30000,
        description: "Bagus Banget Dong",
        image: 'https://p4.wallpaperbetter.com/wallpaper/530/696/1011/amoled-dark-rubik-s-cube-hd-wallpaper-preview.jpg',
        quantity: 2,
    },
    {
        id:3,
        tittle: "Produk C",
        price: 40000,
        description: "Bagus Banget Dong",
        image: 'https://p4.wallpaperbetter.com/wallpaper/553/564/19/cyberpunk-amoled-dark-vertical-hd-wallpaper-preview.jpg',
        quantity: 3,
    },
    {
        id:4,
        tittle: "Produk D",
        price: 50000,
        description: "Bagus Banget Dong",
        image: 'https://p4.wallpaperbetter.com/wallpaper/697/811/763/amoled-dark-vertical-anime-girls-hd-wallpaper-preview.jpg',
        quantity: 4,
    },
];

function Carts({isLogedIn}) {
    if (!isLogedIn) {
        return (
            <Navigate to='/auth/login' replace />
        )
    }
return (
    <Container>
        {dummyProducts.map((product) => (
            <CartItem key={product.id} item={product} />
        ))}
    </Container>
);
}

export default Carts;