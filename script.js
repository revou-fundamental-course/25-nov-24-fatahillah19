document.getElementById("calculateBtn").addEventListener("click", function () {
    const gender = document.querySelector('input[name="gender"]:checked');
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters
    const age = parseInt(document.getElementById("age").value);

    if (!gender || !weight || !height || !age) {
        alert("Harap lengkapi semua data!");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "Kekurangan Berat Badan";
    else if (bmi < 24.9) category = "Berat Badan Normal";
    else if (bmi < 29.9) category = "Berat Badan Berlebih";
    else category = "Obesitas";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>${category}</h3>
        <p><strong>${bmi}</strong></p>
        <button class="download-btn">Download Hasil BMI</button>
    `;
});
