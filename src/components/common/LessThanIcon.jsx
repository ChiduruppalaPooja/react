import React from 'react';

const LessThanIcon = ({ width = 24, height = 24, fill = "#212B36", ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3623 6.99999C13.1003 6.99999 12.8393 7.10199 12.6433 7.30499L8.78028 11.305C8.40228 11.698 8.40728 12.321 8.79328 12.707L12.7933 16.707C13.1833 17.098 13.8163 17.098 14.2073 16.707C14.5973 16.316 14.5973 15.684 14.2073 15.293L10.9023 11.988L14.0813 8.69499C14.4653 8.29699 14.4543 7.66399 14.0573 7.28099C13.8623 7.09299 13.6123 6.99999 13.3623 6.99999Z" fill={fill}/>
    </svg>
  );
}

export default LessThanIcon;
