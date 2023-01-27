import React from 'react';
import { observer } from 'mobx-react-lite';

function NotFound() {
    return (
        <>
            <h1>По этому адресу страницы ничего нет!</h1>
        </>
    );
}

export default observer(NotFound);
