import { useState, useEffect } from "react";
import axios from "axios";

/**NOTE:
 * we usually call function or some
 * files that export a function with a lowercase
 * whereas React components always get capitalized.
 */

// 이렇게 하면 reuse하기 좋다. 이 함수는 어떠한 특정 component와도 묶여있지 않다.
const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  /* every single time that our component gets rendered 
  to the screen or updated we're going to run this function. 
  array essentially controls whether or not this function going to be invoked*/
  useEffect(() => {
    (async (resource) => {
      console.log("hello world 1");
      //'await' keyword essentially means just hold up for a moment and resume running this function
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      console.log("hello world! 2");
      setResources(response.data);
    })(resource);
  }, [resource]);
  return resources;
};

export default useResources;
