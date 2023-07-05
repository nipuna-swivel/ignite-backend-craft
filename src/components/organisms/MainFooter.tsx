import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Footer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.grey[200],
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	padding: theme.spacing(4),
	height: 296,
}));

const Divider = styled("div")({
	height: 2,
	width: "100%",
	marginTop: 12,
	marginBottom: 20,
});

const MainFooter = () => {
	return (
		<Footer component="footer">
			<Divider className="divider" />

			<Typography textAlign="center" variant="caption" component="h6">
				{new Date().getFullYear()} - <strong>My Craft Web</strong>
			</Typography>
		</Footer>
	);
};

export default MainFooter;
