export const getData = async (endpoint: string) => {
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = res?.json();
  return data;
};
