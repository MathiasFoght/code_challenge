import React from 'react';
import styles from './notfound.module.css';
import dynamic from "next/dynamic";

const BackButton = dynamic(() => import('@/app/components/buttons/backButton'), {
    ssr: true,
});

export default function NotFound()  {
    return (
        <div className={styles.notFound}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.description}>Sorry, the page you are looking for does not exist.</p>
            <BackButton />
        </div>
    );
};

