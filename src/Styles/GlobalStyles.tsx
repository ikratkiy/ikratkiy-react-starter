import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #eee;
        color: #444;
        @media (prefers-color-scheme: dark) {
            background-color: #444;
            color: #eee;
        }
    }
`;
