import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #eee;
        --text: #444;

        @media (prefers-color-scheme: dark) {
            --background: #2d2c33;
            --text: #eee;
        }
    }

    body {
        background-color: var(--background);
        color: var(--text);
    }
`;
