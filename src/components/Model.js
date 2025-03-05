import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SignInForm from "./SignIn";
import SignupForm from "./SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#2b4162",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  "@media (max-width:600px)": {
    width: 200,
  },
};

export default function BasicModal({ open, handleClose ,setLoggedIn,setUsername,setOpen}) {

  const [isSignUp, setIsSignUp] = React.useState(false);

  const handleFormSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  // Callback for successful sign-up

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {isSignUp ? <SignupForm setOpen={setOpen} /> : <SignInForm setOpen={setOpen} setLoggedIn={setLoggedIn} setUsername={setUsername}/>}

        <Button
          fullWidth
          onClick={handleFormSwitch}
          sx={{ mt: 2, fontSize: "10px", textTransform: "none" }}
          variant="text"
          color="primary"
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "New user? Sign Up here"}
        </Button>
      </Box>
    </Modal>
  );
}
