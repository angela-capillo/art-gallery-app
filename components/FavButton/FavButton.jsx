import { StyledButton } from "../StyledComponents/StyledComponents";
import Image from "next/image";

export default function FavButton({ slug, favorites = [], onToggleFavorite }) {
  const isFavorite = favorites.includes(slug);
  return (
    <StyledButton
      type="button"
      aria-label="Favorite"
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      <Image
        src={isFavorite ? "/assets/fav_filled.svg" : "/assets/fav_empty.svg"}
        width={24}
        height={24}
        alt="Favorite"
      />
    </StyledButton>
  );
}
