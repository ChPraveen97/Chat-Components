import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 440,
  height: 404,
  bgcolor: "#FFFFFF",
  borderRadius: "8px",
  boxShadow: 2,
  p: 4,
  //   opacity: 5,
};

export default function SuccessModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} className="success-modal">
          <TaskAltRoundedIcon
            sx={{
              color: "#4A8F18",
              // width:'70px',
              // height: '70px',
              fontSize: '80px',
              mt: "14px",
              mb: "19px",
            }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 700,
              lineHeight: "38px",
              letterSpacing: "0.25px",
              fontFamily: "Open Sans",
              fontSize: "25px",
              color: "#262626",
              textAlign: "center",
              px: "40px",
              mt: "19px",
              mb: "16px",
            }}
          >
            Your request has been taken into account !
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.25px",
              fontFamily: "Poppins",
              fontSize: "16px",
              textAlign: "center",
              color: "#262626",
              mt: "16px",
              mb: "17px",
              px: '70px'
            }}
          >
            You will be redirected to the project file.
          </Typography>

          <LightModeOutlinedIcon sx={{ mt: "16px", color: "#3360DB" }} />
        </Box>
      </Modal>
    </div>
  );
}
