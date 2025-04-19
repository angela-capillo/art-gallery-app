import styled from "styled-components";

const StyledCircle = styled.div`
  border-radius: 50%;
  border: 1px solid #000;
  background-color: ${(props) => props.$backgroundColor};
  margin-top: 24px;
  height: 32px;
  width: 32px;
`;

const PaletteWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

export default function Palette({ colors }) {

//console.log("col", colors); 

  return (
    <PaletteWrapper>
      {colors.map((color) => (
        <StyledCircle key={color} $backgroundColor={color} />
      ))}
    </PaletteWrapper>
  );
}
