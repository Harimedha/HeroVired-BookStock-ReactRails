import { Link } from "react-router-dom";

function Header(){

    return(
        <div style={{    
            display:'box',
            position:'fixed',
            zIndex:100,
            top:0,
            boxShadow: '1px 3px 10px skyblue',
            paddingBottom:'18px',
            // marginTop: '10px',                   
            backgroundColor:'white',
            borderRadius : '20px',
            height:'50px',
            width:'100%',
            textAlign:'center',
            // alignItems:'center',
            // justifyContent:'space-evenly'                       
        }}>
            <Link to="/">
            <h2>Book Stock Management </h2>
            </Link>            
           </div>
    )
}
export default Header;