import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import { navigate } from '@reach/router';
import Modal from './Modal';

class DetailsClass extends React.Component {
  state = {
    loading: true,
    showModal: false
  };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
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
  toggleModal = () =>
    this.setState({ ...this.state, showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <div>
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {themeHook => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt me!
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like adop {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, Im a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
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
