import { desktopQuery } from 'Common/styles/breakpoints';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const PComponent = styled.p`
  margin: 1.5rem 0;
  font-size: 1.05rem;

  ${desktopQuery} {
    font-size: 1.3rem;
  }
`;

interface IProps {
  children?: ReactNode;
}

const CustomP: FC<IProps> = ({ children }) => {
  return <PComponent>{children}</PComponent>;
};

export default CustomP;
