import styled from 'styled-components';

const StyledButton = styled.button`
font-size: 1.5rem;
  background : red;
  color: white;
`;

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <StyledButton>styled btn</StyledButton>
    </div>

 );
};

export default Landing;