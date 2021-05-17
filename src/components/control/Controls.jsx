import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ urlRequest, requestBody, onChange, onSubmit }) => (
  <form className={styles.Controls} onSubmit={onSubmit} 
  aria-label='form'>
    <input type="text" value={urlRequest} onChange={onChange} aria-label='url-request' />
    <section>
      <label htmlFor='GET'>GET</label>
      <input aria-label='GET' id='GET' type='radio' value='GET' name='requestType' onChange={onChange} defaultChecked />

      <label htmlFor='POST'>POST</label>
      <input aria-label='POST' id='POST' type='radio' value='POST' name='requestType' onChange={onChange} />

      <label htmlFor='PUT'>PUT</label>
      <input aria-label='PUT' id='PUT' type='radio' value='PUT' name='requestType' onChange={onChange} />

      <label htmlFor='PATCH'>PATCH</label>
      <input aria-label='PATCH' id='PATCH' type='radio' value='PATCH' name='requestType' onChange={onChange} />

      <label htmlFor='DELETE'>DELETE</label>
      <input aria-label='DELETE' id='DELETE' type='radio' value='DELETE' name='requestType' onChange={onChange} />
    </section>

    <textarea type='text' aria-label='request-body' onChange={onChange} value={requestBody} name='requestBody' rows='15' cols='60'/>

    <button>Submit</button>
  </form>
);

Controls.propTypes = {
  urlRequest: PropTypes.string.isRequired,
  requestBody: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Controls;