import React from 'react';
import PropTypes from 'prop-types';
import History from './History';


const HistoryList = ({ history }) => {
    console.log(history);
    if (history === undefined) {
        return <p>There is no History to show</p>
    }
    else return (
    <ul aria-label = 'history'>
        {history.map((his) => (
            <li key={`${his.urlRequest}-${his.requestType}`}>
                <History 
                    urlRequest={his.urlRequest}
                    requestBody={his.requestBody}
                    requestType={his.requestType}
                    />
            </li>
        ))}
    </ul>
)
}

HistoryList.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            urlRequest: PropTypes.string.isRequired,
            requestBody: PropTypes.string,
            requestType: PropTypes.string.isRequired
        })
    )
}

export default HistoryList;