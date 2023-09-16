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


![image](https://github.com/404error-dev/eagle_notifiche/assets/45904818/ac092837-4925-418f-af32-01ab3bb0b57d)
