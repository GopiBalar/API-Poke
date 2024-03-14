import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pokedex/pokemonCard.module.css";
import { getTagBackgroundColor } from "../../utils/tags";

function PokemonCard(props) {
  const { image, name, tags, id } = props;

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/pokemon/${name}`);
  }

  return (
    <div className={styles.cardContainerStyles} onClick={handleClick}>
      <h2 className={styles.nameStyles}>{name}</h2>
      <div className={styles.tagStyles}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={styles.tagStyles}
            style={{
              backgroundColor: getTagBackgroundColor(tag.toLowerCase()),
              // boxShadow: "2px 4px 6px gray",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.imageContainerStyles}>
        <img src={image} alt={name} className={styles.imageStyles} />
      </div>
    </div>
  );
}

export default PokemonCard;
