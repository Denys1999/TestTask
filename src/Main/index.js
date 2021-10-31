import { Button } from "@material-ui/core";
import useStylesMain from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import links from "../_helpers/configs";
import Details from "../Details/Details";
export default function Main(props){
  const classes=useStylesMain();
  const{data,setData}=props;
  
  return(
    <ul className={classes.list}  >

    {data.map(item => (
      <li key={item.id}>
      <Details currentItem={item}/>
      <Button onClick={()=>setData(item)} variant="contained" color="primary">{item.name}</Button>
      </li>
    ))}
    </ul>
  )
}
//<Link className={classes.list} to={links.details}></Link>

