function loadEnvFile() {
  return fetch("/.env").then((response) => response.text());
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

const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.setParams({
  color: "#143F6B",
  text: "Готово",
  textColor: "#F55353",
  сolor: "#143F6B",
});

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
      onChoose(type, tariff, address) {
        tg.MainButton.show();
        Telegram.WebApp.onEvent("mainButtonClicked", function () {
          tg.sendData(
            `Доставка выбрана!!! \nКод отделения ${address.postal_code} \nТип Доставки ${address.type}`
          );
        });
      },
    });
  })
  .catch((error) => {
    console.error("Error loading .env file:", error);
  });
