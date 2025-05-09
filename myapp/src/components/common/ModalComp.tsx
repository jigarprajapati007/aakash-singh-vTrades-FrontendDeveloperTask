import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../style/auth/modal.scss";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#1f2129",
  border: "1px solid #1f2129",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  color: "#ffffff",
};

type Props = {
  setStep?: React.Dispatch<React.SetStateAction<number>>;
  openModal: boolean;
  title: string;
  desc: string;
  imgurl: string;
};

export const ModalComp: React.FC<Props> = ({
  setStep,
  openModal,
  title,
  desc,
  imgurl,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        className="modal-class-div"
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={imgurl} className="img-url" alt="" />
          <Typography
            id="modal-modal-title"
            className="title"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            className="desc"
            sx={{ mt: 2 }}
          >
            {desc}
          </Typography>
          <div style={{ width: 115, marginLeft: "auto" }}>
            <Button
              className="btn-okay"
              onClick={() => {
                if (setStep) {
                  setStep(2);
                } else {
                  navigate("/");
                }
              }}
            >
              Okay
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
