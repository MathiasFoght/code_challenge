"use client";

import styles from "./loadMore.module.css";
import {LoadMoreButtonProps} from "@/types";

export default function LoadMoreButton({ onClick, loading }: LoadMoreButtonProps) {
    return (
        <button onClick={onClick} disabled={loading} className={styles.loadMoreButton}>
            {loading ? (
                <span className={styles.loadingText}>
                    <span className={styles.loadingSpinner}></span>
                    Loading...
                </span>
            ) : (
                "Load More"
            )}
        </button>
    );
}
