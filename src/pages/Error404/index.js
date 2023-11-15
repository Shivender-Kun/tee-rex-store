import { Link } from "react-router-dom";
import React from "react";

import styles from "./index.module.scss";

const Error404 = () => (
  <main className={styles["page__404"]}>
    <h2 className={styles["page__404--heading"]}>
      404 <br />
      Page Not Found
    </h2>
    <Link to="/" className={styles["page__404--return-home"]}>
      Return to Home
    </Link>
  </main>
);

export default Error404;
