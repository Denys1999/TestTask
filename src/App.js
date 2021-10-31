import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import links from './_helpers/configs'
import Main from "./Main/index"
import Header from "./Header";
import Details from "./Details/Details";
export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  if (error) {
    return 
    <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Please wait Loading... </div>;
  } else {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path={links.main}>
        <Main data={data} setData={setData} />
        </Route>
        <Route path={links.details}>
        <Details/>
        </Route>



        </Switch>
        
        
        
        
        </BrowserRouter>
    
        
    );
  }
}
