import Image from 'next/image'

import styles from './sponsorsBox.module.css'
import sponsor1_img from '../../../public/images/SponsorsBox/sponsor1_img.svg'
import sponsor2_img from '../../../public/images/SponsorsBox/sponsor2_img.svg'
import sponsor3_img from '../../../public/images/SponsorsBox/sponsor3_img.svg'
import sponsor4_img from '../../../public/images/SponsorsBox/sponsor4_img.svg'

export default function SponsorsBox() {
    return (
        <div className={styles.container}>
            <p className={styles.heading}>We helped our customers raise $1B+</p>
            <div className={styles.sponsors}>
                <Image
                    width={250}
                    height={100}
                    src={sponsor1_img}
                    alt='sponsor_img'
                    className={styles.tick_icon}
                />
                <div>line</div>
                <Image
                    width={250}
                    height={100}
                    src={sponsor2_img}
                    alt='sponsor_img'
                    className={styles.tick_icon}
                />
                <div>line</div>
                <Image
                    width={250}
                    height={100}
                    src={sponsor3_img}
                    alt='sponsor_img'
                    className={styles.tick_icon}
                />
                <div>line</div>
                <Image
                    width={250}
                    height={100}
                    src={sponsor4_img}
                    alt='sponsor_img'
                    className={styles.tick_icon}
                />
            </div>
        </div>
    )
}