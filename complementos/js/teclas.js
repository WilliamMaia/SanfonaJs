// fole g3682
var audios = {};
var audios_executados = {};

// carrega audios de teclados e baixos
carrega_audios = function() {
  var codigos = {};
  codigos['65'] = 1;
  codigos['83'] = 2;
  codigos['68'] = 3;
  codigos['70'] = 4;
  codigos['71'] = 5;
  codigos['72'] = 6;
  codigos['74'] = 7;
  codigos['75'] = 8;
  codigos['76'] = 9;
  codigos['186'] = 10;
  codigos['222'] = 11;
  codigos['90'] = 12;
  codigos['88'] = 13;
  codigos['67'] = 14;
  codigos['86'] = 15;
  codigos['66'] = 16;
  codigos['78'] = 17;
  codigos['188'] = 18;
  codigos['190'] = 19;
  codigos['81'] = 20;
  codigos['87'] = 21;
  codigos['69'] = 23;
  codigos['82'] = 24;
  codigos['84'] = 25;
  codigos['89'] = 26;
  codigos['85'] = 27;
  codigos['73'] = 28;
  codigos['79'] = 29;
  codigos['80'] = 30;
  codigos['49'] = 31;
  codigos['50'] = 32;
  codigos['51'] = 33;
  codigos['52'] = 34;
  codigos['53'] = 35;
  codigos['54'] = 36;
  codigos['55'] = 37;
  codigos['56'] = 38;
  codigos['57'] = 39;
  codigos['48'] = 41;

  for (var codigo in codigos) {
    // use hasOwnProperty to filter out keys from the Object.prototype
      if (codigos.hasOwnProperty(codigo)) {
          var audio = new Audio('../audio/teclado/leticce/'+codigos[codigo]+'.ogg');
          audios[''+codigo] = {'audio': audio,'executando': false};
      }
  }

}

carrega_audios();
console.log("Audios carregados");

$(document).keydown(function (e) {
  console.log("pressionado : "+e.which);
  var audio = audios[''+e.which];
  //console.log(audios_executados[''+e.which]);
  if(audio != null) {
    audio['audio'].volume = 0.6;
    audio['audio'].play();
    audio['executando'] = true;
    audios[''+e.which] = audio;
  }
});

$(document).keyup(function (e) {
  console.log("livre : "+e.which);
  var audio = audios[''+e.which];
  if(audio != null) {
    //diminuir audio até zerar
    setTimeout(function() {
      console.log("volume inicial: "+audio['audio'].volume);
      volume = audio['audio'].volume;
      while(volume > 0.1) {
        volume = volume - 0.01;
        audio['audio'].volume = volume;
        console.log("volume : "+audio['audio'].volume);
      }
      audio['audio'].pause();
      audio['audio'].currentTime = 0;
      audio['audio'].volume = 0.4;
      audio['executando'] = false;
      audios[''+e.which] = audio;
    },230);
  } // audio != null
});

// puxar foco para sanfona


//executa audio
inicia_audio = function (ctx,tecla) {
  console.log("audio iniciado");

  var node = ctx.childNodes[0];
  node.style.fill = '#555555';
  console.log(node.style.fill);
  console.log("a tecla é a "+tecla);
  var audio = audios['G#'];
  audio.play();
}
//para a execução dos audio
para_audio = function (ctx,tecla) {
  console.log("audio parado");
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
