import React from 'react';
import PropTypes from 'prop-types';


const History = ({ urlRequest, requestType, requestBody }) => (
  <>
    <h2>{requestType}</h2>
    <p>{urlRequest}</p>
    <p>{requestBody}</p>
  </>
);

History.propTypes = {
  urlRequest: PropTypes.string.isRequired,
  requestBody: PropTypes.string,
  requestType: PropTypes.string.isRequired
};

export default History;