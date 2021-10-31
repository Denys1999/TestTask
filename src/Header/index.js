import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import links from "../_helpers/configs";
import useStylesHeader from "./style";

export default function Header(props){
    const classes = useStylesHeader()
    return(
        <header className={classes.root}>
            <ul className={classes.list}>
                <li className={classes.list}>
                <Button variant="contained" color="primary"><Link className={classes.link} to={links.main}>Main</Link></Button>
                </li>
                <li className={classes.list}>
                <Button variant="contained" color="primary"><Link className={classes.link}  to={links.details}>Details</Link></Button>
                </li>
            </ul>
        </header>
    ) ;
}