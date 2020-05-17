import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <ul>
        {resources.map((record) => (
          /* li에 key를 써주어야 한다.
          Each child in a list should have a unique "key" prop.
          */
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;

/* NOTE:
useEffct 안에서 콜백함수로 전달시에는 동기적인 함수만 전달가능하므로, 
위와 같이 즉시실행함수로 묶어도 되지만, 아래와 같이
위에 따로 선언한 후 useCallback내부에서 'fetchResource(resource)'로
호출해서 사용해도 된다.

const response = async (resource) => {
  console.log("hello world 1");
  //'await' keyword essentially means just hold up for a moment and resume running this function
  const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  console.log("hello world! 2");
  setResources(response.data);

  useEffect(()=>{
    fetchResource(resource)
  },[resource])
}
*/
