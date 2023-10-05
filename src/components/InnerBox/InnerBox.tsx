import styles from './innerBox.module.css'

import Image from 'next/image'
import tick_image from '../../../public/icons/tick.png'
import people_img from '../../../public/images/Group_11.svg'

export default function InnerBox() {
    return (
        <div className={styles.inner_box}>
        <div className={styles.main_text}></div>
        <div className={styles.points_box}>
          <div className={styles.points_elem}>
            <Image
              width={27}
              height={27}
              src={tick_image}
              alt='tick_icon'
              className={styles.tick_icon}
            />
            <p className={styles.tick_list}>No hiring headaches</p>
          </div>
          <div className={styles.points_elem}>
            <Image
              width={27}
              height={27}
              src={tick_image}
              alt='tick_icon'
              className={styles.tick_icon}
            />
            <p className={styles.tick_list}>Weekly turnaround times</p>
          </div>
          <div className={styles.points_elem}>
            <Image
              width={27}
              height={27}
              src={tick_image}
              alt='tick_icon'
              className={styles.tick_icon}
            />
            <p className={styles.tick_list}>One flat monthly rate</p>
          </div>
        </div>
        <button className={styles.button_start}>start your risk free trial</button>
        <Image
              width={770}
              height={443}
              src={people_img}
              alt='tick_icon'
              className={styles.tick_icon}
            />
      </div>
    )
}