'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './backButton.module.css';
import {ArrowLeft} from "lucide-react";

export default function BackButton() {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <button className={styles.backButton} onClick={handleBackClick}>
            <ArrowLeft className={styles.backIcon} size={18} />
            Back
        </button>
    );
};

