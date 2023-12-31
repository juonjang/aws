"use client";

import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Container,
  } from '@mantine/core';
  import { MantineLogo } from '@mantine/ds';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './AppHeader.module.css';
  import {FaHospital} from "react-icons/fa6"
  import { usePathname } from 'next/navigation';
import Link from 'next/link';
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];
  
  export function AppHeader() {
    const pathname = usePathname();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
       <Container size={'xl'}>
            <Box pb={7}>
                <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <FaHospital size={50}  /> <h1> AWS NB-HOSPITAL</h1> 
        
                    <Group h="100%" gap={0} visibleFrom="sm">
                    <Link href="/." className={pathname == "/" ? classes.active:classes.link}>
                        <h3>Home</h3>
                    </Link>
                    {/* <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                        <HoverCard.Target>
                        <a href="#" className={classes.link}>
                            <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                            </Center>
                        </a>
                        </HoverCard.Target>
        
                        <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                        <Group justify="space-between" px="md">
                            <Text fw={500}>Features</Text>
                            <Anchor href="#" fz="xs">
                            View all
                            </Anchor>
                        </Group>
        
                        <Divider my="sm" />
        
                        <SimpleGrid cols={2} spacing={0}>
                            {links}
                        </SimpleGrid>
        
                        <div className={classes.dropdownFooter}>
                            <Group justify="space-between">
                            <div>
                                <Text fw={500} fz="sm">
                                Get started
                                </Text>
                                <Text size="xs" c="dimmed">
                                Their food sources have decreased, and their numbers
                                </Text>
                            </div>
                            <Button variant="default">Get started</Button>
                            </Group>
                        </div>
                        </HoverCard.Dropdown>
                    </HoverCard> */}
                    <Link
                      prefetch={false}
                     href="../dashboard" className={pathname == "/dashboard" ? classes.active:classes.link}>
                        <h3>Dashboard</h3>
                    </Link>
                    <Link
                    prefetch={false}
                     href="../about" className={pathname == "/about" ? classes.active:classes.link}>
                        <h3>About</h3>
                    </Link>
                    <Link 
                    prefetch={false}
                    href="../newsType" className={pathname == "/newsType" ? classes.active:classes.link}>
                        <h3>NewsType</h3>
                    </Link>
                    </Group>
        
                    <Group visibleFrom="sm">
                    <Button variant="default">Log in</Button>
                    <Button>Sign up</Button>
                    </Group>
        
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
                </header>
        
                <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
                >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />
        
                    <a href="#" className={classes.link}>
                    Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                    <Center inline>
                        <Box component="span" mr={5}>
                        Features
                        </Box>
                        <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                        />
                    </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                    Learn
                    </a>
                    <a href="#" className={classes.link}>
                    Academy
                    </a>
        
                    <Divider my="sm" />
        
                    <Group justify="center" grow pb="xl" px="md">
                    <Button variant="default">Log in</Button>
                    <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
                </Drawer>
            </Box>
        </Container> 
    );
  }
  