import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Container from "@mui/material/Container/Container";
import Stack from "@mui/material/Stack/Stack";

const Meals = () => {
  return (
    <Container>
      <Stack spacing={3}>
        <MealsSummary />
        <AvailableMeals />
      </Stack>
    </Container>
  );
};

export default Meals;
