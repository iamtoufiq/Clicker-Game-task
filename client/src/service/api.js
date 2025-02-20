const API_URL = "http://localhost:5000";

export const updateScore = async (userId) => {
  const response = await fetch(`${API_URL}/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });

  if (!response.ok) {
    throw new Error("Failed to update score");
  }

  return await response.json();
};

export const getUserData = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return await response.json();
};
