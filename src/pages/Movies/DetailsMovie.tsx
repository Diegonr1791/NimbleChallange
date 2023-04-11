import React from 'react'
import { useParams } from 'react-router-dom';

const DetailsMovie = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>DetailsMovie {id}</div>
  )
}

export default DetailsMovie