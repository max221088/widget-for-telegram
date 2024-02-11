new window.CDEKWidget({
  from: "Новосибирск",
  root: "cdek-map",
  apiKey: "7adfce21-96a1-4fbd-8dd7-730b5c307a48",
  servicePath: "http://localhost:2324/service.php",
  defaultLocation: "Новосибирск",
  onReady() {
    alert("Виджет загружен");
  },
  onCalculate() {
    alert("Расчет стоимости доставки произведен");
  },
  onChoose(par1, par2, par3, par4) {
    alert("Доставка выбрана");
    console.log("1", par1);
    console.log("2", par2);
    console.log("3", par3);
    console.log("4", par4);
  },
});
const tg = new window.Telegram.WebApp();
const close = document.getElementById("close");
close.addEventListener("click", tg.close());
