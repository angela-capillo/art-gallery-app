import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { NavigationWrapper, NavigationLink } from "./StyledComponents";

export default function Navigation() {
  const router = useRouter(); // this bc I want to render dynamically these links like in the lotr app
  const links = [
    { href: "/", label: "Spotlight" },
    { href: "/art-pieces", label: "Gallery" },
    { href: "#", label: "Favorites" },
  ];
  const currentPage = router.pathname;

  return (
    <NavigationWrapper>
      {/* <NavigationLink href="/">Spotlight</NavigationLink>
      <NavigationLink href="/art-pieces">Gallery</NavigationLink>
      <NavigationLink href="#">Favorites</NavigationLink> */}
      {links.map((link) => {
        const isCurrentPage = currentPage === link.href; // true when it matches
        console.log(currentPage);

        return (
          <NavigationLink
            key={link.href}
            href={link.href}
            isDisabled={isCurrentPage} // is disabled when true
          >
            {link.label}
          </NavigationLink>
        );
      })}
    </NavigationWrapper>
  );
}
