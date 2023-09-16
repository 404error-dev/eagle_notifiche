# eagle_notifiche
FiveM Standalone Notification System

Notification Type:

- Error = "errore"
- Success = "successo"
- Warn = "avviso"
- Information = "info"
- Normal Notification = nil

SERVER SIDE TRIGGER:
  TriggerClientEvent('eagle_notifiche:mostra', source, message, type)
  
CLIENT SIDE TRIGGER:
  TriggerEvent('eagle_notifiche:mostra', message, type)
  
EXAMPLE:


![image](https://github.com/404error-dev/eagle_notifiche/assets/45904818/aae53d4d-7ffe-4375-a4de-75402efd153e)
