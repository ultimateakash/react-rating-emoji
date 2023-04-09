import React from 'react'
import styles from './styles.module.css'

/**
 * @param {Object} args
 * @param {Number} args.rating
 * @param {Function} args.onClick
 * @param {String} [args.className]
 */
export const RatingComponent = ({ rating, onClick, className }) => {
  return (
    <React.Fragment>
      <ul className={`${styles.feedback} ${className || ''}`}>
        <li className={`${styles.angry} ${rating == 1 ? styles.active : ''}`} onClick={() => onClick(1)}>
          <div>
            <svg className={styles.eye}>
              <use xlinkHref={`#${styles.eye}`} />
            </svg>
            <svg className={`${styles.eye} ${styles.right}`}>
              <use xlinkHref={`#${styles.eye}`} />
            </svg>
            <svg className={styles.mouth}>
              <use xlinkHref={`#${styles.mouth}`} />
            </svg>
          </div>
        </li>
        <li className={`${styles.sad} ${rating == 2 ? styles.active : ''}`} onClick={() => onClick(2)}>
          <div>
            <svg className={styles.eye}>
              <use xlinkHref={`#${styles.eye}`} />
            </svg>
            <svg className={`${styles.eye} ${styles.right}`}>
              <use xlinkHref={`#${styles.eye}`} />
            </svg>
            <svg className={styles.mouth}>
              <use xlinkHref={`#${styles.mouth}`} />
            </svg>
          </div>
        </li>
        <li className={`${styles.ok} ${rating == 3 ? styles.active : ''}`} onClick={() => onClick(3)}>
          <div></div>
        </li>
        <li className={`${styles.good} ${rating == 4 ? styles.active : ''}`} onClick={() => onClick(4)}>
          <div>
            <svg className={styles.eye}>
              <use xlinkHref={`#${styles.eye}`} />
            </svg>
            <svg className={`${styles.eye} ${styles.right}`}>
              <use xlinkHref={`#${styles.eye}`} />
            </svg>
            <svg className={styles.mouth}>
              <use xlinkHref={`#${styles.mouth}`} />
            </svg>
          </div>
        </li>
        <li className={`${styles.happy} ${rating == 5 ? styles.active : ''}`} onClick={() => onClick(5)}>
          <div>
            <svg className={styles.eye}>
              <use xlinkHref={`#${styles.eye}`} />
            </svg>
            <svg className={`${styles.eye} ${styles.right}`}>
              <use xlinkHref={`#${styles.eye}`} />
            </svg>
          </div>
        </li>
      </ul>

      <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
        <symbol xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7 4' id={styles.eye}>
          <path d='M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1'></path>
        </symbol>
        <symbol
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 18 7'
          id={styles.mouth}
        >
          <path d='M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5'></path>
        </symbol>
      </svg>
    </React.Fragment>
  )
}
