const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    console.log(formData.get("amount"));
});