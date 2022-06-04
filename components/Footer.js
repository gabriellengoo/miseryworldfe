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
		// #fef1ef
		<div className="font-light">
<Box component="footer" sx={{ pt: 5, bgcolor: "none" , border: "none" }}>

<Stack padding={2} justifyContent="center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="../../Miserysite"  rel="noopener noreferrer" >
home
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="../videoBlogPost/our-story"  rel="noopener noreferrer" >
		about
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="../../contact/contact"  rel="noopener noreferrer" >
		contact
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="../../resources/resources-for-qtibpoc-healing"  rel="noopener noreferrer" >
		resources
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="../../getinvolved/get-involved"  rel="noopener noreferrer" >
		get involved
		</MuiNextLink>
</Stack>


	<Stack padding={2} direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2} justifyContent="center"
>


		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://www.instagram.com/miseryparty/?hl=en" target="_blank" rel="noopener noreferrer">
		<Instagram fontSize="large" />
		</MuiNextLink>

		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter fontSize="large" />
		</MuiNextLink>

		<TextField id="outlined-basic" label="Search" variant="outlined" color="secondary" />
	</Stack>



	<Stack padding={2} justifyContent="center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="../../getinvolved/get-involved"  rel="noopener noreferrer" >
donate 
		</MuiNextLink>
		<MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="../../faq"  rel="noopener noreferrer" >
		newsletter
		</MuiNextLink>
		
</Stack>


	<Typography align="center" padding={0} color="common.black">
	<div className="font-light">
		© 2022 - {new Date().getFullYear()}, misery
		</div>
	</Typography>
	{/* <Typography align="center" padding={0} color="common.black">
	<div className="font-light">
		Built by <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://www.instagram.com/is_this_gabrielle/"  rel="noopener noreferrer" >
		The internet architect
		
		</MuiNextLink> 🔗</div>
	</Typography> */}
</Box>
</div>)
}
export default FooterComponent