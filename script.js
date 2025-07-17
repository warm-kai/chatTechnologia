async function solveMath() {
  const problem = document.getElementById('mathInput').value;
  document.getElementById('result').innerText = "Solving...";

  // Gemini API (you'll need to use Google Cloud + API key)
  const response = await fetch("https://YOUR_GEMINI_ENDPOINT_HERE", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Solve: ${problem}` }] }]
    })
  });

  const data = await response.json();
  const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Error solving";

  document.getElementById('result').innerHTML = `<pre>${answer}</pre>`;
}
