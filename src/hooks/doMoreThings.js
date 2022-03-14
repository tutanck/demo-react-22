import { useSnackbar } from "notistack";
import { useAsync, useOnDone } from "@tutanck/react-async";
import useDoThings from "./doThings";

export default function useDoMoreThings(initialValues = {}) {
  const { defaultColor } = initialValues;

  const {
    colors,
    loadingColor,
    color,
    onChangeColor: onChange,
  } = useDoThings({
    defaultColor,
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () =>
    enqueueSnackbar(`I ❤️ ${color}`, { variant: "info" });

  const [onChangeColor, changeStatus] = useAsync(onChange);

  useOnDone(handleClick, [changeStatus]);

  return { colors, loadingColor, color, onChangeColor };
}
