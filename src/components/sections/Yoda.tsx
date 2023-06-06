import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-export-i18n';

import Section from '@/layout/Section';

function Yota() {
  const { t } = useTranslation();

  return (
    <Section id="yoda" title={t('yoda_title')}>
      <Grid justifyContent="center" container>
        <Grid item xs={12} mb={5}>
          <Box display="flex" flexDirection="column" alignItems="center" px={5}>
            <Avatar
              sx={{ width: 128, height: 128 }}
              src="/images/Prof.WAGMI.jpg"
              alt="Prof.WAGMI's NFT"
            />
            <Typography variant="h6" component="h4" my={3}>
              Prof.WAGMI
            </Typography>
            <Typography variant="body1" textAlign="center" gutterBottom>
              Web2/VC OG, Web3 Sr.Rookie <br />
              Crypto Startup Investor
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Yota;
