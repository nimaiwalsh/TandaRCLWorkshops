import React from "react";
import styles from "../styles.module.css";

export default () => (
  <div className={styles["panda"]}>
    <div className={styles["head-wrap"]}>
      <div className={`${styles["ear"]} ${styles["lt-ear"]}`} />
      <div className={`${styles["ear"]} ${styles["rt-ear"]}`} />
      <div className={styles["face"]} />
      <div className={`${styles["eye"]} ${styles["lt-eye"]}`}>
        <span className={styles["pupil"]} />
      </div>

      <div className={`${styles["eye"]} ${styles["rt-eye"]}`}>
        <span className={styles["pupil"]} />
      </div>

      <div className={styles["nose"]} />
      <div className={styles["mouth"]} />
    </div>
    <div className={styles["body-wrap"]} />
    <div className={`${styles["leg"]} ${styles["lt-leg"]}`}>
      <span className={styles["paws"]} />
    </div>
    <div className={`${styles["leg"]} ${styles["rt-leg"]}`}>
      <span className={styles["paws"]} />
    </div>
  </div>
);
