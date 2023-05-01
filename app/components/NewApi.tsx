interface ApiResponse {
  [key: string]: any; // Change the value type to match the API response.
}

const apiUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

export const getApiData = async (): Promise<ApiResponse[]> => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
};
// DOLAR BLUE
export const dolar_blue_compra = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_blue_compra = data[1]?.casa?.compra;

  if (!dolar_blue_compra) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_blue_compra;
};
export const dolar_blue_nombre = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_blue_nombre = data[1]?.casa?.nombre;

  if (!dolar_blue_nombre) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_blue_nombre;
};

export const dolar_blue_venta = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_blue_venta = data[1]?.casa?.venta;

  if (!dolar_blue_venta) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_blue_venta;
};
// DOLAR OFICIAL
export const dolar_oficial_compra = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_oficial_compra = data[0]?.casa?.compra;

  if (!dolar_oficial_compra) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_oficial_compra;
};
export const dolar_oficial_venta = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_oficial_venta = data[0]?.casa?.venta;

  if (!dolar_oficial_venta) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_oficial_venta;
};
export const dolar_oficial_nombre = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_oficial_nombre = data[0]?.casa?.nombre;

  if (!dolar_oficial_nombre) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_oficial_nombre;
};
