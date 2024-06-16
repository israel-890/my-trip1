import React from 'react';
import axios from 'axios';

const PlaceDetails = ({ selectedPlace }) => {
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    const fetchPlaceDescription = async () => {
      try {
        const response = await axios.get('https://studio.googleapis.com/v1/text:synthesize', {
          params: {
            key: 'AIzaSyDr32u58Hg6tpwSFH11hakrG2rQmW6HviU',
            text: `נא לספק תיאור קצר של ${selectedPlace.name} באורך כ-10 שורות`,
          },
        });

        setDescription(response.data.description);
      } catch (error) {
        console.error('Error fetching place description:', error);
      }
    };

    if (selectedPlace) {
      fetchPlaceDescription();
    }
  }, [selectedPlace]);

  return (
    <div>
      <h2>{selectedPlace.name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PlaceDetails;