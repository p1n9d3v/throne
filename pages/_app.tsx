import ReactQueryWrapper from '@/context/ReactQueryWrapper';
import RecoilRootWrapper from '@/context/RecoilWrapper';
import RootLayout from '@/layouts/RootLayout';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
    getNestedLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getNestedLayout = Component.getNestedLayout ?? ((page) => page);

    return (
        <ReactQueryWrapper>
            <RecoilRootWrapper>
                <RootLayout>
                    {getNestedLayout(<Component {...pageProps} />)}
                </RootLayout>
            </RecoilRootWrapper>
        </ReactQueryWrapper>
    );
}
