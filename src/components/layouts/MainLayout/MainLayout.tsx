import { Link } from "react-router-dom";
import { header, description, website } from "./constants";
import styles from "./MainLayout.module.css";
import { resources } from "../../../resources";
import Card from "../../common/Card/Card";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.h1}>{header}</h1>
      <Link to="https://dummyjson.com/" target="blank">
        {website}
      </Link>
      <p>{description}</p>

      <div className={styles.box}>
        {resources.map((resource) => (
          <Card resource={resource} key={resource.title} />
        ))}
      </div>
    </div>
  );
}

export default MainLayout;
