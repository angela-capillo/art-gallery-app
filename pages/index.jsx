export default function HomePage() {

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div>
      <h1>Spotlight</h1>
    </div>
  );
}
