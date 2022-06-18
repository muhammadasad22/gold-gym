import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

const ExersiceCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifurl} alt={exercise.name} loading="lazy" />
    </Link>
  );
};

export default ExersiceCard;
