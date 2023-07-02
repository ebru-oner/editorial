import React, { useEffect, useState } from "react";

import colorset from "../assets/data/colorset.json";

const useColorRandomizer = (initialId) => {
  const [id, setId] = useState(null);
  const [textColorCode, setTextColorCode] = useState("#000000");
  const [backgroundColorCode, setBackgroundColorCode] = useState("#FFFFFF");

  function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
  }

  useEffect(() => {
    if (id === null) {
      setId(initialId);
    } else if (typeof id === "string" || isNaN(id)) {
      const temp = getRandomNumber(Object.keys(colorset).length);
      setId(temp);
    } else {
      const colorGroup = colorset[id];

      const randomColorIndex = getRandomNumber(
        Object.values(colorGroup).length
      );

      var textClrCode = Object.values(
        Object.values(colorGroup[randomColorIndex])[0]
      );
      var bgClrCode = Object.values(
        Object.values(colorGroup[randomColorIndex])[1]
      );
      setTextColorCode(textClrCode);
      setBackgroundColorCode(bgClrCode);
    }
  }, [id, initialId]);

  return { id, textColorCode, backgroundColorCode };
};

export default useColorRandomizer;
