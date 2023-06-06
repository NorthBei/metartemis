import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import { ReactNode } from 'react';

import useScrollTo from '@/hooks/useScrollTo';

type ScrollTopProps = {
  children: ReactNode;
};

function ScrollTop(props: ScrollTopProps) {
  const { children } = props;

  const scrollTo = useScrollTo();

  // https://mui.com/material-ui/react-app-bar/#usescrolltrigger-options-trigger
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <Box
        onClick={() => scrollTo('#top')}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default ScrollTop;
