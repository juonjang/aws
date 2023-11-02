"use client";

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger } from '@mantine/core';
// import { _logo} from './_logo'
import { MainLinks } from "./_mainLinks";
// import { User } from "./_user";
import { useRouter } from "next/navigation";

export default function DLayout({ children }: { children: React.ReactNode }) {

  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>
        <h2>    AWS NB-HOSPITAL  </h2>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md">
      <MainLinks/>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
      
    </AppShell>
  );
}