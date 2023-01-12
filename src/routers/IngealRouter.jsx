import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  IngealPage,
  CharacterPage,
} from "../ingeal";

export const IngealRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IngealPage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
