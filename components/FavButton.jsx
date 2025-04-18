import { StyledButton } from "./StyledComponents";
import Image from "next/image";

export default function FavButton({ slug, favorites, onToggleFavorite }) {
    
    console.log(favorites);
    const isFavorite = favorites.includes(slug); // we improve the favorite thing just using one simple variable that depends on the favorite state variable so it's not messy af


    return (
        <StyledButton type="button" aria-label="Favorite" onClick={() => {onToggleFavorite(slug)}}>
            <Image src={isFavorite ? "/assets/fav_filled.svg" : "/assets/fav_empty.svg"}
            width={24}
            height={24}
            alt="Favorite"/>
        </StyledButton>
    );
}