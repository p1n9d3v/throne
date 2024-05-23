import React from 'react';
import styles from './index.module.css';
import cx from 'classnames';

interface Props extends React.ComponentProps<'button'> {
    oauth: 'google';
}

function OAuthButton({ oauth, ...otherProps }: Props) {
    return (
        <button
            type="button"
            className={cx(styles.OAuthButton, {
                [styles.OAuthButton__Google]: oauth === 'google',
            })}
            {...otherProps}
        >
            <div className={styles.OAuthButton__Logo}>
                <img src="/google.svg" alt="google" />
            </div>
            <p className={styles.OAuthButton__Text}>login with google</p>
        </button>
    );
}

export default OAuthButton;
