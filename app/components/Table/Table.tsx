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
  dolar_bolsa_nombre,
  dolar_bolsa_compra,
  dolar_bolsa_venta,
  dolar_ccl_nombre,
  dolar_ccl_compra,
  dolar_ccl_venta,
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
  const [dolarBolsaNombre, setDolarBolsaNombre] = useState<string>("");
  const [dolarBolsaCompra, setDolarBolsaCompra] = useState<string>("");
  const [dolarBolsaVenta, setDolarBolsaVenta] = useState<string>("");
  const [dolarCCLVenta, setDolarCCLVenta] = useState<string>("");
  const [dolarCCLCompra, setDolarCCLCompra] = useState<string>("");
  const [dolarCCLNombre, setDolarCCLNombre] = useState<string>("");

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
      const bolsaName = await dolar_bolsa_nombre();
      const bolsaCompra = await dolar_bolsa_compra();
      const bolsaVenta = await dolar_bolsa_venta();
      const cclVenta = await dolar_ccl_venta();
      const cclCompra = await dolar_ccl_compra();
      const cclNombre = await dolar_ccl_nombre();
      setIsLoading(false);
      setDolarOficialNombre(oficialName);
      setDolarBlueNombre(blueName);
      setDolarOficialCompra(oficialCompra);
      setDolarBlueCompra(blueCompra);
      setDolarOficialVenta(oficialVenta);
      setDolarBlueVenta(blueVenta);
      setDolarBolsaNombre(bolsaName);
      setDolarBolsaCompra(bolsaCompra);
      setDolarBolsaVenta(bolsaVenta);
      setDolarCCLVenta(cclVenta);
      setDolarCCLCompra(cclCompra);
      setDolarCCLNombre(cclNombre);
    }
    fetchDolarNames();
  }, []);

  return (
    <div className="py-12 lg:mx-96 md:mx-10">
      <div
        className="grid grid-cols-1 gap-4 bg-white rounded-md  mt-8 "
        style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
      >
        <div className="bg-transparent p-2"></div>
        <div className="px-6 py-4 bg-green-200 text-gray-700 font-medium uppercase tracking-wider text-xs">
          Compra
        </div>
        <div className="px-6 py-4 bg-red-200 text-gray-700 font-medium uppercase tracking-wider text-xs">
          Venta
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-semibold tracking-tight text-sm hover:bg-gray-800 transition duration-300 ease-in-out hover:text-white">
          <Link href="/dolaroficial/compra">
            {isLoading ? <LoadingComponent /> : dolarOficialNombre}
          </Link>
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-normal tracking-tight text-sm">
          {isLoading ? <LoadingComponent /> : dolarOficialCompra}
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-normal tracking-tight text-sm">
          {isLoading ? <LoadingComponent /> : dolarOficialVenta}
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-semibold tracking-tight text-sm hover:bg-gray-800 transition duration-300 ease-in-out hover:text-white">
          <Link href="/dolarblue/compra">
            {isLoading ? <LoadingComponent /> : dolarBlueNombre}
          </Link>
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-normal tracking-tight text-sm">
          {isLoading ? <LoadingComponent /> : dolarBlueCompra}
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-normal tracking-tight text-sm">
          {isLoading ? <LoadingComponent /> : dolarBlueVenta}
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-semibold tracking-tight text-sm hover:bg-gray-800 transition duration-300 ease-in-out hover:text-white">
          <Link href="/dolarbolsa/compra">
            {isLoading ? <LoadingComponent /> : dolarBolsaNombre}
          </Link>
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-normal tracking-tight text-sm">
          {isLoading ? <LoadingComponent /> : dolarBolsaCompra}
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-normal tracking-tight text-sm">
          {isLoading ? <LoadingComponent /> : dolarBolsaVenta}
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-semibold tracking-tight text-sm hover:bg-gray-800 transition duration-300 ease-in-out hover:text-white">
          <Link href="/dolarccl/compra">
            {isLoading ? <LoadingComponent /> : dolarCCLNombre}
          </Link>
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-normal tracking-tight text-sm">
          {isLoading ? <LoadingComponent /> : dolarCCLCompra}
        </div>
        <div className="px-6 py-4 bg-white text-gray-700 font-normal tracking-tight text-sm">
          {isLoading ? <LoadingComponent /> : dolarCCLVenta}
        </div>
      </div>
    </div>
  );
};

export default Table;
