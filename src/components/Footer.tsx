import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <footer>
      <Divider />
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        paddingY="2rem"
      >
        <span>© 2022 Metartemis, all rights reserved</span>
        <Box
          component="span"
          display={{ xs: 'none', md: 'inline-block' }}
          mx={1}
        >
          |
        </Box>
        <span>@Metaverse #WAGMI #ToTheMoon♡</span>
      </Box>
    </footer>
  );
}

export default Footer;
