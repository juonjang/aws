import { Container, Title, Text, Button } from '@mantine/core';
import classes from './AppHero.module.css';

export function AppHero() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              AWS{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                NB_HOSPITAL
              </Text>{' '}
              รายงานโรงพยาบาลหนองบัวลำภู
            </Title>

            <Text className={classes.description} mt={30}>
              แหล่งรวมข้อมูลต่างๆ ของโรงพยาบาลหนองบัวลำภู เช่น ข้อมูล OPD IPD REFER 
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}