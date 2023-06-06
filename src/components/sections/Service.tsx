import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-export-i18n';

import { SERVICES } from '@/data/sections';
import Section from '@/layout/Section';

function Service() {
  const { t } = useTranslation();

  return (
    <Section id="service" title={t('service_title')}>
      <Grid justifyContent="center" container>
        {SERVICES.map((service) => {
          return (
            <Grid item key={service.title.i18nKey} lg={4} md={6} xs={12} mb={5}>
              <Stack alignItems="center" px={5}>
                <Avatar
                  src={service.avatar.src}
                  alt={service.avatar.alt}
                  className="background-gradient"
                  sx={{ width: 80, height: 80, p: '16px' }}
                />
                <Typography variant="h6" component="h4" my={3}>
                  {t(service.title.i18nKey)}
                </Typography>
                <Typography variant="body1" textAlign="center" maxWidth="400px">
                  {t(service.description.i18nKey)}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

export default Service;
