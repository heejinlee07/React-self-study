import React from "react";
import axios from "axios";

//REMIND: React.Component (앞 글자 모두 대문자)
// making a request is a asynchronous operation.
class ResourceList extends React.Component {
  state = { resource: [] };
  async componentDidMount() {
    // 'await' keyword essentially means just hold up for a moment and resume running this function
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    this.setState({ resource: response.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
      this.setState({ resource: response.data });
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.resource.length}</div>
        <div>{this.props.resource}</div>
      </div>
    );
  }
}

export default ResourceList;

/**
 * WHY: why the component is not properly fetching
 * the list of todos.
 *
 * App component created, initializes state 'resource' of 'posts'
 * App renders ResourceList
 * ResourceList's 'componentDidMount' called, fetches posts
 * Fetch completed, setState called, number of posts rendered
 * We click 'todos' button, App updates its state, rerenders itself
 * and ResourceList
 * ResourceList was already 'mounted',
 * so 'componentDidMount' is not called a second time.
 *
 * REMIND:  lifecycle method only gets invoked one single time.
 * 따라서 컴포넌트가 업데이트 괼때마다 호출 될 두번째 lifecycle method가 필요하다.
 * 이런 역할을 하는 lifecycle method는 componentDidUpdate이다.
 * 이는 상위 컴포넌트로 인해 컴포넌트를 렌더링 할 때마다
 * 또는 클래스 기반 컴포넌트 내에서 setState를 호출 할 때마다 호출된다.
 *
 * componentDidUpdate:
 * 이전 prop하고 현재 prop이 달라지면 어떤 액션을 취할지에 대해 결정해줌.
 */
