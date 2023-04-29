const getDolar = async () => {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest");

  if (!res.ok) {
    throw new Error("Error al obtener el dolar");
  }
  return res.json();
};

const Home = async () => {
  const dolars = await getDolar();
  const official = dolars.oficial.value_avg;
  console.log(dolars);

  return (
    <div>
      <h1>hola</h1>
      {<p>{dolars.oficial.value_avg}</p>}
      <hr />
      {<p>{official + 1000}</p>}
    </div>
  );
};

export default Home;
