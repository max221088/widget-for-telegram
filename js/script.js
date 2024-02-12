function loadEnvFile() {
  return fetch(".env").then((response) => response.text());
}

function parseEnvFile(envFile) {
  const lines = envFile.split("\n");
  const envVariables = {};
  lines.forEach((line) => {
    const [key, value] = line.split("=");
    envVariables[key.trim()] = value.trim();
  });
  return envVariables;
}
let apiKey = null;
loadEnvFile()
  .then(parseEnvFile)
  .then((envVariables) => {
    apiKey = envVariables.API_KEY;

    new window.CDEKWidget({
      from: "Новосибирск",
      root: "cdek-map",
      apiKey: apiKey,
      servicePath: envVariables.SERVICE_PATH,
      defaultLocation: "Новосибирск",
      onReady() {
        console.log("Виджет загружен");
      },
      onCalculate() {
        console.log("Расчет стоимости доставки произведен");
      },
      onChoose(par1, par2, par3, par4) {
        console.log("Доставка выбрана");
        console.log("1", par1);
        console.log("2", par2);
        console.log("3", par3);
        console.log("4", par4);
      },
    });
  })
  .catch((error) => {
    console.error("Error loading .env file:", error);
  });

const tg = new window.Telegram.WebApp();
const close = document.getElementById("close");
close.addEventListener("click", tg.close());
