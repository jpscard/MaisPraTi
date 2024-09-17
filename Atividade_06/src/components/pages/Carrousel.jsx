import React, { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa o estilo padrão do carrossel

// Estiliza o carrossel personalizado.
const CustomCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
    text-decoration: none;
    &:hover {
      background-color: #0056b3;
    }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70%;
  margin: auto;
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 20px;
`;

const CarouselItem = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
  }

`;


const Carrousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(localStorage.getItem('IndexCarousel') || 0)
  useEffect(() => {
    localStorage.setItem('IndexCarousel', carouselIndex)
  }, [carouselIndex]);

  const setIndexCarousel = (index) => {
    setCarouselIndex(index);
  };

  return (
    <div>
      <CarouselContainer>
        <CustomCarousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          selectedItem={carouselIndex}
          onChange={(index) => setIndexCarousel(index)}
        >
          <CarouselItem>
            <h2>QR Code Generator</h2>
            <StyledLink to="/qrcodegen">Acessar</StyledLink>
          </CarouselItem>
          <CarouselItem>
            <h2>IP Address Finder</h2>
            <StyledLink to="/ipaddress">Acessar</StyledLink>
          </CarouselItem>
          <CarouselItem>
            <h2>Movie Search Engine</h2>
            <StyledLink to="/moviesearch">Acessar</StyledLink>
          </CarouselItem>
          <CarouselItem>
            <h2>Todo App</h2>
            <StyledLink to="/todoapp">Acessar</StyledLink>
          </CarouselItem>
          <CarouselItem>
            <h2>Quiz App</h2>
            <StyledLink to="/quizapp">Acessar</StyledLink>
          </CarouselItem>
          <CarouselItem>
            <h2>Language Translator</h2>
            <StyledLink to="/langtradutor">Acessar</StyledLink>
          </CarouselItem>
        </CustomCarousel>
      </CarouselContainer>
    </div>
  );
}

export default Carrousel;
