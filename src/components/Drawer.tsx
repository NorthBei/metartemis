import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-export-i18n';

import MENUS from '@/data/menus';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Drawer(props: DrawerProps) {
  const { isOpen, onClose } = props;
  const { t } = useTranslation();

  return (
    <MuiDrawer anchor="right" open={isOpen} onClose={onClose}>
      <Box
        role="presentation"
        minWidth={250}
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {MENUS.map((item) => {
            return (
              <ListItem key={item.id}>
                <ListItemButton component="a" href={item.id}>
                  <ListItemText primary={t(item.i18nKey)} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem>
            <Button
              color="primary"
              variant="contained"
              href="#contact_us"
              fullWidth
            >
              {t('fold_cta_button')}
            </Button>
          </ListItem>
        </List>
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
