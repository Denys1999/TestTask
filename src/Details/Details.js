import {useState} from "react";
import {Button} from "@material-ui/core";

export default function Details(props) {
    const {currentItem} = props;
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)} variant="contained" color="primary">{currentItem.name}</Button>
            {show && <h4>{JSON.stringify(currentItem)}</h4>}
            <br/>
            <br/>
        </>
    )
}