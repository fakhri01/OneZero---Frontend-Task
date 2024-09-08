import React from "react";

const CategoryTitle = ({ title }) => {
  return (
    <h2 style={styles}>{title}</h2>
  );
};

const styles = {
  fontSize: "1.6rem",
  fontWeight: "600",
  marginBottom: "1.6rem",
  marginTop: "2.4rem",
}

export default CategoryTitle;
