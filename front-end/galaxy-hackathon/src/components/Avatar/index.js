import React from 'react';
import Styled from 'styled-components';
import { Image } from 'react-bootstrap';

const Avatar = (props) => {
  const { size, src } = props;
  return(
    <div>
      <Image
        src={src}
      />
    </div>
  )
};

export default Avatar;