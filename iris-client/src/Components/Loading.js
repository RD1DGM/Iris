import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
    <div>
      <CircularProgress color="secondary" size={200} />
    </div>
  );
}
