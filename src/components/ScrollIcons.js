import React from 'react'
import { ScrollMenu,VisibilityContext } from "react-horizontal-scrolling-menu"
import "./hideScrollbar.css";

export default function ScrollIcons({categories}){


    return(
       <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {categories.map((category)=>(
              <div key={category.id} className='text-center me-5 mt-5'>
                <img src={category.image} alt={category.title} style={{width: 30, height:30}}/>
                <h6 style={{fontSize:7, marginTop: 5}}>{category.title}</h6>
              </div>
            ))}
       </ScrollMenu>
    )
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </Arrow>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        
      </Arrow>
    );
  }

  function Arrow({disabled,onClick,}){
    return (
        <button
          disabled={disabled}
          onClick={onClick}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            right: "1%",
            opacity: disabled ? "0" : "1",
            userSelect: "none",
            borderRadius: '50%',
            height: 30,
            width: 30,
            marginTop:50,
            border: '1px solid rgb(0,0,0,.3)'
          }}
        >
          
        </button>
      );
  }

