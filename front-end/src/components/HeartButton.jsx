import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const HeartButton = (props) => {
  const router = useRouter();

  const [liked, setLiked] = useState(false);

  const handleClick = (ev) => {
    ev.preventDefault();
    setLiked(!liked);
  };

  return (
    <button>
      {liked ? (
        <AiFillHeart onClick={handleClick} className="fill-red-600" />
      ) : (
        <AiOutlineHeart onClick={handleClick} />
      )}
    </button>
  );
};

HeartButton.propTypes = {};
export default HeartButton;