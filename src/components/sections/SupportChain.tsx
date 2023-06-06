import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-export-i18n';

import { SUPPORT_CHAIN_LIST } from '@/data/sections';
import Section from '@/layout/Section';

function SupportChain() {
  const { t } = useTranslation();

  return (
    <Section id="support_chain" title={t('support_chain_title')}>
      <Grid alignItems="center" justifyContent="center" container>
        {SUPPORT_CHAIN_LIST.map((chain) => {
          return (
            <Grid item key={chain.name} md={3} sm={4} xs={7} mb={5} px={4}>
              <img
                src={chain.logo.src}
                alt={chain.logo.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

export default SupportChain;
