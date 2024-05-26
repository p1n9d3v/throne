import ReactQueryWrapper from '@/context/ReactQueryWrapper';
import RecoilRootWrapper from '@/context/RecoilWrapper';
import RootLayout from '@/layouts/RootLayout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ReactQueryWrapper>
            <RecoilRootWrapper>
                <RootLayout>
                    <Component {...pageProps} />;
                </RootLayout>
            </RecoilRootWrapper>
        </ReactQueryWrapper>
    );
}
