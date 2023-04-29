import Conversion from "./components/Conversion";
import NavDolar from "./components/NavDolar";
import Conversion_2 from "./components/Conversion_2";

const getDolar = async () => {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest");

  if (!res.ok) {
    throw new Error("Error al obtener el dolar");
  }
  return res.json();
};

const Home = async () => {
  const dolars = await getDolar();
  const dolarblue_avg = dolars.blue.value_avg;
  return (
    <>
      <p className="text-center text-5xl text-bold p-10">${dolarblue_avg}</p>
      <NavDolar />
      <Conversion_2 dolarblue={dolarblue_avg} />
    </>
  );
};

export default Home;
