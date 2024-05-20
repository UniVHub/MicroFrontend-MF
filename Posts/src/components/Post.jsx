import React from 'react'
import "../index.scss"

export const Post = ({image}) => {
  return (
    <div key={image.id} className="bg-gray-200 rounded-lg p-4">
      <img
        src={image.url}
        alt={image.name}
        className="w-full h-64 object-cover"
      />
    </div>
  );
}
