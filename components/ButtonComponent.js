import { Button } from "@mui/material";

function ButtonComponent({ text, type }) {
  return <Button variant={type}>{text}</Button>;
}

export default ButtonComponent;
