import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Link href="/" className={styles.logo}>
                    <Image src="/images/Berkelogox-Photoroom.jpg" alt="Logo" width={50} height={50} />
                </Link>
                <nav className={styles.navigationMenu}>
                    <Link href="/">Welcome</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/musics">Musics</Link>
                    <Link href="/about">About Us</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
