const Bio = ({ secondary }) => (
    <GridItem>
        <VStack m="auto" w="75%" spacing="12px" pt="5%">
            <Text fontSize="2xl" fontWeight="bold">
                Hello, I&apos;m Manu Karthik!
            </Text>
            <Text fontSize="lg">
                A passionate problem-solver with expertise in Python, SQL, Java, React, MongoDB, and Firebase.
            </Text>
            <Text>
                I recently graduated with a degree in Computer Science from the Global Academy of Technology, Bengaluru. With hands-on experience in web development and machine learning, I'm dedicated to building innovative solutions that make a difference.
            </Text>
            <Text>
                During my internship at{" "}
                <Link href="https://technoflysolutions.com/" isExternal>
                    Technofly Solutions
                </Link>{" "}
                as a <strong style={{ color: secondary }}>Machine Learning Intern</strong>, I explored image processing algorithms and contributed to a speech recognition project. Additionally, my role at{" "}
                <Link href="https://techciti.in/" isExternal>
                    TechCiti Software Consulting
                </Link>{" "}
                allowed me to enhance the{" "}
                <strong style={{ color: secondary }}>MERN Estate Website</strong>, where I focused on improving user engagement through data-driven solutions.
            </Text>
            <Text>
                Recently, I've been working on projects like knee osteoarthritis detection using deep learning and developing a university management system to streamline administrative tasks.
            </Text>
            <Text>
                Outside of my technical endeavors, I proudly serve as the{" "}
                <strong style={{ color: secondary }}>Vice President of Education</strong>{" "}
                at the Nagarabhavi Toastmasters Club, where I organize meetings and have been recognized in multiple public speaking contests.
            </Text>
        </VStack>
    </GridItem>
);
