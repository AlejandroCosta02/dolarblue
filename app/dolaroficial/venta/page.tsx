import Conversion_2 from "@/app/components/Conversion_2";
import NavDolar from "@/app/components/NavDolar";
import {
  dolar_oficial_venta,
  dolar_oficial_nombre,
} from "@/app/components/NewApi";

async function dolarOficialVenta() {
  const dolaroficial_venta = await dolar_oficial_venta();
  const dolaroficial_nombre = await dolar_oficial_nombre();
  const path = "/dolaroficial/compra";
  const path_1 = "/dolaroficial/venta";

  return (
    <>
      <h3 className="text-center text-3xl text-bold">{dolaroficial_nombre}</h3>
      <p className="text-center text-5xl text-bold p-10">
        ${dolaroficial_venta}
      </p>
      <NavDolar href={path} href_1={path_1} />
      <Conversion_2 dolarblue={parseFloat(dolaroficial_venta)} />
    </>
  );
}

export default dolarOficialVenta;
