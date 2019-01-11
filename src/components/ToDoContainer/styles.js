import styled from "styled-components";
import { Flex } from "grid-styled";

export const Text = styled(Flex)`
  color: ${({ theme }) => theme.colors.mainBackground};
  font-size: 5em;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
`;

export const Container = styled(Flex)`
  background-color: orchid;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`

`