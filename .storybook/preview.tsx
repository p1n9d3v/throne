import React from 'react';
import type { Preview } from '@storybook/react';
import '../app/styles/global.css';
import '!style-loader!css-loader!../app/styles/reset.css';
import cx from 'classnames';
import { notoSans, notoSansKR } from '../app/styles/fonts.ts';
import { RecoilRoot } from 'recoil';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <RecoilRoot>
                <div className={cx(notoSans.className, notoSansKR.className)}>
                    <Story />
                </div>
            </RecoilRoot>
        ),
    ],
};

export default preview;
