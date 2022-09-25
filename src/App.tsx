import { useState } from "react";
import styled from "styled-components";
import Button from "./Atoms/Button";
import Main from "./Pages/main";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppWrapper>
      <span>hello</span>
      <Main />
    </AppWrapper>
  );
}

export default App;
