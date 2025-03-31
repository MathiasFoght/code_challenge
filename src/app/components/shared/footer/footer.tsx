import Link from "next/link"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Section 1 */}
                    <div>
                        <h3 className={styles.heading}>About Us</h3>
                        <p className={styles.text}>Welcome to MovieUniverse, your go-to platform for movies and TV shows.</p>
                    </div>
                    {/* Section 2 */}
                    <div>
                        <h3 className={styles.heading}>Connect With Us</h3>
                        <p className={`${styles.text}`}>Stay updated with our social platforms</p>
                        <div className={styles.socialIcons}>
                            <Link href="https://www.google.dk/" className={styles.socialIcon}>
                                <FaFacebook />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://www.google.dk/" className={styles.socialIcon}>
                                <FaInstagram />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>© {new Date().getFullYear()} MovieUniverse</p>
                </div>
            </div>
        </footer>
    )
}

