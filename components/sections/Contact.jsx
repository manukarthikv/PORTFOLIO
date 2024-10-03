import {Flex, Text} from "@chakra-ui/react";
import {Grid} from "@material-ui/core";
import React from "react";

import SectionContainer from "../SectionContainer";

export default function Contact() {
    return (
        <SectionContainer
            id="contact"
            name="contact"
            headerText="Contact Me"
            useHeaderStyle
        >
            <Flex
                as={Grid}
                container
                item
                xs={9}
                sm={6}
                justify="center"
                textAlign="center"
                pl={4}
                pr={4}
            >
                <Text fontSize="xl" m="auto" mt={6}>
                    Whether it&apos;s a job opportunity, an invite to coffee,
                </Text>
                <Text fontSize="xl" m="auto">
                    or feedback on my portfolio, my inbox is open!
                </Text>
                <Text fontSize="xl" m="auto" mt={6}>
                    Contact me at: 9845655499
                </Text>
            </Flex>
        </SectionContainer>
    );
}
