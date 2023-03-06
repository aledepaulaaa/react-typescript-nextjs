import { Card, CardContent } from "@mui/material";
import "@fontsource/roboto/400.css";

const CardBox = ({...props}) => {
  return (
    <>
      <Card
        sx={{
          margin: 5,
          fontFamily: "Roboto",
          border: 2,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <strong>{props.name}</strong>
          <p>{props.time}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default CardBox;
