import React from 'react';
import type { Preview } from '@storybook/react';
import '../app/styles/global.css';
import '!style-loader!css-loader!../app/styles/reset.css';
import cx from 'classnames';
import { notoSans, notoSansKR } from '../app/styles/fonts.ts';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: 'var(--background-color)' },
                { name: 'white', value: '#fff' },
            ],
        },
    },
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <div
                        className={cx(notoSans.className, notoSansKR.className)}
                    >
                        <Story />
                    </div>
                </RecoilRoot>
            </QueryClientProvider>
        ),
    ],
};

export default preview;
