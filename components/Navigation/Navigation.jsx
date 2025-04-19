import { useRouter } from "next/router";
import {
  NavigationWrapper,
  NavigationLink,
} from "../StyledComponents/StyledComponents";

export default function Navigation() {
  const router = useRouter();
  const links = [
    { href: "/", label: "Spotlight" },
    { href: "/art-pieces", label: "Gallery" },
    { href: "/favorites", label: "Favorites" },
  ];
  const currentPage = router.pathname;

  return (
    <NavigationWrapper>
      {links.map((link) => {
        const isCurrentPage = currentPage === link.href;

        return (
          <NavigationLink
            key={link.href}
            href={link.href}
            isDisabled={isCurrentPage}
          >
            {link.label}
          </NavigationLink>
        );
      })}
    </NavigationWrapper>
  );
}
