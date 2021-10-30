import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
} from '@chakra-ui/react';

const AlertWrapper = ({ alertTitle, alertDescription, type }) => {
  return (
    <Alert status={type} color="brand.primary">
      <AlertIcon />
      <AlertTitle mr={2}>{alertTitle}</AlertTitle>
      {alertDescription ? (
        <AlertDescription>{alertDescription.toString()}</AlertDescription>
      ) : null}
    </Alert>
  );
};

export default AlertWrapper;
