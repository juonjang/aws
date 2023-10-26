
"use client"
import { Button, Title } from '@mantine/core';
import { AppHero } from './AppHero';
import { AppFeatures } from './AppFeatures';

export default function HomePage() {
  return (
    <div>
        <AppHero/>
        <AppFeatures/>
    </div>
  )
}
