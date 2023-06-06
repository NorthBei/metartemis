import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-export-i18n';

import Section from '@/layout/Section';

function Partnership() {
  const { t } = useTranslation();

  return (
    <Section id="partnership" title={t('partnership_title')}>
      <Grid justifyContent="center" container>
        <Grid item md={3} sm={4} xs={7} mb={5} px={4}>
          <img
            src="/images/cacaFly.png"
            alt="cacaFly"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Section>
  );
}

export default Partnership;
