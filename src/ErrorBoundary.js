//mosty code from reactjs.org/docs/error-boundaries.html
import React from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error Boundary caught an err', error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an eror with this listing.
          <Link to="/">Click here</Link> to go back to the home page or wait
          five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
