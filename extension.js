(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;
        var autoRoulette = true;

        //Load custom settings set below
        bot.retrieveSettings();

        // Auto Roulette
        setInterval(function () {
            if(autoRoulette === true) {
                API.sendChat("!roulette");
            }
        }, 1000 * 60 * 40);

        API.on(API.ADVANCE, function () {
            var toggle = $(".cycle-toggle");
            if(API.getWaitList().length > 25) {
                if (!toggle.hasClass("disabled")) {
                    toggle.click();
                }
            }
            if(API.getWaitList().length < 15) {
                if (toggle.hasClass("disabled")) {
                    toggle.click();
                }
            }
            
            //Check song in history
            setTimeout(function () {
                var len = bot.room.historyList.length;
                var temp = 0;
                for(var i = 1; i <= 50; i++) {
                    if((len - i - 1) < 0) {
                        break;
                    }
                    else {
                        temp = len - i - 1;
                    }
                    if(bot.room.historyList[temp][0] === API.getMedia().cid) {
                        API.sendChat("/me " + API.getMedia().title + " was played too recently!");
                        API.moderateForceSkip();
                        break;
                    }
                }
            }, 2000);
        });

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Gimme Bacon!!!");
                }
            }
        };

        //Display Blacklisted
        bot.commands.displayBlacklisted = {
            command: ['displaybl', 'dbl'],
            rank: 'user', //Feel free to change this if you want, I suggest only managers be able to use this
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    bot.logNewBlacklistedSongs();
                }
            }
        };

        bot.commands.automateRoulette = {
            command: ['aroulette', 'autoroulette'],
            rank: 'manager',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    autoRoulette = !autoRoulette;
                    API.sendChat("/me Roulette Automation set to " + autoRoulette);
                }
            }
        };

        bot.commands.meowCommand = {
            command: 'meow',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var sounds = Array("Nya! :cirLove: ", "Nyah! :cirLewd: ", "Nyan! :cirGlod: ", "Nyaaah! :nb3Gasm: ", "Nyaa! :nb3H: ", "Nyaalo! :nb3Hello: ");
                    API.sendChat("/me " + sounds[Math.floor(Math.random()*sounds.length)]);
                }
            }
        };

 bot.commands.staff = {
            command: 'staff',  
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("@staff");
                }
            }
        };
        
        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "BotX",
        language: "english",
        chatLink: "https://rawgit.com/NCFCBot/basicBot/master/lang/en.json",
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 20,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 6.5,
        autodisable: false,
        commandCooldown: 10,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["g", "The song doesn't fit the Genre of the room. "],
            ["unavailable", "The song you played was not available for some users. "],
            ["length", "The song you played was too long. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 10,
        motd: "Welcome To NCFC Enjoy the Music and Follow the Rules! " ,
        motd: "Miku-Plugin: javascript:(function(){$.getScript('https://dl.dropboxusercontent.com/s/hw1qoddiuwb0gts/Plugin.js');}()); " ,
        motd: "RCS-Plugin: https://rcs.radiant.dj/ " ,
        filterChat: true,
        etaRestriction: true,
        welcome: false,
        mehSkip: true,
        mehSkipLimit: 10,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "http://nightcorefc.com",
        intervalMessages: [],
        messageInterval: 6,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/NCFCBot/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            G: "https://rawgit.com/NCFCBot/basicBot-customization/master/blacklists/ExampleGlist.json",
            OP: "https://rawgit.com/NCFCBot/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/NCFCBot/basicBot/master/basicBot.js', extend);

}).call(this);
