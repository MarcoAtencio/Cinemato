import React from "react";

export const Load = () => {
  return (
    <div class="loader-wrapper is-active" id="load">
      <div class="loader is-loading"></div>
    </div>
  );
};

export const LoadMovie = () => {
  return (
    <div class="loader-movie is-active" id="load">
      <div class="loader is-loading"></div>
    </div>
  );
};
