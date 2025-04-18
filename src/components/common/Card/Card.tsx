import { FC } from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

interface CardPrompts {
  resource: {
    title: string;
    description: string;
    color: string;
    icon: string;
    path: string;
  };
}

const Card: FC<CardPrompts> = ({ resource }) => {
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: resource.color }}
      onClick={() => navigateToPage(resource.path)}
    >
      <img src={resource.icon} alt="" />
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
    </div>
  );
};

export default Card;
