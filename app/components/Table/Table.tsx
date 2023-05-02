"use client";
import { useState, useEffect } from "react";
import React from "react";

import {
  dolar_oficial_nombre,
  dolar_blue_nombre,
  dolar_oficial_compra,
  dolar_blue_compra,
  dolar_oficial_venta,
  dolar_blue_venta,
} from "../NewApi";
import LoadingComponent from "../LoadingComponent";
import Link from "next/link";

const Table: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [dolarOficialNombre, setDolarOficialNombre] = useState<string>("");
  const [dolarBlueNombre, setDolarBlueNombre] = useState<string>("");
  const [dolarBlueCompra, setDolarBlueCompra] = useState<string>("");
  const [dolarOficialCompra, setDolarOficialCompra] = useState<string>("");
  const [dolarOficialVenta, setDolarOficialVenta] = useState<string>("");
  const [dolarBlueVenta, setDolarBlueVenta] = useState<string>("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();

    async function fetchDolarNames() {
      const oficialName = await dolar_oficial_nombre();
      const blueName = await dolar_blue_nombre();
      const oficialCompra = await dolar_oficial_compra();
      const blueCompra = await dolar_blue_compra();
      const oficialVenta = await dolar_oficial_venta();
      const blueVenta = await dolar_blue_venta();
      setIsLoading(false);
      setDolarOficialNombre(oficialName);
      setDolarBlueNombre(blueName);
      setDolarOficialCompra(oficialCompra);
      setDolarBlueCompra(blueCompra);
      setDolarOficialVenta(oficialVenta);
      setDolarBlueVenta(blueVenta);
    }
    fetchDolarNames();
  }, []);

  return (
    <div className="mx-auto w-2/4">
      <div
        className="grid grid-cols-3 gap-2 text-center"
        style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
      >
        <div className="bg-transparent p-2"></div>
        <div className="bg-green-100 p-2 rounded-xl font-bold">Compra</div>
        <div className="bg-red-100 p-2 rounded-xl font-bold">Venta</div>
        <div className="bg-gray-200 p-2 hover:bg-black hover:text-white">
          <Link href="/dolaroficial/compra">
            {isLoading ? <LoadingComponent /> : dolarOficialNombre}
          </Link>
        </div>
        <div className="bg-gray-200 p-2">
          {isLoading ? <LoadingComponent /> : dolarOficialCompra}
        </div>
        <div className="bg-gray-200 p-2 text-right">
          {isLoading ? <LoadingComponent /> : dolarOficialVenta}
        </div>
        <div className="bg-gray-200 p-2 hover:bg-black hover:text-white">
          <Link href="/dolarblue/compra">
            {isLoading ? <LoadingComponent /> : dolarBlueNombre}
          </Link>
        </div>
        <div className="bg-gray-200 p-2 text-right">
          {isLoading ? <LoadingComponent /> : dolarBlueCompra}
        </div>
        <div className="bg-gray-200 p-2 text-right">
          {isLoading ? <LoadingComponent /> : dolarBlueVenta}
        </div>
        <div className="bg-gray-200 p-2">Data 3</div>
        <div className="bg-gray-200 p-2 text-right">5</div>
        <div className="bg-gray-200 p-2 text-right">6</div>
        <div className="bg-gray-200 p-2">Data 4</div>
        <div className="bg-gray-200 p-2 text-right">7</div>
        <div className="bg-gray-200 p-2 text-right">8</div>
      </div>
    </div>
  );
};

export default Table;
