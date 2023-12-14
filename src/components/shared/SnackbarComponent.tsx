"use client"
import { Alert, AlertProps, Snackbar, SnackbarCloseReason } from "@mui/material";
import { SyntheticEvent, forwardRef } from "react";
import { useAppContext } from "@/app/api/AppContext";

type Props = {};

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const SnackbarComponent = (props: Props) => {
  const { snackbar, setSnackbar, snackbarSeverity, snackbarText } =
    useAppContext();

	const handleClose = (
    event: Event | SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => {
		if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  return (
		<div aria-label="added to favorites pop-up" className="md:hidden">
			<Snackbar
				open={snackbar}
				autoHideDuration={3000}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<SnackbarAlert
					severity={snackbarSeverity ? "info" : "success"}
				>
					{snackbarText}
				</SnackbarAlert>
			</Snackbar>
		</div>
  );
};

export default SnackbarComponent;
