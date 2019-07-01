import styled from '@emotion/styled';
import DialogTitle from '@material-ui/core/DialogTitle';
import colors from '../../utils/styles/colors';
import { fontSize } from '../../utils/styles/sizes';

export const Title = styled(DialogTitle)`
  && {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: ${fontSize.lg};
  }
`;
