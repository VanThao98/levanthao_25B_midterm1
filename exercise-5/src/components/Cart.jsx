import React from "react"

export default function Cart({name, hobbi, image,className}){
return(
<div class="card">
          <h4>{name}</h4>
          <small>{className}</small>
          <p>
          {hobbi}
          </p>
          <img src={image} alt="the place image alt" />
</div>
);
}