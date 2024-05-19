import React, { useState } from 'react';
import styles from "./DietAttributes.module.css";
const attributes = ["Vegan", "Halal", "Gluten-Free", "Lacto-Free"];

function DietAttributes() {
  const [selectedAttribute, setSelectedAttribute] = useState(attributes[0]);

  return (
    <div className={styles.attributes}>
      {attributes.map(attribute => (
        <button
          key={attribute}
          className={`${styles.button} ${selectedAttribute === attribute ? styles.selected : ''}`}
          onClick={() => setSelectedAttribute(attribute)}
        >
          {attribute}
        </button>
      ))}
    </div>
  );
}

export default DietAttributes;
