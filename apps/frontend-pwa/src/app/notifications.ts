export const subscribeToPushNotifications = async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: '<Your_Public_VAPID_Key>'
      });

      // Send subscription to the server
      await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Push notification subscription successful');
    } catch (error) {
      console.error('Failed to subscribe to push notifications', error);
    }
  } else {
    console.warn('Push notifications are not supported in this browser');
  }
};