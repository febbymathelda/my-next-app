export default async function handler(req, res) {
    const apiKey = '6c2235de3f7ce80c2696d0e695f1174d'; 
    const city = 'Malang'; 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    res.status(200).json(data);
  }
  