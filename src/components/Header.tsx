import GTranslateIcon from '@mui/icons-material/GTranslate';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { LanguageSwitcher, useTranslation } from 'next-export-i18n';

import MENUS from '@/data/menus';
import useScrollTo from '@/hooks/useScrollTo';
import Container from '@/layout/Container';

type HeaderProps = {
  onOpenDrawer: () => void;
};

function Header(props: HeaderProps) {
  const { onOpenDrawer } = props;
  const { t } = useTranslation();

  const scrollTo = useScrollTo();

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar style={{ padding: 0 }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => scrollTo('#top')}
          >
            Metartemis
          </Typography>
          <Box flexGrow="1" />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {MENUS.map((item) => {
              return (
                <Button
                  key={item.id}
                  color="info"
                  variant="text"
                  onClick={() => scrollTo(item.id)}
                >
                  {t(item.i18nKey)}
                </Button>
              );
            })}
          </Box>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <IconButton
                  size="large"
                  aria-label="translate"
                  aria-controls="menu-appbar"
                  color="inherit"
                  {...bindTrigger(popupState)}
                >
                  <GTranslateIcon />
                </IconButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    <LanguageSwitcher lang="en">English</LanguageSwitcher>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <LanguageSwitcher lang="zh">繁體中文</LanguageSwitcher>
                  </MenuItem>
                </Menu>
              </>
            )}
          </PopupState>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={onOpenDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
