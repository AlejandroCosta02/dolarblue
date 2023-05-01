import NavDolar from "./components/NavDolar";
import Conversion_2 from "./components/Conversion_2";
import { dolar_blue_venta } from "./components/NewApi";
// WORK PERFECT ONLY WITH DOLAR BLUE
// const getDolar = async () => {
//   const res = await fetch("https://api.bluelytics.com.ar/v2/latest");

//   if (!res.ok) {
//     throw new Error("Error al obtener el dolar");
//   }
//   return res.json();
// };

const Home = async () => {
  // const dolars = await getDolar();
  // const dolarblue_avg = dolars.blue.value_avg;
  const DOVenta = await dolar_blue_venta();

  return (
    <>
      <p className="text-center text-5xl text-bold p-10">$ {DOVenta}</p>
      {/* <NewApi /> */}
    </>
  );
};

export default Home;
