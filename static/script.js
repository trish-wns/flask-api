document.getElementById("fetchBtn").addEventListener("click", () => {
  fetch("/hello")
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    })
    .catch(error => {
      document.getElementById("result").innerText = "Error fetching data.";
      console.error("Fetch error:", error);
    });
});
