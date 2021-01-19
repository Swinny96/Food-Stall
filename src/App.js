import "./App.css";
import styled from "styled-components";
import Product from "./components/Product";

function App() {
  return (
    <Wrapper>
      <Header>
        <Heading>Welcome to My Shop</Heading>
        <Text>Choose what you would like to buy</Text>
      </Header>
      <Main>
        <Product />
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 20px;
`;

const Header = styled.header``;
const Heading = styled.h1`
  font-size: 32px;
`;
const Text = styled.p`
  font-size: 24px;
`;
const Main = styled.main``;
