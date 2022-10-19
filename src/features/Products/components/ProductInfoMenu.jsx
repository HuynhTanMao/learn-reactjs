import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';


function ProductInfoMenu() {
    return (
        <Box component="ul" sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            padding: 0,
            listStyleType: 'none',

            "li > a": {
                textDecoration: 'none',
                padding: 2
            }
        }}>
            <li>
                <Link component={NavLink} to="">Description</Link>
            </li>
            <li>
                <Link component={NavLink} to="additional">Additional Infomation</Link>
            </li>
            <li>
                <Link component={NavLink} to="reviews">Review</Link>
            </li>
        </Box>
    );
}

export default ProductInfoMenu;