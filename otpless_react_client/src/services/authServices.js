export const signIn = async (token) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BASE_URL}/verify-user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }
  );
  console.log(response, `inside signIn func res`);

  const data = await response.json();
  console.log(data, `inside signIn func data`);

  return data;
};
