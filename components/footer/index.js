import React from "react";
import Link from "next/link";
import styles from './styles.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            Created by&nbsp;
            <Link href="https://www.linkedin.com/in/berke-kuzeyli" passHref>
                <div className={styles.footerLink}>Berke</div>
            </Link>
        </footer>
    );
}

export default Footer;
