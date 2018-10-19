import React from 'react';
import styles from './Social.module.scss';
import { ICON_SET } from 'utils/constants';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Social = props => {
  return (
    <div className={styles.social}>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`}
      >
        <FontAwesomeIcon icon={ICON_SET.facebook} className={styles.icon} />
      </a>
      <a
        href={`https://twitter.com/home?status=${encodeURIComponent(
          window.location.href
        )}`}
      >
        <FontAwesomeIcon icon={ICON_SET.twitter} className={styles.icon} />
      </a>
      <a
        href={`http://reddit.com/submit?url=${encodeURIComponent(
          window.location.href
        )}`}
      >
        <FontAwesomeIcon icon={ICON_SET.reddit} />
      </a>
    </div>
  );
};

export default Social;
