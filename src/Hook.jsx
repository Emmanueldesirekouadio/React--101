import { useEffect } from "react";
import { useState } from "react";

// Hooks
// class based component
// rules of hooks
// never  call hook  on the  loop (for ) or  in if
// never  use  hook  in the  regular js function
// use  hook in functional  component  or in  the  custom  hook
//

// function Example() {
//   const [count, setCount] = useState(100); // at the  top level
//   const [randomNo, setRandomNo] = useState(
//     Math.floor(() => Math.random() * 101)
//   );

//   useEffect(() => {
//     if (true) console.log(render);
//   });

//   return <p> {count} </p>;
// }



function Login({isLoggedIn}){
    const [user,  setUser] = useState("ali");

    if(!isLoggedIn){
        return <p> veiller  vous  connecter  </p>
    }

    return <p> Welcome {user} </p>
}




// git  notion de base 
// tailwind css 
// todo  App 
//  Hook  & les regles des hooks 
//Exo (utiliser  tailwind  pour ameliorer le projet)
