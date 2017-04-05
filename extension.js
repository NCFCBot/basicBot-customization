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
            if(API.getWaitList().length > 20) {
                if (!toggle.hasClass("enabled")) {
                    toggle.click();
                }
            }
            if(API.getWaitList().length < 10) {
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
                    var sounds = Array("Nya! ", "Nyah! ", "Nyan! ", "Nyaaah! ", "Nyaa! ", "STAAAAHPP meowing at me! ", "ROX STAAAAHP! ");
                    API.sendChat("/me " + sounds[Math.floor(Math.random()*sounds.length)]);
                }
            }
        };


        bot.commands.woofCommand = {
            command: 'woof',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var sounds = Array("Woof! ", "Woooof! ", "SHADO STOPPP! ", "Grrrrr! ", "Wof ", "STAAAAHPP woofing at me! ");
                    API.sendChat("/me " + sounds[Math.floor(Math.random()*sounds.length)]);
                }
            }
        };
              bot.commands.loliCommand = {
            command: 'loli',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://image.prntscr.com/image/2e85dfb98bc5479d9ad9900608dac1b9.png");
                }
            }
        };
        
             bot.commands.plotCommand = {
            command: 'plot',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.makeagif.com/media/11-30-2015/JwWLXY.gif");
                }
            }
        };
        
            bot.commands.catplotCommand = {
            command: 'catplot',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://image.prntscr.com/image/bb0f011aef244cc1ac6022150f6d5ff0.png");
                }
            }
        };
        
            bot.commands.rektCommand = {
            command: 'rekt',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i0.kym-cdn.com/photos/images/masonry/000/739/555/d4c.gif");
                }
            }
        };
        
            bot.commands.banhammerCommand = {
            command: 'banhammer',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/O3DHIA5.gif");
                }
            }
        };
        
            bot.commands.rockCommand = {
            command: 'rock',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://66.media.tumblr.com/afaa3e27f774c3a391001ce90d5ebcfd/tumblr_mm1b8ysoEq1qklhrmo1_500.gif");
                }
            }
        };
        
            bot.commands.ritziesCommand = {
            command: 'ritzies',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.gifntext.com/99318-not-the-ritzies.gif");
                }
            }
        };
        
                    bot.commands.lifeCommand = {
            command: 'life',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://pa1.narvii.com/5778/4a263f135d32ba0bb1e4f466459d040653d221dd_hq.gif");
                }
            }
        };
        
                    bot.commands.firstbanhammerCommand = {
            command: 'firstbanhammer',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/t0zudbF.png");
                }
            }
        };
        
                    bot.commands.smellCommand = {
            command: 'smell',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://uploads.disquscdn.com/images/281a5b1b7268ec7497bea0cab218d63219af3aa46d99a34c42f50ef1312d9cd1.gif");
                }
            }
        };
        
                    bot.commands.botCommand = {
            command: 'bot',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://res.cloudinary.com/urbandictionary/image/upload/a_exif,c_fit,h_200,w_200/v1396227695/zjxrie5ljfnmbvznhdqh.jpg");
                }
            }
        };

                    bot.commands.fairylawCommand = {
            command: 'fairylaw',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://vignette4.wikia.nocookie.net/fairytail/images/6/6e/Fairy_Law.gif");
                }
            }
        };
        
                    bot.commands.trapCommand = {
            command: 'trap',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://66.media.tumblr.com/db145da80423cc223c45d7eae1eb1ab0/tumblr_o92199bqfv1qehrvso1_540.gif");
                }
            }
        };
        
                       bot.commands.wbCommand = {
            command: 'wb',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://data.whicdn.com/images/60559320/original.gif");
                }
            }
        };
        
                        bot.commands.noCommand = {
            command: 'no',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/LMvpzy2.gif");
                }
            }
        };
        
                        bot.commands.nopeCommand = {
            command: 'nope',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://s-media-cache-ak0.pinimg.com/236x/82/df/54/82df54bfa52d440e917bd241f58be337.jpg");
                }
            }
        };
        
                        bot.commands.pervCommand = {
            command: 'perv',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://a.disquscdn.com/uploads/mediaembed/images/3994/342/original.gif");
                }
            }
        };
        
                            bot.commands.justiceCommand = {
            command: 'justice',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://i1.wp.com/img1.ak.crunchyroll.com/i/spire4/664df21ea49bb57a05aea291751164441408288565_full.jpg");
                }
            }
        };

                            bot.commands.wakeupCommand = {
            command: 'wakeup',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://new4.fjcdn.com/gifs/Wake+up+toradora+style+d+more+here+wwwyoutubecom+user+squabanime+and+here_11e793_5134512.gif");
                }
            }
        };
        
                            bot.commands.banhammer2Command = {
            command: 'banhammer2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/207278951289061376/5ece5139902683bc72def4e6141cb7fb4004dc6578a7b734d87036eb5a9b5939.gif");
                }
            }
        };
        
                         bot.commands.nekoCommand = {
            command: 'neko',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/E2TzDxzrWXLDG/giphy.gif");
                }
            }
        };
        
                                 bot.commands.cute2Command = {
            command: 'cute2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/uHITbiB.gif");
                }
            }
        };
        
                                    bot.commands.pikaCommand = {
            command: 'pika',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/pOrR86YSW5JYc/giphy.gif");
                }
            }
        };
        
                                    bot.commands.feelsCommand = {
            command: 'feels',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/77jfeGVrp5mKY/giphy.gif");
                }
            }
        };
        
                                bot.commands.failCommand = {
            command: 'fail',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://discordcdn.com/attachments/206337582739619841/210490466049851392/GwDmB2M_700wa_0.gif");
                }
            }
        };
        
                                        bot.commands.gnCommand = {
            command: 'gn',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/oEMMlQD.gif");
                }
            }
        };
        
                                                bot.commands.godlyfpCommand = {
            command: 'godlyfp',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://vignette2.wikia.nocookie.net/ssb/images/a/ab/Jesus_facepalm.jpg");
                }
            }
        };
        
                                                        bot.commands.impliedfpCommand = {
            command: 'impliedfp',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://facepalm.motifake.com/image/demotivational-poster/0912/implied-facepalm-implied-facepalm-demotivational-poster-1259858393.jpg");
                }
            }
        };
        
                                bot.commands.realplotCommand = {
            command: 'realplot',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://megumi.img.s3.amazonaws.com/ceb1a1b19df912403b0204fb50148e95.gif");
                }
            }
        };
        
                                        bot.commands.tryitCommand = {
            command: 'tryit',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/lYCoU1a.gif");
                }
            }
        };
        
                                    bot.commands.partyCommand = {
            command: 'party',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/ZRsoWfQYGpWhy/giphy.gif");
                }
            }
        };
        
                                bot.commands.profanityCommand = {
            command: 'profanity',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://memecrunch.com/meme/2JNIM/watch-your-profanity/image.png");
                }
            }
        };
        
                                bot.commands.karinlaughCommand = {
            command: 'karinlaugh',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/fSkcPtU.gif");
                }
            }
        };
        
                                        bot.commands.noregretCommand = {
            command: 'noregret',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/MKwNdPd.gif");
                }
            }
        };
        
                                    bot.commands.tinytrustCommand = {
            command: 'tinytrust',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://s-media-cache-ak0.pinimg.com/564x/85/65/82/856582bb3a8668a84c3df05427ebcc16.jpg");
                }
            }
        };
        
                                    bot.commands.brablaughCommand = {
            command: 'brablaugh',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/BriNP.gif");
                }
            }
        };
        
                                 bot.commands.glCommand = {
            command: 'gl',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://49.media.tumblr.com/ae34d3df51edc011da51ed7c1e26aefe/tumblr_o0g034ge1B1sa07uto1_540.gif");
                }
            }
        };
        
                                    bot.commands.grouphugCommand = {
            command: 'grouphug',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/218689694018437120/XSmLDWx.gif");
                }
            }
        };
        
                                            bot.commands.bot2Command = {
            command: 'bot2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://www.rustywalrus.com/images/lg/d0.jpg");
                }
            }
        };
        
                                            bot.commands.danceCommand = {
            command: 'dance',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/B03QOLy.gif");
                }
            }
        };
        
                                            bot.commands.bullshitCommand = {
            command: 'bullshit',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/219011350158901249/ezgif.com-video-to-gif.gif");
                }
            }
        };
        
                                        bot.commands.guiltyCommand = {
            command: 'guilty',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://66.media.tumblr.com/7d613b6ca2d5dad3748f20c924ab1779/tumblr_inline_nlghh1foGJ1swlxsk.gif");
                }
            }
        };
        
                                                bot.commands.stayawakeCommand = {
            command: 'stayawake',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://www.lovethisgif.com/uploaded_images/7174-Cute-Cartoon-Cat-Drawing-Tumblr.gif");
                }
            }
        };
        
                                        bot.commands.coffeetimeCommand = {
            command: 'coffeetime',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://media2.giphy.com/media/687qS11pXwjCM/giphy.gif");
                }
            }
        };
        
                                    bot.commands.shipCommand = {
            command: 'ship',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/3oz8xDWQl1K5LB9UIg/giphy.gif");
                }
            }
        };
        
                                            bot.commands.fyesCommand = {
            command: 'fyes',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://static1.e621.net/data/6f/dc/6fdc4750888c33990777695a90a135bd.png");
                }
            }
        };
        
                                            bot.commands.innocentCommand = {
            command: 'innocent',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://static1.e621.net/data/dd/2a/dd2ae7ed3de9ddc06a1003b7143abc71.jpg");
                }
            }
        };
        
                                        bot.commands.gn2Command = {
            command: 'gn2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/xthao9n.gif");
                }
            }
        };
        
                                        bot.commands.partycatCommand = {
            command: 'partycat',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/nmsYm9iWKD8ac/giphy.gif");
                }
            }
        };
        
                                             bot.commands.hypnotoadCommand = {
            command: 'hypnotoad',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://mlpforums.com/uploads/post_images/img-1384034-1-Bxp9A4B.gif");
                }
            }
        };
        
                                            bot.commands.stressedCommand = {
            command: 'stressed',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/221729203140296725/tumblr_miy7lmhgvn1rkmjjzo1_500.gif");
                }
            }
        };
        
                                                bot.commands.criCommand = {
            command: 'cri',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://33.media.tumblr.com/205b4c6c68bdaa299d7f529f4a35cb05/tumblr_n7qysx1vL81qcwhdyo1_500.gif");
                }
            }
        };
        
                                                 bot.commands.cri1Command = {
            command: 'cri1',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/h44VUV1.gif");
                }
            }
        };
        
                                                bot.commands.gmCommand = {
            command: 'gm',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://img1.joyreactor.cc/pics/post/Anime-%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-Acchi-Kocchi-Tsumiki-Miniwa-454621.gif");
                }
            }
        };
        
                                            bot.commands.cuteCommand = {
            command: 'cute',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/0hvcXXS.gif");
                }
            }
        };
        
                                                    bot.commands.tableflip1Command = {
            command: 'tableflip1',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/ayAyZ6v.gif");
                }
            }
        };
        
                                                bot.commands.byeCommand = {
            command: 'bye',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/10LKovKon8DENq/giphy.gif");
                }
            }
        };
        
                                                bot.commands.sleepyCommand = {
            command: 'sleepy',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/VF1gegA.gif");
                }
            }
        };
        
                                            bot.commands.blushCommand = {
            command: 'blush',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://img.buzzfeed.com/buzzfeed-static/static/2014-06/4/16/enhanced/webdr03/anigif_enhanced-buzz-26711-1401913848-7.gif");
                }
            }
        };
        
                                                    bot.commands.megablushCommand = {
            command: 'megablush',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/q0SPSM1.gif");
                }
            }
        };
        
                                                bot.commands.evillaughCommand = {
            command: 'evillaugh',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://66.media.tumblr.com/c81445923f61afd3b42fc99273163785/tumblr_myyk5n1pjP1tok0bho1_500.gif");
                }
            }
        };
        
                                                bot.commands.headpatsCommand = {
            command: 'headpats',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/y0c7ZFK.gif");
                }
            }
        };
        
                                                bot.commands.teatimeCommand = {
            command: 'teatime',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://25.media.tumblr.com/f451844fa1c44f7e07fff34f44472cb9/tumblr_mvitntZkHM1rmhhnno1_500.gif");
                }
            }
        };
        
                                            bot.commands.cutedevilCommand = {
            command: 'cutedevil',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://i.imgur.com/d9B0R4W.gif");
                }
            }
        };
        
                                    bot.commands.attentionCommand = {
            command: 'attention',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/h0K8GGz.gif");
                }
            }
        };
        
                                            bot.commands.petsCommand = {
            command: 'pets',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/LRDanyb.gif");
                }
            }
        };
        
                                                    bot.commands.loliworshipCommand = {
            command: 'loliworship',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://img.ifcdn.com/images/ee9825fc34c4f5696ed7bec2b2161b6bcb5d9620213570da259dc08b20583f46_1.gif");
                }
            }
        };
        
                                                bot.commands.cutebiteCommand = {
            command: 'cutebite',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/227734348412092417/VPhAwVK_1.gif");
                }
            }
        };
        
                                                bot.commands.bribeCommand = {
            command: 'bribe',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/227844588059099137/tumblr_nxrq6qSHTE1tga1sco1_500.gif");
                }
            }
        };
        
                                                bot.commands.headsmashCommand = {
            command: 'headsmash',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://choualbox.com/Img/136967463577.gif");
                }
            }
        };
        
                                                bot.commands.remCommand = {
            command: 'rem',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://66.media.tumblr.com/4f48e0d634325bc00122839b0220cf66/tumblr_o6ii2t4mRU1ta7pubo1_500.gif");
                }
            }
        };
        
                                                bot.commands.remrageCommand = {
            command: 'remrage',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/dFazZWJ.gif");
                }
            }
        };
        
                                                 bot.commands.headshotCommand = {
            command: 'headshot',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://choualbox.com/Img/136967463577.gif");
                }
            }
        };
        
                                                   bot.commands.ashCommand = {
            command: 'ash',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/IYn9FvA.jpg");
                }
            }
        };
        
                                                     bot.commands.eatingCommand = {
            command: 'eating',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://68.media.tumblr.com/fd3f9f72db8a233e69f1abef0a41c453/tumblr_npcc08QXtu1upe1ufo1_540.gif");
                }
            }
        };
        
                                                      bot.commands.furryCommand = {
            command: 'furry',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://pre04.deviantart.net/f81b/th/pre/i/2015/221/6/e/im_a_furry_get_used_to_it_t_shirt_by_yukiin-d94zmha.png");
                }
            }
        };
        
                                                      bot.commands.kawaiiCommand = {
            command: 'kawaii',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/Nn1BIPIuWUblu/giphy.gif");
                }
            }
        };
        
                                                       bot.commands.backCommand = {
            command: 'back',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/233884507231485954/tumblr_ob8o7e6czw1qda6uso1_500.gif");
                }
            }
        };
        
                                                   bot.commands.feels2Command = {
            command: 'feels2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/234221379749281792/B9CU7AC.gif");
                }
            }
        };
        
                                                bot.commands.facepalmCommand = {
            command: 'facepalm',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/d2Z5caxpAqTPaVri/giphy.gif");
                }
            }
        };
        
                                               bot.commands.loveCommand = {
            command: 'love',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/VPEpl3E.gif");
                }
            }
        };
        
        
                                               bot.commands.nope2Command = {
            command: 'nope2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/USNlL9p2fxY6Q/giphy.gif");
                }
            }
        };
        
                                               bot.commands.senpaiCommand = {
            command: 'senpai',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://31.media.tumblr.com/tumblr_meapvb6j301rzgqyto1_500.png");
                }
            }
        };
        
                                                 bot.commands.senpaisharkCommand = {
            command: 'senpaishark',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/CDQ4lgD.gif");
                }
            }
        };
        
                                    bot.commands.competitionCommand = {
            command: 'competition',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/217612172199460864/221196320466141184/Nightcore_Fanclub_Icon_competition.jpg");
                }
            }
        };
        
                                                bot.commands.owoCommand = {
            command: 'owo',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/mhzmCqj.png");
                }
            }
        };
                
                                                bot.commands.discordCommand = {
            command: 'discord',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Nightcore Fanclub public discord: https://discord.gg/SSGJAnk");
                }
            }
        };
        
                                                     bot.commands.dance2Command = {
            command: 'dance2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://66.media.tumblr.com/31c91db0b76d312b966c6adfe1c3940a/tumblr_nz57a2TvRC1u17v9ro1_540.gif");
                }
            }
        };
        
                                                       bot.commands.gm2Command = {
            command: 'gm2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i1346.photobucket.com/albums/p682/Gfi2000/tumblr_mrp5mm5X111syw16so1_500_zps1936a1c8.gif");
                }
            }
        };
        
                                                        bot.commands.leekspinCommand = {
            command: 'leekspin',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://stream1.gifsoup.com/view4/1901817/miku-leekspin-o.gif");
                }
            }
        };
        
                                                         bot.commands.leekspin2Command = {
            command: 'leekspin2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://cdn0.dailydot.com/uploaded/images/original/2012/3/11/Leekspin.gif");
                }
            }
        };
        
                                                        bot.commands.bakaCommand = {
            command: 'baka',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://24.media.tumblr.com/tumblr_ltjfcxi2X61r1n5pqo1_500.gif");
                }
            }
        };
        
                                                        bot.commands.ragequitCommand = {
            command: 'ragequit',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/4AlU5zzYoDJ9m/giphy.gif");
                }
            }
        };
        
                                                        bot.commands.hailkiritoCommand = {
            command: 'hailkirito',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://img.memecdn.com/all-hail-kirito-vi-britannia_o_975736.jpg");
                }
            }
        };
        
                                                          bot.commands.hailkirito2Command = {
            command: 'hailkirito2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.meme.am/instances/400x/61104610.jpg");
                }
            }
        };
        
                                                         bot.commands.wolfysongCommand = {
            command: 'wolfysong',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://embed.gyazo.com/4565bf286dfb709da62ec1bfa5fa71da.png");
                }
            }
        };
        
                                                          bot.commands.deniedCommand = {
            command: 'denied',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i0.wp.com/media.giphy.com/media/xT8qAZd4WeVKK3JxuM/giphy.gif");
                }
            }
        };
       
                                                          bot.commands.imgodCommand = {
            command: 'imgod',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://narcissisten.me.formecdn.com/2015/01/i-m-god.gif");
                }
            }
        };
        
                                                        bot.commands.hmmmCommand = {
            command: 'hmmm',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i3.kym-cdn.com/photos/images/newsfeed/000/949/654/a80.gif");
                }
            }
        };
        
                                                       bot.commands.bustedCommand = {
            command: 'busted',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://myanimelist.cdn-dena.com/s/common/uploaded_files/1448416762-c4fea080c937bdde8ac476e4bfa76efe.png");
                }
            }
        };
        
                                                       bot.commands.complaintCommand = {
            command: 'complaint',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/eNURAHh.gif");
                }
            }
        };
        
                                                      bot.commands.insoCommand = {
            command: 'inso',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/CXaoy2K.gif");
                }
            }
        };
        
                                                      bot.commands.coffeeCommand = {
            command: 'coffee',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/vMLdtuj.jpg");
                }
            }
        };
        
                                                bot.commands.watCommand = {
            command: 'wat',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/263497228985827328/7f83e550da264fc1948fffab7e8c59bd.png");
                }
            }
        };
        
                                                 bot.commands.cookiesCommand = {
            command: 'cookies',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/263497346346647554/sBs1ITniVp7tm.gif");
                }
            }
        };
        
                                                bot.commands.dance3Command = {
            command: 'dance3',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/263828817829822464/Youknowyunowhatanimewasscarynotanotherhah_579041_5340159.gif");
                }
            }
        };
        
                                                bot.commands.youdiedCommand = {
            command: 'youdied',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/263829360887201793/1363397443656_display.gif");
                }
            }
        };
        
                                                bot.commands.breakdanceCommand = {
            command: 'breakdance',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/269282119325319168/giphy.gif");
                }
            }
        };
        
                                                bot.commands.dodgeCommand = {
            command: 'dodge',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i3.kym-cdn.com/photos/images/original/000/906/455/51f.gif");
                }
            }
        };
        
                                                 bot.commands.authoritahCommand = {
            command: 'authoritah',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://media.giphy.com/media/BvqrnZWDzMCiY/giphy.gif");
                }
            }
        };
        
                                                bot.commands.pCommand = {
            command: 'p',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/MARHIif.gif");
                }
            }
        };
        
                                                bot.commands.fitemehCommand = {
            command: 'fitemeh',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/HvYicVT.gif");
                }
            }
        };
        
                                            bot.commands.wootwootCommand = {
            command: 'wootwoot',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/Z2YhHih.gif");
                }
            }
        };
        
                                         bot.commands.nomCommand = {
            command: 'nom',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/5TwOTbT.gif");
                }
            }
        };
        
                                            bot.commands.thumpCommand = {
            command: 'thump',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/SYoJQFQ.gif");
                }
            }
        };
        
                                              bot.commands.thump1Command = {
            command: 'thump1',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/gbcdErn.gif");
                }
            }
        };
        
                                              bot.commands.haiCommand = {
            command: 'hai',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/r6VSHc5.gif");
                }
            }
        };
        
                                             bot.commands.nyaaCommand = {
            command: 'nyaa',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/PY1O0yu.gif");
                }
            }
        };
        
                                              bot.commands.platCommand = {
            command: 'plat',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://i.imgur.com/hIkjTie.gif");
                }
            }
        };
        
                                             bot.commands.brofistCommand = {
            command: 'brofist',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/277580607351947265/tumblr_mpztecP2jZ1s3kgaso1_500.gif");
                }
            }
        };
        
                                               bot.commands.blush2Command = {
            command: 'blush2',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://cdn.discordapp.com/attachments/206337582739619841/280200783075737610/tumblr_m8inwrnXfm1r5wy3zo1_500.gif");
                }
            }
        };
        
                                                bot.commands.kingclapCommand = {
            command: 'kingclap',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/BU198OS.gif");
                }
            }
        };
        
                                                bot.commands.ninjaCommand = {
            command: 'ninja',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/Ak2lyqi.gif");
                }
            }
        };
        
                                                 bot.commands.forecastCommand = {
            command: 'forecast',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/c75SXBq.png");
                }
            }
        };
        
                                                  bot.commands.bhammerCommand = {
            command: 'bhammer',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/0F0UNXM.gif");
                }
            }
        };
        
                                             bot.commands.wincestCommand = {
            command: 'wincest',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i39.photobucket.com/albums/e155/teh_Itachi/bm3p8.jpg");
                }
            }
        };
        
                                              bot.commands.kiritoloveCommand = {
            command: 'kiritolove',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://s-media-cache-ak0.pinimg.com/564x/e2/6c/d5/e26cd5fb5ec5271ca5b465fa77ac9d54.jpg");
                }
            }
        };
                                               bot.commands.wolftfCommand = {
            command: 'wolftf',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://i.gyazo.com/77df61849e9bf04cee817aadfe32b902.png");
                }
            }
        };
                                         bot.commands.ncfcCommand = {
            command: 'ncfc',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/LK80wvu.png");
                }
            }
        };
        
                                          bot.commands.awoooCommand = {
            command: 'awooo',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("https://i.gyazo.com/2c2233256cbe3332efcf14128ec6222d.png");
                }
            }
        };
                                              bot.commands.remramCommand = {
            command: 'remram',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/fcpxU8B.gif");
                }
            }
        };
                                                 bot.commands.emotesCommand = {
            command: 'emotes',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me RCS emotes: http://tiny.cc/emotes");
                }
            }
        };
                                                bot.commands.rdjappCommand = {
            command: 'rdjapp',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Our Resident DJ applications are now open! To apply follow the link: https://ncfc.typeform.com/to/ORo7VO");
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
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 6.5,
        autodisable: false,
        commandCooldown: 0,
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
            ["bq", "The song has really bad quality and therefore it was skipped. "],
            ["unavailable", "The song you played was not available for some users. "],
            ["length", "The song you played was too long. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 10,
        motd: "Welcome To NCFC Enjoy the Music and Follow the Rules! Miku-Plugin: http://mikuplugin.nightcore-fantasia.net/ RCS-Plugin: https://rcs.radiant.dj/ . Public Discord For the Community: https://discord.gg/SSGJAnk " ,
        filterChat: true,
        etaRestriction: true,
        welcome: true,
        mehSkip: true,
        mehSkipLimit: 10,
        opLink: null,
        rulesLink: "Nightcore Fanclub Rules: https://goo.gl/5snvwI",
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "http://nightcorefc.com",
        intervalMessages: [],
        messageInterval: 10,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/NCFCBot/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            G: "https://rawgit.com/NCFCBot/basicBot-customization/master/blacklists/ExampleGlist.json",
            BQ: "https://rawgit.com/NCFCBot/basicBot-customization/master/blacklists/ExampleBQlist.json",
            OP: "https://rawgit.com/NCFCBot/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/NCFCBot/basicBot/master/basicBot.js', extend);

}).call(this);
