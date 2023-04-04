self.addEventListener("push", (event) => {
  const body = event.data?.text() ?? "";

  event.waitUntil(
    self.registration.showNotification("PushNotifications", {
      body: body,
      icon: "https://example.com/icon.png",
    })
  );
});
