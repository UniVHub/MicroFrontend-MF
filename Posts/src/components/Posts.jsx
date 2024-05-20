import { useEffect, useState } from 'react';
import { images as initialImages } from '../util/definitions';
import { Post } from './Post';

export const Posts = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(initialImages);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <Post image={image} />
      ))}
    </div>
  );
};
