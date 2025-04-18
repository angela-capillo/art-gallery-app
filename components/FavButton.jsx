import { StyledButton } from "./StyledComponents";
import Image from "next/image";

export default function FavButton({ isFavorite }) {
    return (
        <StyledButton type="button" aria-label="Favorite">
            <Image src={isFavorite ? "/assets/fav_filled.svg" : "/assets/fav_empty.svg"}
            width={24}
            height={24}
            alt="Favorite"/>
        </StyledButton>
    );
}