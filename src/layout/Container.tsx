import { ContainerProps as MuiContainerProps } from '@mui/material';
import MuiContainer from '@mui/material/Container';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
} & MuiContainerProps;

function Container(props: ContainerProps) {
  const { children, ...containerProps } = props;
  return (
    <MuiContainer maxWidth="lg" {...containerProps}>
      {children}
    </MuiContainer>
  );
}

export default Container;
