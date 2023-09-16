RegisterNetEvent('eagle_notifiche:mostra')
AddEventHandler('eagle_notifiche:mostra', function(messaggio, tipo)
  if tipo == "errore" then
    SendNUIMessage({
      name = 'addNotification',
      tipo = "errore",
      messaggio = messaggio
    })
  elseif tipo == "successo" then
    SendNUIMessage({
      name = 'addNotification',
      tipo = "successo",
      messaggio = messaggio
    })
  elseif tipo == "info" then
    SendNUIMessage({
      name = 'addNotification',
      tipo = "info",
      messaggio = messaggio
    })
  elseif tipo == "avviso" then
    SendNUIMessage({
      name = 'addNotification',
      tipo = "avviso",
      messaggio = messaggio
    })
  else
    SendNUIMessage({
      name = 'addNotification',
      tipo = 'normale',
      messaggio = messaggio
    })
  end
end)