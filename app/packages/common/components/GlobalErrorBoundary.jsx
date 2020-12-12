import { Component } from "react";

export default class GlobalErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = {
         error: false,
      };
   }

   componentDidCatch() {
      this.setState({
         error: true,
      });
   }

   render() {
      const { error } = this.state;
      const { children } = this.props;
      if (error) return <p>error</p>;
      return children;
   }
}
