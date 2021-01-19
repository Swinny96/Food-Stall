import React, { useReducer } from "react";

import styled from "styled-components";

const products = [
  {
    emoji: "🍦",
    name: "Ice Cream",
    price: 3,
  },
  {
    emoji: "🍩",
    name: "Donuts",
    price: 1.5,
  },
  {
    emoji: "🍉",
    name: "Watermelon",
    price: 1,
  },
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
}

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item) => item.name === action.product.name
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    setCart({ product, type: "add" });
  }

  function remove(product) {
    setCart({ product, type: "remove" });
  }

  return (
    <Wrapper>
      <Heading>
        <Cart>
          Shopping Cart: <MyTotal>{cart.length}</MyTotal> total items.
        </Cart>
        <Total>
          Total: <MyTotal>£{getTotal(cart)}</MyTotal>
        </Total>
      </Heading>
      <Container>
        {products.map((product) => (
          <FoodProduct key={product.name}>
            <FoodTitle>{product.name}</FoodTitle>
            <Food>
              <FoodItem role="img" aria-label={product.name}>
                {product.emoji}
              </FoodItem>
            </Food>
            <ButtonContainer>
              <Button onClick={() => add(product)}>+</Button>
              <Button onClick={() => remove(product)}>-</Button>
            </ButtonContainer>
          </FoodProduct>
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px 0px;
  font-size: 20px;
`;
const Heading = styled.div`
  margin-bottom: 8px;
`;
const Cart = styled.div``;
const Total = styled.div``;
const MyTotal = styled.strong``;
const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: none;
  }
`;
const FoodProduct = styled.div`
  border: 4px solid gray;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
`;
const FoodTitle = styled.strong``;
const Food = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;
const FoodItem = styled.span`
  font-size: 100px;
`;
const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto;
  gap: 10px;
`;
const Button = styled.button`
  border-radius: 8px;
  background: gray;
  color: white;
  border: 4px solid;
  border-color: gray;
  font-size: 24px;
  font-weight: 600;
  height: 40px;
  transition: 0.6s;
  cursor: pointer;

  :hover {
    background: white;
    color: gray;
  }
`;
