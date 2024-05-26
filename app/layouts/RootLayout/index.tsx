import React from 'react';
import Header from '../Header';
import ModalProvider from '@/components/Modal/provider';
import '@/styles/global.css';
import { notoSans, notoSansKR } from '@/styles/fonts';
import cx from 'classnames';

function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <div id="next" className={cx(notoSans.className, notoSansKR.className)}>
            <Header />
            <main>{children}</main>
            <ModalProvider />
        </div>
    );
}

export default RootLayout;
