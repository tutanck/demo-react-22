import { useState, useEffect } from "react";
import delay from "../utils/delay";
import colors from "../utils/colors";

export default function useDoThings(initialValues = {}) {
  const { defaultColor } = initialValues;

  const [color, setColor] = useState();
  const [loadingColor, setLoadingColor] = useState();

  useEffect(() => setColor(defaultColor), [defaultColor]);

  const onChangeColor = async (newColor) => {
    setLoadingColor(newColor);

    await delay(1000); // wait for color to change (async call like)

    setColor(newColor);
    setLoadingColor();
  };

  return { colors, loadingColor, color, onChangeColor };
}
