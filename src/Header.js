import React from 'react'

export default function Header(props) {
    return (
        <div style={{height:"120px", border:"2px solid black", display:"flex",justifyContent:"space-between", color:"white",alignItems:"center"}}>
     	<h1>UserSearch</h1>
        <div style={{alignSelf:"flex-end", fontSize:"1.5rem"}}
         onClick={props.navigationHandler}>
        
         <span
         style={{borderRight:"1px solid white",padding:"8px"}}
         >Search</span>
         <span
         style={{padding:"8px"}}
         >About</span>
         </div>
       </div>
    )
}
