import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import { useCallback, useState } from 'react';

import Drawer from '@/components/Drawer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollTop from '@/components/ScrollTop';
import ContactUs from '@/components/sections/ContactUs';
import Fold from '@/components/sections/Fold';
import Partnership from '@/components/sections/Partnership';
// import Portfolio from '@/components/sections/Portfolio';
import Service from '@/components/sections/Service';
import SupportChain from '@/components/sections/SupportChain';
import Team from '@/components/sections/Team';
import Yota from '@/components/sections/Yoda';

function Home() {
  const { t } = useTranslation();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setMenuOpen((isMenuOpen) => !isMenuOpen);
  }, []);

  return (
    <>
      <Head>
        <title>Metartemis | {t('web_subtitle')}</title>
      </Head>

      <div id="top"></div>
      <main>
        <Drawer isOpen={isMenuOpen} onClose={toggleDrawer} />
        <Header onOpenDrawer={toggleDrawer} />

        <Fold />
        <Service />
        <Divider />
        {/* ----- */}
        <SupportChain />
        <Divider />
        {/* ----- */}
        <Team />
        <Divider />
        {/* ----- */}
        <Yota />
        <Divider />
        {/* ----- */}
        {/* <Portfolio />
        <Divider /> */}
        {/* ----- */}
        <Partnership />
        <Divider />
        {/* ----- */}
        <ContactUs />
        <ScrollTop>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </main>
      <Footer />
    </>
  );
}

export default Home;
