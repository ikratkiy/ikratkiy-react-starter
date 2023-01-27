import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function StartPage() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <>
            <Container>
                <h1>Welcome to Ikratkiy React Starter!</h1>
                <h3>You current color scheme: {isDark ? 'dark.' : 'not dark.'}</h3>
            </Container>
        </>
    );
}

export default observer(StartPage);
