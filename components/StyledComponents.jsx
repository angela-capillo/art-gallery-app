import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ArtPieceWrapper = styled.li`
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
  object-fit: contain;
`;

export const ArtPieceLabel = styled.p`
  max-width: 300px;
  font-size: 0.825rem;
  text-align: center;
`;