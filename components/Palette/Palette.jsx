import { StyledCircle, PaletteWrapper } from "../StyledComponents/StyledComponents";

export default function Palette({ colors }) {
  return (
    <PaletteWrapper>
      {colors.map((color) => (
        <StyledCircle key={color} $backgroundColor={color} />
      ))}
    </PaletteWrapper>
  );
}
