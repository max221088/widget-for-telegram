const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.setParams({
  color: "#143F6B",
  text: "Готово",
  textColor: "#F55353",
  сolor: "#143F6B",
});

new window.CDEKWidget({
  from: "Новосибирск",
  root: "cdek-map",
  apiKey: import.meta.env.VITE_API_KEY,
  servicePath: import.meta.env.VITE_SERVICE_PATH,
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
