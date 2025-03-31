"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Film, Menu, User, X } from 'lucide-react'
import styles from "./navbar.module.css"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Check if the user is on mobile
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileMenuOpen])

    return (
        <div>
            <header className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    {/* Burger menu */}
                    <button
                        className={`${styles.menuButton} ${styles.hiddenMd}`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className={styles.menuIcon} />
                        <span className={styles.srOnly}>Toggle menu</span>
                    </button>

                    {/* Logo */}
                    <Link href="/" className={styles.logoLink}>
                        <Film className={styles.logoIcon} />
                        <span className={styles.logoText}>MovieUniverse</span>
                    </Link>

                    {/* Desktop navigation */}
                    <nav className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>
                        <Link href="/wishlist" className={styles.navLink}>
                            Wishlist
                        </Link>
                    </nav>

                    <div className={styles.actions}>
                        {/* Account button */}
                        <button className={styles.iconButton}>
                            <User className={styles.icon} />
                            <span className={styles.srOnly}>Account</span>
                        </button>
                    </div>
                </div>
            </header>


            {/* Mobile navigation when mobile menu is open */}
            {mobileMenuOpen ? (
                <>
                    {/* Mobile overlay */}
                    <div
                        className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.open : ""}`}
                        /* Close menu when clicking outside */
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Mobile menu */}
                    <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
                        <div className={styles.mobileMenuHeader}>
                            {/* Logo */}
                            <Link
                                href="/"
                                className={styles.sheetLogo}
                            >
                                <Film className={styles.logoIcon} />
                                <span>MovieUniverse</span>
                            </Link>

                            {/* Close button */}
                            <button
                                className={styles.mobileMenuClose}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className={styles.icon} />
                            </button>
                        </div>

                        {/* Mobile navigation links */}
                        <nav className={styles.mobileNav}>
                            <Link
                                href="/"
                                className={styles.mobileLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/wishlist"
                                className={styles.mobileLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Wishlist
                            </Link>
                        </nav>
                    </div>
                </>
            ) : null}
        </div>
    )
}
