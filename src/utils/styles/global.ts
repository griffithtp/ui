// import { injectGlobal } from 'emotion';
import { fontSize, fontWeight } from './sizes';
// import { Global, css } from '@emotion/core';

export default `
    html,
    body {
        height: 100%;
    }

    body {
        font-size: ${fontSize.base};
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    strong {
        font-weight: ${fontWeight.semiBold};
    }
`;
