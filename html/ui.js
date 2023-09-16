(function ($) {
  $.extend({
      playSound: function () {
        return $(
        '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
        +'<source src="' + arguments[0] + '" />'
        +'<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
        +'</audio>'
        ).appendTo('body');
      },
      stopSound: function () {
          $(".sound-player").remove();
      }
  });
})(jQuery);

$(function() {
  window.addEventListener('message', function(event) {
    if (event.data.name == "addNotification"){
      createnotify(event.data.messaggio, event.data.tipo);
    }
  });
});

var index = 0, notifys = [], maxOpened = 5;
function createnotify(messaggio, tipo) {
  var notify = {}
  notify.id = index++;
  if (tipo == "successo") {
    notify.code = '<div id="notify-'+notify.id+'" class="notify" style="border: 3px solid green;">'+'<span><img src="https://i.imgur.com/mh1XZNd.png">'+'<b><span style="color: green;">SUCCESSO</span></b> </br>'+messaggio+'</span>' +'</div>';
  } else if (tipo == "errore") {
    notify.code = '<div id="notify-'+notify.id+'" class="notify" style="border: 3px solid red;">'+'<span><img src="https://i.imgur.com/mh1XZNd.png">'+'<b><span style="color: red;">ERRORE</span></b> </br>'+messaggio+'</span>' +'</div>';
  } else if (tipo == "avviso") {
    notify.code = '<div id="notify-'+notify.id+'" class="notify" style="border: 3px solid #FDB611;">'+'<span><img src="https://i.imgur.com/mh1XZNd.png">'+'<b><span style="color: #FDB611;">AVVISO</span></b> </br>'+messaggio+'</span>' +'</div>';
  } else if (tipo == "info") {
    notify.code = '<div id="notify-'+notify.id+'" class="notify" style="border: 3px solid #0080FF;">'+'<span><img src="https://i.imgur.com/mh1XZNd.png">'+'<b><span style="color: #0080FF;">INFO</span></b> </br>'+messaggio+'</span>' +'</div>';
  } else {
    notify.code = '<div id="notify-'+notify.id+'" class="notify">'+'<span><img src="https://i.imgur.com/mh1XZNd.png">'+'<b><span style="color: #b24be9;">NOTIFICA</span></b> </br>'+messaggio+'</span>' +'</div>';
  }
  
  if (maxOpened && notifys.length >= maxOpened) {
    remove(notifys[0].id)
  }

  notifys.push(notify);
  $(notify.code).appendTo('box-notifica')
  $('#notify-'+notify.id).addClass('comparsa-notifica');
  $.playSound('./audio.mp3')
    setTimeout(function(){
      $('#notify-'+notify.id).removeClass('comparsa-notifica');
      remove(notify.id);
    }, 5000);
}

function remove(id) {
    var notify = findnotify(id);

    if (notify) {
        $('#notify-'+id).addClass('uscita-notifica')
        setTimeout(function() {
        $('#notify-'+id).css('display', 'none');
        $('#notify-'+id).remove();
        }, 500);
        var index = notifys.indexOf(notify)
        notifys.splice(index, 1)
    }
    
    function findnotify(notifyId) {
      for (var i = 0; i < notifys.length; i++) {
        if (notifys[i].id == id) {
          return notifys[i]
        }
      }
    }

}