const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name,
    email,
    phone,
    subject,
    message,
  };

  try {
    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    alert(data.message);

  } catch (error) {
    console.log(error);
  }
};