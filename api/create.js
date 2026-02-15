export default async function handler(req, res) {

if (req.method !== 'POST') {
return res.status(405).json({ error: 'Method not allowed' });
}

const { amount } = req.body;

// ⚠ GANTI DENGAN API KEY KAMU
const API_KEY = "f673b8c6942b44088e5b731a1f1343830a0d0ed45cec4614a02fd92480776722";

const response = await fetch("https://api.temanqris.com/v1/create-qris", {
method: "POST",
headers: {
"Authorization": "Bearer " + API_KEY,
"Content-Type": "application/json"
},
body: JSON.stringify({
amount: amount,
order_id: "INV-" + Date.now(),
expired: 60
})
});

const data = await response.json();

res.status(200).json(data);
}
