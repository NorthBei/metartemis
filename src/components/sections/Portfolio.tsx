import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-export-i18n';

import Section from '@/layout/Section';

const Customer_List = [
  {
    image: {
      src: '/images/portfolio/DigiAsia2022.png',
      alt: 'DigiAsia 2022 數位亞洲大會',
    },
    title: 'DigiAsia 2022 數位亞洲大會',
    subtitle: 'Digiasia 2022',
    description:
      '今年DigiAsia大會打出「Web3 Rhapsody 狂想曲」作為主題，至於NFT的設計與發行則由同為網頁設計的新創團隊Metartemis操刀，共計有1,080款的變化將針對與會者進行空投紀念NFT，讓與會者也能透過擁有NFT、體驗其中的過程成為今年展會生態系的一份子。',
    links: [
      {
        text: '官方網站',
        url: 'http://digiasia.org.tw/2022/',
      },
      {
        text: '媒體報導',
        url: 'https://www.bnext.com.tw/article/72920/dnft',
      },
    ],
    tags: ['NFT顧問服務', 'NFT設計與創作', 'NFT開發/鑄造與販售'],
  },
  {
    image: {
      src: '/images/portfolio/ZombieClub.jpg',
      alt: 'Zombie Club 3D NFT',
    },
    title: 'Zombie Club',
    subtitle: 'Zombie Club 3D NFT Lanch',
    description: '打造3D NFT Lanch Site',
    links: [
      {
        text: '官方網站',
        url: 'https://zombieclub.io/',
      },
      {
        text: '媒體報導',
        url: 'https://www.bnext.com.tw/article/72920/dnft',
      },
    ],
    tags: ['NFT顧問服務', 'NFT開發/鑄造與販售'],
  },
];

function Portfolio() {
  const { t } = useTranslation();

  return (
    <Section id="support_chain" title="案例分享">
      <Grid justifyContent="center" container>
        {Customer_List.map((customer) => {
          return (
            <Grid
              item
              key={customer.title}
              md={6}
              sm={10}
              xs={12}
              mb={5}
              px={{ xs: 0, sm: 3, md: 4 }}
            >
              <Stack>
                <img
                  src={customer.image.src}
                  alt={customer.image.alt}
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
                  {customer.title}
                </Typography>
                <Typography variant="body1" textAlign="left" gutterBottom>
                  {customer.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                  my={2}
                  sx={{ width: '100%', flexWrap: 'wrap' }}
                  useFlexGap
                >
                  {customer.tags.map((tag) => {
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
                  {customer.links.map((link) => {
                    return (
                      <Button key={link.url} href={link.url}>
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
