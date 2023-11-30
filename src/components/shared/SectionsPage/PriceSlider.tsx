import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

type Props = {
	width: string,
	railwidth: string
}

const PriceSlider = styled(Slider)(({width, railwidth}: Props) => ({
  width: width,
  display: "flex",
  justifyContent: "center",
  height: 4.2,
  "& .MuiSlider-rail": {
    width: railwidth,
    backgroundColor: "gray",
    opacity: 0.2,
    borderRadius: 0,
  },
  "& .MuiSlider-track": {
    backgroundColor: "#00652E",
    border: "none",
  },
  "& .MuiSlider-thumb": {
    boxShadow: "none",
    height: 12,
    width: 12,
    borderRadius: 0,
    backgroundColor: "#00652E",
    "&:before": {
      display: "none",
    },
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      // Reset on touch devices, it doesn't add specificity
      boxShadow: "none",
      "@media (hover: none)": {
        boxShadow: "none",
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    display: "none",
  },
}));

export default PriceSlider;
