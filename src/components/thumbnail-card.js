import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const ThumbnailCard = ({ image, title }) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "440px",
          height: "480px",
          background: "#333333",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          margin: "20px",
          borderRadius: "8px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, .5)",
        }}
      >
        <GatsbyImage
          image={image}
          alt={title}
          style={{ marginTop: "20px", borderRadius: "8px" }}
        />
        <p style={{ color: "#8D8D8D" }}>{title}</p>
      </div>
    </>
  );
};

export default ThumbnailCard;
