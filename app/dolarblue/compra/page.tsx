import Conversion_2 from "@/app/components/Conversion_2";
import NavDolar from "@/app/components/NavDolar";
import { dolar_blue_compra, dolar_blue_nombre } from "@/app/components/NewApi";
// const getDolar = async () => {
//   const res = await fetch("https://api.bluelytics.com.ar/v2/latest");

//   if (!res.ok) {
//     throw new Error("Error al obtener el dolar");
//   }
//   return res.json();
// };

async function DB_Compra() {
  // const dolars = await getDolar();
  // const dolarblue_compra = dolars.blue.value_buy;
  const dolarblue_compra = await dolar_blue_compra();
  const dolarblue_nombre = await dolar_blue_nombre();
  const path = "/dolarblue/compra";
  const path_1 = "/dolarblue/venta";
  return (
    <>
      <h3 className="text-center text-3xl text-bold">{dolarblue_nombre}</h3>
      <p className="text-center text-5xl text-bold p-10">${dolarblue_compra}</p>
      <NavDolar href={path} href_1={path_1} />
      <Conversion_2 dolarblue={parseFloat(dolarblue_compra)} />
    </>
  );
}

export default DB_Compra;
