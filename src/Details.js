import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

const Details = props => {
  return (
    <div>
      <h1>hi lol</h1>
      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </div>
  );
};

class DetailsClass extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <div>
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt me!</button>
          <p>{description}</p>
        </div>
        {/* <pre>
          <code>{JSON.stringify(this.props, null, 4)}</code>
        </pre> */}
      </div>
    );
  }
}
export default function DeatilsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsClass {...props} />
    </ErrorBoundary>
  );
}
