import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-export-i18n';

import { TEAM_LIST } from '@/data/sections';
import Section from '@/layout/Section';

function Team() {
  const { t } = useTranslation();

  return (
    <Section id="team" title={t('team_title')}>
      <Grid justifyContent="center" container>
        {TEAM_LIST.map((member) => {
          return (
            <Grid item key={member.name} lg={3} md={4} sm={6} xs={12} mb={5}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                px={5}
              >
                <Avatar
                  src={member.avatar.src}
                  alt={member.avatar.alt}
                  sx={{ width: 128, height: 128 }}
                />
                <Typography
                  variant="h6"
                  component="h4"
                  fontWeight="bold"
                  my={3}
                >
                  {member.name}
                </Typography>
                <Typography variant="body1" textAlign="center" gutterBottom>
                  {t(member.intro.position.i18nKey)} <br />
                  {t(member.intro.description.i18nKey)}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

export default Team;
