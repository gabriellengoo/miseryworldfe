import React from "react";
import styles from '../styles/Footer.module.css';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "./MuiNextLink"
import TextField from '@mui/material/TextField';

function FooterComponent() {    
	return ( 
<Box component="footer" sx={{ py: 5, bgcolor: "#fef1ef" }}>

<Stack padding={2} justifyContent="center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourTwitterLink/" target="_blank" rel="noopener noreferrer" >
Home
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourTwitterLink/" target="_blank" rel="noopener noreferrer" >
		About
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourTwitterLink/" target="_blank" rel="noopener noreferrer" >
		Contact
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourTwitterLink/" target="_blank" rel="noopener noreferrer" >
		Resources
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourTwitterLink/" target="_blank" rel="noopener noreferrer" >
		Get involved
		</MuiNextLink>
</Stack>


	<Stack padding={2} direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2} justifyContent="center"
>


		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourInstagramLink/" target="_blank" rel="noopener noreferrer">
		<Instagram fontSize="large" />
		</MuiNextLink>

		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourTwitterLink/" target="_blank" rel="noopener noreferrer" >
		<Twitter fontSize="large" />
		</MuiNextLink>

		<TextField id="outlined-basic" label="Search" variant="outlined" color="secondary" />
	</Stack>



	<Stack padding={2} justifyContent="center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourTwitterLink/" target="_blank" rel="noopener noreferrer" >
Donate 
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://YourTwitterLink/" target="_blank" rel="noopener noreferrer" >
		Newsletter
		</MuiNextLink>
		
</Stack>


	<Typography align="right" padding={2} color="common.black">
		© 2022 - {new Date().getFullYear()}, Misery 
	</Typography>
</Box>
	)
}
export default FooterComponent