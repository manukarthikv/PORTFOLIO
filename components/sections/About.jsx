import {
    GridItem,
    Image,
    Link,
    SimpleGrid,
    Text,
    useBreakpointValue,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React from "react";

import {colors} from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({secondary}) => (
    <GridItem>
        <VStack m="auto" w="75%" spacing="12px" pt="5%">
            <Text>
                Hi, I&apos;m Manu Karthik! I&apos;m a recent Computer Science graduate
                from the Global Academy of Technology, Bengaluru, with hands-on
                experience in web development and machine learning. I&apos;m currently
                focused on building my technical skills and solving IT challenges.
            </Text>
            <Text>
                During my internship at{" "}
                <Link href="https://technoflysolutions.com/" isExternal>
                    Technofly Solutions
                </Link>{" "}
                as a <strong style={{color: secondary}}>Machine Learning Intern</strong>,
                I researched image processing algorithms and worked on a speech recognition project.
                I&apos;ve also gained web development experience as an intern at{" "}
                <Link href="https://techciti.in/" isExternal>
                    TechCiti Software Consulting
                </Link>,
                where I enhanced features for the{" "}
                <strong style={{color: secondary}}>MERN Estate Website</strong> and improved user engagement through data-driven solutions.
            </Text>
            <Text>
                I am skilled in Python, SQL, Java, React, MongoDB, and Firebase, with a passion
                for creating real-world impactful solutions. Recently, I&apos;ve been working on projects
                like knee osteoarthritis detection using deep learning and a university management system to
                automate administrative tasks.
            </Text>
            <Text>
                Outside of work, I serve as the{" "}
                <strong style={{color: secondary}}>Vice President of Education</strong>
                at the Nagarabhavi Toastmasters Club, where I organize meetings and have won multiple public speaking contests.
            </Text>
        </VStack>
    </GridItem>
);

const Headshot = () => (
    <GridItem>
        <Image
            m="auto"
            src="/me.jpg"
            alt="Manu Karthik"
            zIndex={1}
            className="image"
            onClick={() => {
                window.open("http://linkedin.com/in/manu-karthik-v");
            }}
        />
    </GridItem>
);

export default function About() {
    const shouldAlternate = useBreakpointValue({base: false, md: true});
    const secondary = useColorModeValue(
        colors.secondary.light,
        colors.secondary.dark
    );
    return (
        <SectionContainer
            id="about"
            name="about"
            headerMt="-5%"
            headerText="About Me"
            useHeaderStyle
        >
            <SimpleGrid
                pl="10%"
                pt="5%"
                pr="10%"
                spacing={12}
                columns={[1, null, 2]}
                justifyContent="center"
            >
                {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
                {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
            </SimpleGrid>
        </SectionContainer>
    );
}
