import React from 'react';
import styles from './Progress.module.css';

const Progress = () => {
  const progress = 75;
  const currentChapter = 'Chapter 5';

  return (
    <div className={styles.progress}>
      <div className={styles.progressTracker}>
        <div className={styles.blueCircle} />
      </div>
      <div className={styles.percentageProgress}>
        <span className={styles.percentageNum}>
          {progress}
          %
        </span>
        <span className={styles.completed}>Completed</span>
      </div>
      <hr />
      <div className={styles.chapterDetails}>
        <div className={styles.chapterTitle}>
          Current Chapter
        </div>
        <div className={styles.chapterNumber}>
          {currentChapter}
        </div>
        <button type="button" className={styles.updateProgressButton}>
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default Progress;
