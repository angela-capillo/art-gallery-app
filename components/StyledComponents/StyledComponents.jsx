import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ArtPieceWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #000;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    box-shadow: 0px 1px 1px rgba(18, 18, 18, 0.08),
      0px 5px 4px rgba(18, 18, 18, 0.08), 0px 12px 9px rgba(18, 18, 18, 0.08),
      0px 20px 15px rgba(18, 18, 18, 0.08), 0px 32px 24px rgba(18, 18, 18, 0.08);
  }
`;

export const ArtPieceLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const ArtPieceImage = styled(Image)`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  object-fit: contain;
`;

export const ArtPieceLabel = styled.p`
  max-width: 300px;
  font-size: 0.825rem;
  text-align: center;
`;

export const NavigationWrapper = styled.div`
  position: fixed;
  justify-content: center;
  bottom: 0;
  width: 420px;
  height: 60px;
  padding: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #bbb;
  z-index: 10;
`;

export const NavigationLink = styled(Link)`
  border-radius: 16px;
  border: 1px solid #000;
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  text-decoration: none;
  padding: 10px 20px;
  text-align: center;
  display: block;
  background-color: #f4f4f4;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:active {
    background-color: #333;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
    color: #777;
    background-color: #ccc;
    pointer-events: none;
  `}
`;

export const StyledButton = styled.button`
  position: absolute;
  right: 4px;
  top: 4px;
  border-radius: 8px;
  padding: 8px 8px 5px 8px;
  margin: 8px;
  background-color: #fafafa;
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ffeeee;
  }
`;

export const ArtPieceDetailWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  padding: 10px;
`;

export const ArtPieceList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 16px;
  max-width: 360px;
`;

export const DetailTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  max-width: 320px;
  margin: 1rem 0 0.5rem;
  color: #222;
  text-align: center;
`;

export const DetailAuthor = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  margin: 0 0 0.5rem;
  text-align: center;
`;

export const DetailGenre = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  color: #888;
  margin: 0 0 0.25rem;
  text-align: center;
  font-style: italic;
`;

export const DetailYear = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin: 0 0 1rem;
  text-align: center;
`;

export const PageContainer = styled.div`
  height: 100vh;
  width: 420px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 100px;
  overflow-y: auto;
`;

export const StyledCircle = styled.div`
  border-radius: 50%;
  border: 1px solid #000;
  background-color: ${(props) => props.$backgroundColor};
  margin-top: 24px;
  height: 32px;
  width: 32px;
`;

export const PaletteWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;
