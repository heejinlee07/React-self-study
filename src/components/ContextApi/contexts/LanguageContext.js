import React from "react";

export default React.createContext("english");
// const context = ~~~
// console.log(context);

// export default context;
/*
The reason we are putting this into a separate file is 
that we can import the Context object into only
the component files that we care about in our application.
*/
