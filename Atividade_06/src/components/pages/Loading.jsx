import React from 'react';
import styled from 'styled-components';

// Estilizando o container de carregamento
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(104, 103, 103, 0.1);
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border-left-color: #4b4d4e;
  animation: spin 1s ease infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default Loading;
