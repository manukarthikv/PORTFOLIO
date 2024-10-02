import {Box, Text} from "@chakra-ui/react";
import {animateScroll as scroll} from "react-scroll";

import links from "../data/footerLinks";
import LinkIconBar from "./LinkIconBar";

export default function Footer() {
    return (
        <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
            <Text fontSize="sm" mt={2} onClick={scroll.scrollToTop}>
                <span role="img" aria-label="rocket">
                    &#128640;
                </span>{" "}
                Click me to scroll to the top!{" "}
                <span role="img" aria-label="rocket">
                    &#128640;
                </span>
            </Text>
            <LinkIconBar links={links} />
        </Box>
    );
}
