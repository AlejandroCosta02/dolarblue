import Conversion from "@/app/components/Conversion";
import NavDolar from "@/app/components/NavDolar";

const getDolar = async () => {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest");

  if (!res.ok) {
    throw new Error("Error al obtener el dolar");
  }
  return res.json();
};

async function DB_Compra() {
  const dolars = await getDolar();
  const dolarblue_compra = dolars.blue.value_buy;
  return (
    <>
      <p className="text-center text-5xl text-bold p-10">${dolarblue_compra}</p>
      <NavDolar />
      <Conversion dolarblue={dolarblue_compra} />
    </>
  );
}

export default DB_Compra;
