import React from 'react';
import './App.css';
import styled from 'styled-components';

const ColorComponent = styled.p`
  color: red;
  font-size: 50px;
`;

function App() {
  return (
    <div className="App">
      <ColorComponent>Welcome to Movies Minds</ColorComponent>
    </div>
  );
}

export default App;
