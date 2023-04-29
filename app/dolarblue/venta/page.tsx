import Conversion_2 from "@/app/components/Conversion_2";
import NavDolar from "@/app/components/NavDolar";

const getDolar = async () => {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest");

  if (!res.ok) {
    throw new Error("Error al obtener el dolar");
  }
  return res.json();
};

async function DB_Venta() {
  const dolars = await getDolar();
  const dolarblue_venta = dolars.blue.value_sell;
  return (
    <>
      <p className="text-center text-5xl text-bold p-10">${dolarblue_venta}</p>
      <NavDolar />
      <Conversion_2 dolarblue={dolarblue_venta} />
    </>
  );
}

export default DB_Venta;
