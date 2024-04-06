declare module 'react-rating-emoji' {
  import React from 'react';

  export type RatingComponentProps = {
    id?: string;
    className?: string;
    rating: number;
    onClick: (rating: number) => void;
  };

  export const RatingComponent: React.FC<RatingComponentProps>;
}
