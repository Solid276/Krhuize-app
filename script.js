const tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.setText("Send from Main Button");
tg.MainButton.show();

tg.MainButton.onClick(() => {
  tg.sendData("MainButton clicked from Telegram Mini App!");
});

document.getElementById("sendBtn").addEventListener("click", () => {
  tg.sendData("Button inside the page clicked!");
});
