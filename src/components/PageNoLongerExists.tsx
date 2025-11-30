import React from 'react';
import Link from 'next/link';
import styles from '../../src/styles/pageNoLongerExists.module.css';
import { useRouter } from 'next/router';

const PageNoLongerExists: React.FC = () => {
  // 1. Initialize the router
  const router = useRouter();

  // 2. Extract the dynamic segment (the project name) from the URL query
  const rawProjectName = router.query.projectName as
    | string
    | undefined;

  // 3. Clean and format the name for display (e.g., PlayTable)
  // Decode the URL (removes %20 for spaces) and replace dashes/underscores with spaces
  const displayProjectName = rawProjectName
    ? decodeURIComponent(rawProjectName).replace(/[-_]/g, ' ')
    : 'This Project'; // Fallback name

  return (
    // Use className attribute with imported styles object
    <div className={styles.container}>
      <div className={styles.gridOverlay} />
      <div className={styles.contentWrapper}>
        <h1 className={styles.errorCode}>404</h1>

        {/* 4. Use the dynamic project name in the Heading */}
        <h2 className={styles.heading}>
          {displayProjectName} No Longer Exists
        </h2>

        <p className={styles.message}>
          Apologies but it looks like the owners have taken down the
          original website for {displayProjectName}.
        </p>

        <Link href="/" passHref legacyBehavior>
          <a className={styles.returnLink}>Initiate Rewind</a>
        </Link>
      </div>
    </div>
  );
};

export default PageNoLongerExists;
