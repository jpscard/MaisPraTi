import { useEffect, useState } from 'react'; // Importa o hook useState do React
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import { useAuth } from '../Contexts/AuthContext';
import GoogleAuth from './GoogleAuth'

// Define o estilo do container principal do login
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Define o estilo do formulário de login
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

// Define o estilo do botão
const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const error = styled.p`
  color: #ffffff;

 `;

// Componente principal de Login
// eslint-disable-next-line react/prop-types
const Login = () => {
  const [username, setUsername] = useState(''); // Define o estado para o nome de usuário
  const [password, setPassword] = useState(''); // Define o estado para a senha
  const [error, setError] = useState();
  const { isAuth, login } = useAuth(); // context de auth do usuario!
  const navigate = useNavigate();
 
  useEffect(()=>{
    if(isAuth){
      navigate('/')
    }
  },[])
  
  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); 
   
    if (username === 'admin' && password === 'password') {
      const date = Date.now()
      const user = {
        username,
        date ,
      }
      await login(user);
      navigate('/qrcodegen')
    } else {
     setError('Invalid credentials')
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          value={username} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setUsername(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="Username" // Placeholder do campo de entrada
        />
        <Input
          type="password"
          value={password} // Valor do campo de entrada é ligado ao estado password
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Password" // Placeholder do campo de entrada
        />
        {error && <p>{error}</p>}
        <Button type="submit">Login</Button> {/* Botão que envia o formulário */}
        <GoogleAuth></GoogleAuth>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; // Exporta o componente Login como padrão
