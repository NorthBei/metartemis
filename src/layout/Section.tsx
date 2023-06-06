import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import Container from '@/layout/Container';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

function Section(props: SectionProps) {
  const { id, title, subtitle, children } = props;

  return (
    <section id={id}>
      <Container>
        <Box py={10}>
          <Typography
            variant="h4"
            component="h3"
            fontWeight="bold"
            textAlign="center"
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="h5" component="h3" textAlign="center" mt={3}>
              {subtitle}
            </Typography>
          )}
          <Box py={4}></Box>
          {children}
        </Box>
      </Container>
    </section>
  );
}

export default Section;
