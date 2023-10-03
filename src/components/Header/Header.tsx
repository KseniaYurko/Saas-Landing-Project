import Image from "next/image";

import Styles from "./header.module.css"

export default function Header() {
    return (
        <header className={Styles.header}>
            <div className={Styles.header_box}>
                <div className={Styles.logo}>
                    <p>logo</p>
                </div>
                <div className={Styles.navigation}>
                    <button>how it works</button>
                    <button>about</button>
                    <button>work</button>
                    <button>pricing</button>
                    <button>blog</button>
                </div>
                <div className={Styles.get_started_button}>
                    <button>get started</button>
                </div>
            </div>
        </header>
    );
}