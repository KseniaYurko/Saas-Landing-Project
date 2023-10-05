import Image from "next/image";

import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_box}>
                <div className={styles.logo}>
                {/* <Image
                    src={'../assets/fad_modrandom.svg'}
                    alt='logo'
                    className={styles.logo}
                /> */}
                </div>
                <div className={styles.navigation}>
                    <button>how it works</button>
                    <button>about</button>
                    <button>work</button>
                    <button>pricing</button>
                    <button>blog</button>
                </div>
                <div className={styles.get_started_button}>
                    <button>get started</button>
                </div>
            </div>
        </header>
    );
}