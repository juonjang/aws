"use client";


import { Container,Title,Divider,Text,Space} from "@mantine/core";


export default function AboutContent() {
  return (
    <Container size={'lg'}>
        <Title order={4}>About</Title>
        <Divider size={2}/>
        <Text fz={'sm'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maiores enim tempora aperiam eius repellendus ratione iusto nulla maxime veritatis. Asperiores perspiciatis nam nobis et quasi repellendus dolorum doloribus assumenda.
        </Text>
        <Space h={"md"}/>
    </Container>
  )
}
