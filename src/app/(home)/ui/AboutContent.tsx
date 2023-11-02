"use client";


import { Container,Title,Divider,Text,Space} from "@mantine/core";


export default function AboutContent({data}:any) {
  return (
    <Container size={'lg'}>
        <Title order={4}>About</Title>
        <Divider size={2}/>
        <Text fz={'sm'}>
            { JSON.stringify(data) }
        </Text>
        <Space h={"md"}/>
    </Container>
  )
}
