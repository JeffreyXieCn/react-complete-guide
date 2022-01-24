import Card from "@mui/material/Card/Card";
import Typography from "@mui/material/Typography/Typography";

const MealsSummary = () => {
  return (
    <Card sx={{ padding: "24px" }}>
      <Typography variant="h2">Delicious Food, Delivered To You</Typography>
      <Typography variant="body1" mt={2}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Typography>
      <Typography variant="body1" mt={2}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Typography>
    </Card>
  );
};

export default MealsSummary;
