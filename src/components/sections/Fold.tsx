import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-export-i18n';

import useScrollTo from '@/hooks/useScrollTo';
import Container from '@/layout/Container';

function Fold() {
  const { t } = useTranslation();
  const scrollTo = useScrollTo();

  return (
    <section
      id="fold"
      className="background-gradient"
      style={{ height: '95vh', width: '100%', overflow: 'hidden' }}
    >
      <Container style={{ height: '100%' }}>
        <Stack alignItems="center" height="100%">
          <Box color="white" flex="0" pt={5} textAlign="center">
            <Typography variant="h5" component="h1">
              {t('fold_title')}
            </Typography>
            <Typography variant="h6" component="h2" my={3}>
              {t('fold_subtitle')}
            </Typography>
            <Button
              color="info"
              variant="contained"
              onClick={() => scrollTo('#contact_us')}
            >
              {t('fold_cta_button')}
            </Button>
          </Box>
          <Box flex="1 0 auto" height="400px">
            <img
              src="/images/rocket.svg"
              alt="Your NFT Rocket"
              style={{
                height: '100%',
                marginTop: '4%',
              }}
            />
          </Box>
        </Stack>
      </Container>
    </section>
  );
}

export default Fold;
