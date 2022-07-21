import React from "react";
import { Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";

const dummyProducts = [
    {
        id: 0,
        tittle: "Produk A",
        price: 20000,
        description: "Bagus Banget Dong",
        image: 'https://p4.wallpaperbetter.com/wallpaper/758/592/32/amoled-dark-vertical-hd-wallpaper-preview.jpg',
    },
    {
        id:2,
        tittle: "Produk B",
        price: 30000,
        description: "Bagus Banget Dong",
        image: 'https://p4.wallpaperbetter.com/wallpaper/530/696/1011/amoled-dark-rubik-s-cube-hd-wallpaper-preview.jpg',
    },
    {
        id:3,
        tittle: "Produk C",
        price: 40000,
        description: "Bagus Banget Dong",
        image: 'https://p4.wallpaperbetter.com/wallpaper/553/564/19/cyberpunk-amoled-dark-vertical-hd-wallpaper-preview.jpg',
    },
    {
        id:4,
        tittle: "Produk D",
        price: 50000,
        description: "Bagus Banget Dong",
        image: 'https://p4.wallpaperbetter.com/wallpaper/697/811/763/amoled-dark-vertical-anime-girls-hd-wallpaper-preview.jpg',
    },
];

function CardList() {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
            {dummyProducts.map((product) => (
                <Col key ={product.id}>
                <CardItem  item={product} />
                </Col>
            ))}
        </Row>
    );

}

export default CardList;