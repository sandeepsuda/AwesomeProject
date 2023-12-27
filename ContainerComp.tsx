import React, {useEffect, useState} from 'react';
import PresentationalComp from './PresentationalComp';

const ContainerComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <PresentationalComp data={data} />;
};

export default ContainerComp;
