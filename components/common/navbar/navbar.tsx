import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/button/button";
import ThemeButton from "@/components/common/themeButton/themeButton";

import styles from "@/components/common/navbar/navbar.styles";

const Navbar = () => (
    <section className={styles.root}>
        <div className={styles.w40}>
            <Link href="/">
                <Image src="/assets/images/logo.svg" alt="logo" width="165" height="43" />
            </Link>
        </div>
        <div className={styles.buttonContainer}>
            <Button text="Login" textColor="white" />
            <ThemeButton text="Contact Us" />
        </div>
    </section>
);

export default memo(Navbar);
