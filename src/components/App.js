import { useEffect, useState } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.message);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      {!isLoaded && <p>Loading...</p>}
      {isLoaded && <img src={imageUrl} alt="A Random Dog" />}
    </>
  );
}

export default App;
