import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} from "../../api/errorsApi"; // Update the path to your actual API slice file

function AboutPage() {
  const [trigger400Error] = useLazyGet400ErrorQuery();
  const [trigger401Error] = useLazyGet401ErrorQuery();
  const [trigger404Error] = useLazyGet404ErrorQuery();
  const [trigger500Error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Errors for Testing
        </Typography>
        <ButtonGroup fullWidth>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              trigger400Error().catch((error) => console.log(error))
            }
          >
            Test 404
          </Button>
          <Button size="large">Bad Gateway</Button>
          <Button size="large">Test 500</Button>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              trigger401Error().catch((error) => console.log(error))
            }
          >
            Test 401
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              trigger404Error().catch((error) => console.log(error))
            }
          >
            Test 404
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              trigger500Error().catch((error) => console.log(error))
            }
          >
            Test 500
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              triggerValidationError().catch((error) => console.log(error))
            }
          >
            Test Validation Error
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default AboutPage;
