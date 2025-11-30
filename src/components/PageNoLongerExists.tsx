// Filename: src/pages/project-unavailable.tsx

import React from 'react';
import Link from 'next/link';
// Import the CSS Module
import styles from '../styles/pageNoLongerExists.module.css';

const PageNoLongerExists: React.FC = () => {
  return (
    // Use className attribute with imported styles object
    <div className={styles.container}>
      <div className={styles.gridOverlay} />
      <div className={styles.contentWrapper}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.heading}>PlayTable No Longer Exists</h2>
        <p className={styles.message}>
          Apologies but it looks like the owners have taken down the
          original website.
        </p>

        {/* The Link component handles navigation, the anchor tag gets the styling */}
        <Link href="/" passHref legacyBehavior>
          <a className={styles.returnLink}>Initiate Rewind</a>
        </Link>
      </div>
    </div>
  );
};

export default PageNoLongerExists;
