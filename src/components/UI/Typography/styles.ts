import styled, { css } from 'styled-components';
import { IStyledTypographyProps } from './types';

export const StyledContainer = styled.p<IStyledTypographyProps>`
  ${({ $color, $align }) => css`
    color: ${$color};
    text-align: ${$align};
  `}
`;
