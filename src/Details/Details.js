export default function Details(props){
  const{currentItem}=props;
  return(
    <h4>{JSON.stringify(currentItem)}</h4>
  )
}