import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => {
  console.log(result.codeResult.code);
  console.log(result.codeResult.format);
//   return(
//   <li>
//     {result.codeResult.code} [{result.codeResult.format}]
//   </li>
// );
}

Result.propTypes = {
  result: PropTypes.object
};

export default Result;