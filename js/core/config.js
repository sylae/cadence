var config = {
  // Settings which can be modified by users:
  defaultSettings: {
    // Which option container is open when the page loads.
    activeMenu: 'onlineList',
    // Which stylesheet is selected when the page loads.
    activeStyle: 'Carbon',

    // Format of the message timestamp.
    dateFormat: '(HH:mm:ss)',
    // Whether to display verbose log messages.
    verbose: true,

    markup: {
      // Render incoming HTML Markup.
      html: true,
      // Whether images are loaded.
      images: true,
      // Links are clickable.
      links: true,
      // Show emoticons as images.
      emoticons: true,
      // Show persistent colors.
      colors: true,
    },

    notifications: {
      // Defines if the document title blinks on new messages:
      blink: true,
      // Defines the blink interval in ms:
      blinkInterval: 500,
      // Defines the number of blink intervals:
      blinkIntervalNumber: 10,

      // The sound files used for notifications.
      sounds: {
        receive: 'sound_1',
        send: 'sound_2',
        enter: 'sound_3',
        leave: 'sound_4',
        info: 'sound_5',
        error: 'sound_6',
      },
      soundVolume: 100,

      // Warn before leaving the page.
      leavePage: true,
    },

    // Persistent font color that is displayed to other cadence users.
    textColor: null,

    xmpp: {
      room: 'lounge',
      autoJoin: true,
      sessionAuth: true,
    },
  },

  markup: {
    bbcode: {
      b: '<span style="font-weight:bold">{content}</span>',
      i: '<span style="font-style:italic">{content}</span>',
      u: '<span style="text-decoration:underline">{content}</span>',
      s: '<span style="text-decoration:line-through">{content}</span>',
      // blink: '<span style="text-decoration:blink">{content}</span>', // blink and you're dead.
      quote: '<q>{content}</q>',
      code: '<code>{content}</code>',
      url: '<a href="{option}">{content}</a>',
      img: '<img src="{content}" alt="Image({content}" />',
      color: '<span style="color:{option}">{content}</span>'
    },


    // Colors shown in palette selector.
    colorCodes: [
      '#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#FF0000', '#DC143C',
      '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585',
      '#DB7093', '#FFA07A', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500',
      '#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5',
      '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#E6E6FA', '#D8BFD8', '#DDA0DD',
      '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2',
      '#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082', '#483D8B', '#6A5ACD',
      '#7B68EE', '#ADFF2F', '#7FFF00', '#7CFC00', '#00FF00', '#32CD32', '#98FB98',
      '#90EE90', '#00FA9A', '#00FF7F', '#3CB371', '#2E8B57', '#228B22', '#008000',
      '#006400', '#9ACD32', '#6B8E23', '#808000', '#556B2F', '#66CDAA', '#8FBC8F',
      '#20B2AA', '#008B8B', '#008080', '#00FFFF', '#00FFFF', '#E0FFFF', '#AFEEEE',
      '#7FFFD4', '#40E0D0', '#48D1CC', '#00CED1', '#5F9EA0', '#4682B4', '#B0C4DE',
      '#B0E0E6', '#ADD8E6', '#87CEEB', '#87CEFA', '#00BFFF', '#1E90FF', '#6495ED',
      '#4169E1', '#0000FF', '#0000CD', '#00008B', '#000080', '#191970', '#FFF8DC',
      '#FFEBCD', '#FFE4C4', '#FFDEAD', '#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F',
      '#F4A460', '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#8B4513', '#A0522D',
      '#A52A2A', '#800000', '#FFFFFF', '#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9',
      '#808080', '#696969', '#778899', '#708090', '#2F4F4F', '#000000'
    ],

    emoticons: {
      general: {
        baseURL: 'img/emoticons/general/',
        codes: {
          ':)': 'smile.png',
          ':(': 'sad.png',
          ';)': 'wink.png',
          ':P': 'razz.png',
          ':D': 'grin.png',
          ':|': 'plain.png',
          ':O': 'surprise.png',
          ':?': 'confused.png',
          '8o': 'eek.png',
          ':-(': 'crying.png',
          ':-*': 'kiss.png',
          'O:-D': 'angel.png',
          '>:-D': 'devilish.png',
          ':favorite:': 'favorite.png'
        },
      },
      pony: {
        baseURL: 'img/emoticons/mlp/',
        codes: {
          ':angel:': 'angel.png',
          ':abbored:': 'abbored.png',
          ':abhuh:': 'abhuh.png',
          ':absmile:': 'absmile.png',
          ':abwut:': 'abwut.png',
          ':abmeh:': 'abmeh.png',
          ':ajbaffle:': 'ajbaffle.png',
          ':ajcower:': 'ajcower.png',
          ':ajfrown:': 'ajfrown.png',
          ':ajhappy:': 'ajhappy.png',
          ':ajlie:': 'ajlie.png',
          ':ajsly:': 'ajsly.png',
          ':ajsup:': 'ajsup.png',
          ':ajugh:': 'ajugh.png',
          ':ajwut:': 'ajwut.png',
          ':hmmm:': 'hmmm.png',
          ':squintyjack:': 'squintyjack.png',
          ':applederp:': 'applederp.png',
          ':aran:': 'aran.png',
          ':bonbon:': 'bonbon.png',
          ':punchdrunk:': 'punchdrunk.png',
          ':thehorror:': 'thehorror.png',
          ':eeyup:': 'eeyup.png',
          ':macintears:': 'macintears.png',
          ':swagintosh:': 'swagintosh.png',
          ':cadence:': 'cadence.png',
          ':celestia:': 'celestia.png',
          ':celestiamad:': 'celestiamad.png',
          ':celestiawut:': 'celestiawut.png',
          ':cheerilee:': 'cheerilee.png',
          ':chrysalis:': 'chrysalis.png',
          ':cockatrice:': 'cockatrice.png',
          ':colgate:': 'colgate.png',
          ':crackle:': 'crackle.png',
          ':derp:': 'derp.png',
          ':derpwizard:': 'derpwizard.png',
          ':derpyhappy:': 'derpyhappy.png',
          ':derpyshock:': 'derpyshock.png',
          ':priceless:': 'priceless.png',
          ':whooves:': 'whooves.png',
          ':flutterblush:': 'flutterblush.png',
          ':flutterfear:': 'flutterfear.png',
          ':flutterjerk:': 'flutterjerk.png',
          ':fluttershh:': 'fluttershh.png',
          ':fluttershy:': 'fluttershy.png',
          ':fluttersrs:': 'fluttersrs.png',
          ':flutterwhoa:': 'flutterwhoa.png',
          ':flutterwink:': 'flutterwink.png',
          ':flutteryay:': 'flutteryay.png',
          ':yay:': 'flutteryay.png',
          ':loveme:': 'loveme.png',
          ':flutterroll:': 'flutterroll.png',
          ':gilda:': 'gilda.png',
          ':gin:': 'gin.png',
          ':grannysmith:': 'grannysmith.png',
          ':lunagasp:': 'lunagasp.png',
          ':lunasad:': 'lunasad.png',
          ':lunateehee:': 'lunateehee.png',
          ':nmm:': 'nmm.png',
          ':lunawait:': 'lunawait.png',
          ':happyluna:': 'happyluna.png',
          ':lyra:': 'lyra.png',
          ':lyracup:': 'lyracup.png',
          ':nebponder:': 'nebponder.png',
          ':octavia:': 'octavia.png',
          ':photofinish:': 'photofinish.png',
          ':ppboring:': 'ppboring.png',
          ':hahaha:': 'hahaha.png',
          ':huhhuh:': 'huhhuh.png',
          ':ppcute:': 'ppcute.png',
          ':ppseesyou:': 'ppseesyou.png',
          ':ohhi:': 'ohhi.png',
          ':party:': 'party.png',
          ':joy:': 'joy.png',
          ':pinkamina:': 'pinkamina.png',
          ':pinkiefear:': 'pinkiefear.png',
          ':ppshrug:': 'ppshrug.png',
          ':pinkieawe:': 'pinkieawe.png',
          ':rdannoyed:': 'rdannoyed.png',
          ':rdcool:': 'rdcool.png',
          ':rdeyebrow:': 'rdeyebrow.png',
          ':rdhappy:': 'rdhappy.png',
          ':louder:': 'louder.png',
          ':rdhuh:': 'rdhuh.png',
          ':gross:': 'gross.png',
          ':wingboner:': 'rdsitting.png',
          ':awwyeah:': 'awwyeah.png',
          ':rdsad:': 'rdsad.png',
          ':soawesome:': 'soawesome.png',
          ':rdsalute:': 'rdsalute.png',
          ':rdsitting:': 'rdsitting.png',
          ':rdsmile:': 'rdsmile.png',
          ':rdwut:': 'rdwut.png',
          ':rdsmirk:': 'rdsmirk.png',
          ':rarityannoyed:': 'rarityannoyed.png',
          ':raritydaww:': 'raritydaww.png',
          ':raritydress:': 'raritydress.png',
          ':rarityjudge:': 'rarityjudge.png',
          ':raritynews:': 'raritynews.png',
          ':rarityprimp:': 'rarityprimp.png',
          ':raritysad:': 'raritysad.png',
          ':fabulous:': 'fabulous.png',
          ':wahaha:': 'wahaha.png',
          ':raritywhine:': 'raritywhine.png',
          ':raritywhy:': 'raritywhy.png',
          ':raritywut:': 'raritywut.png',
          ':rarityyell:': 'rarityyell.png',
          ':rarishock:': 'rarishock.png',
          ':aaaaa:': 'rarishock.png',
          ':scootacheer:': 'scootacheer.png',
          ':scootaloo:': 'scootaloo.png',
          ':cutealoo:': 'cutealoo.png',
          ':scootaplease:': 'scootaplease.png',
          ':scootaderp:': 'scootaderp.png',
          ':shiningarmor:': 'shiningarmor.png',
          ':silverspoon:': 'silverspoon.png',
          ':snails:': 'snails.png',
          ':snowflake:': 'snowflake.png',
          ':yeah:': 'snowflake.png',
          ':manspike:': 'manspike.png',
          ':spikenervous:': 'spikenervous.png',
          ':allmybits:': 'allmybits.png',
          ':spikepushy:': 'spikepushy.png',
          ':noooo:': 'noooo.png',
          ':spikewtf:': 'spikewtf.png',
          ':takealetter:': 'takealetter.png',
          ':spikemeh:': 'spikemeh.png',
          ':spikeohshit:': 'spikeohshit.png',
          ':spitfire:': 'spitfire.png',
          ':sotrue:': 'sotrue.png',
          ':sbstare:': 'sbstare.png',
          ':sbbook:': 'sbbook.png',
          ':dumbfabric:': 'dumbfabric.png',
          ':ohcomeon:': 'ohcomeon.png',
          ':sybeam:': 'sybeam.png',
          ':syblush:': 'syblush.png',
          ':syfear:': 'syfear.png',
          ':syrape:': 'syrape.png',
          ':sydrunk:': 'sydrunk.png',
          ':sysad:': 'sysad.png',
          ':sywtf:': 'sywtf.png',
          ':sywut:': 'sywut.png',
          ':sycastic:': 'sycastic.png',
          ':trixiesmug:': 'trixiesmug.png',
          ':fillytgap:': 'fillytgap.png',
          ':twicane:': 'twicane.png',
          ':twiponder:': 'twiponder.png',
          ':twipride:': 'twipride.png',
          ':twibeam:': 'twibeam.png',
          ':twicrazy:': 'twicrazy.png',
          ':facehoof:': 'facehoof.png',
          ':twirage:': 'twirage.png',
          ':twiright:': 'twiright.png',
          ':twismile:': 'twismile.png',
          ':twismug:': 'twismug.png',
          ':twisquint:': 'twisquint.png',
          ':twistare:': 'twistare.png',
          ':rapidash:': 'twirage.png',
          ':dj:': 'dj.png',
          ':vsbass:': 'vsbass.png',
          ':vscurious:': 'vscurious.png',
          ':vsdeal:': 'vsdeal.png',
          ':vsderp:': 'vsderp.png',
          ':vsfilly:': 'vsfilly.png',
          ':vshair:': 'vshair.png',
          ':vshappy:': 'vshappy.png',
          ':vshey:': 'vshey.png',
          ':vshooves:': 'vshooves.png',
          ':vsjuice:': 'vsjuice.png',
          ':vslook:': 'vslook.png',
          ':vslying:': 'vslying.png',
          ':vsmine:': 'vsmine.png',
          ':vsmog:': 'vsmog.png',
          ':vssquint:': 'vssquint.png',
          ':vsnope:': 'vsnope.png',
          ':vsohyou:': 'vsohyou.png',
          ':vsomg:': 'vsomg.png',
          ':vsoooo:': 'vsoooo.png',
          ':vssad:': 'vssad.png',
          ':vssup:': 'vssup.png',
          ':vstear:': 'vstear.png',
          ':vswink:': 'vswink.png',
          ':vswtf:': 'vswtf.png',
          ':zecora:': 'zecora.png',
          ':yes:': 'yesberry.png',
          ':no:': 'noberry.png',
          ':ponywarn:': 'ponywarn.png'
        }
      }
    }
  },

  // Defines the available sounds loaded on chat start:
  sounds: ['droneriots', 'sound_1', 'sound_2', 'sound_3', 'sound_4', 'sound_5', 'sound_6', 'yay'],
  soundURL: 'sounds/',

  xmpp: {
    // This is NOT the server, but the domain portion of the JID.
    domain: 'eris.ermarian.net',
    boshURL: 'http://eris.ermarian.net:5280/http-bind/',
    muc_service: 'conference.ermarian.net',
    sessionAuthURL: 'http://ermarian.net/smf/xmpp-login.php',
  },

  ui: {
    css: ['Carbon', 'Selenium', 'Helium', 'Technetium', 'Plum', 'Mercury', 'Uranium', 'Sulfur', 'dash', 'omg', 'Stygium'],
    cssURL: 'css/alt/',
    chatBotName: 'Ligrev',
    maxNickLength: 24,
    maxMessageLength: 1024,
  },

  poniconVersion: "v1.13",
};
