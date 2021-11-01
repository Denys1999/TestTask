import useStylesMain from "./style";
import Details from "../Details/Details";

export default function Main(props) {
    const classes = useStylesMain();
    const {data} = props;

    return (
        <ul className={classes.list}>
            {data.map(item => (
                <li key={item.id}>
                    <Details currentItem={item}/>
                </li>
            ))}
        </ul>
    )
}
//<Link className={classes.list} to={links.details}></Link>

