import { makeStyles } from '@material-ui/styles';

const useStylesMain = makeStyles(theme=>{
    return{
      
            root:{
                boxShadow:' 12px 10px 24px 4px rgba(0, 0, 0, 0.2)',
                flexWrap:"wrap",
                borderRadius:50,
            },
            list:{
                marginBottom:5,
                paddingLeft:0,
                listStyleType: "none",
                textDecoration: "none",
                margin:' 0 5px',
            },
         }
    }
    
);
  export default  useStylesMain;