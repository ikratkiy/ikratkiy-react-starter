import type { FC } from 'react';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import StartPage from './Pages/StartPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import { GlobalStyle } from './Styles/GlobalStyles';

const App: FC = () => {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<StartPage />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default observer(App);
