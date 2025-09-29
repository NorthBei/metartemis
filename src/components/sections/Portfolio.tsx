import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-export-i18n';

import Section from '@/layout/Section';

type Item = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  links: {
    text: string;
    url: string;
  }[];
  tags: string[];
};

function Portfolio() {
  const { t } = useTranslation();

  return (
    <Section id="portfolio" title={t('portfolio_title')}>
      <Grid justifyContent="center" container>
        {t('portfolio_list').map((item: Item) => {
          return (
            <Grid
              item
              key={item.title}
              md={6}
              sm={10}
              xs={12}
              mb={5}
              px={{ xs: 0, sm: 3, md: 4 }}
            >
              <Stack>
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <Typography
                  variant="h6"
                  component="h4"
                  textAlign="center"
                  my={3}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" textAlign="left" gutterBottom>
                  {item.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                  my={2}
                  sx={{ width: '100%', flexWrap: 'wrap' }}
                  useFlexGap
                >
                  {item.tags.map((tag) => {
                    return <Chip key={tag} label={tag} variant="outlined" />;
                  })}
                </Stack>
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{ width: '100%' }}
                  useFlexGap
                >
                  {item.links.map((link) => {
                    return (
                      <Button
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </Button>
                    );
                  })}
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

export default Portfolio;
