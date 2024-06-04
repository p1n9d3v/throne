import React from 'react';
import styles from './index.module.css';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Button from '../ui/Button';

interface Props {}

const SIGN: {
    [key: number]: React.ReactNode;
} = {
    0: <SignIn />,
    1: <SignUp />,
};

function Sign() {
    const [tab, setTab] = React.useState(0);

    return (
        <div className={styles.Sign}>
            <h1 className={styles.Sign__title}>
                {tab ? '회원가입' : '로그인'}
            </h1>
            {SIGN[tab]}
            <div className={styles.Sign__navigator}>
                <Button
                    variant="text"
                    type="button"
                    onClick={() => setTab(0)}
                    style={{
                        color: 'var(--blue-400)',
                    }}
                >
                    로그인
                </Button>
                <Button
                    variant="text"
                    type="button"
                    onClick={() => setTab(1)}
                    style={{
                        color: 'var(--blue-400)',
                    }}
                >
                    회원가입
                </Button>
            </div>
        </div>
    );
}

export default Sign;
