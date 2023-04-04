import axios from "axios";
import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

interface Infos {
  device: string | undefined;
  browser: string | undefined;
  os: string | undefined;
}

export default function Notifications() {
  const [infos, setInfos] = useState({} as Infos);
  const [result, setResult] = useState("");
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();
    verifyIfItsPWA();

    setInfos({
      device: result.device.model,
      browser: result.browser.name,
      os: result.os.name,
    });
  }, []);

  function verifyIfItsPWA() {
    const isPWA = window.matchMedia("(display-mode: standalone)").matches;

    console.log(isPWA, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

    setIsPWA(isPWA);
  }

  async function handleSubscription() {
    const registration = await navigator.serviceWorker.register("sw.js", {
      scope: "./",
    });

    const result = await window.Notification.requestPermission();
    console.log(result);

    setResult(result);

    if (result === "granted") {
      console.log("test");

      await registration.showNotification("Hello World", {
        body: "My first notification on iOS",
      });
    }
  }

  return (
    <div>
      <button onClick={handleSubscription}>Deseje Receber Notificações?</button>
      {Object.keys(infos).length > 0 && (
        <div>
          <p>Dispositivo: {infos.device}</p>
          <p>Navegador: {infos.browser}</p>
          <p>Sistema Operacional: {infos.os}</p>
          <p>{result}</p>
          {isPWA && <p>É um PWA</p>}
        </div>
      )}
    </div>
  );
}
