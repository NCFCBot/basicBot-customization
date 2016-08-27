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
                    var sounds = Array("Nya! ", "Nyah! ", "Nyan! ", "Nyaaah! ", "Nyaa! ", "STAAAAHPP meowing at me! ");
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
        
                                 bot.commands.kawaiiCommand = {
            command: 'kawaii',
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
                    API.sendChat("https://67.media.tumblr.com/cd644307d1a2155602ce2ab1b33efa14/tumblr_n02ucqF8c11sp3mbro1_500.gif");
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
                    API.sendChat("http://65.media.tumblr.com/c2f8981c663c044d052732e3fca93a63/tumblr_inline_npogm47i241szu3bc_500.gif");
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
        
                                     bot.commands.hugCommand = {
            command: 'hug',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://data1.whicdn.com/images/64369475/large.gif");
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
                    API.sendChat("http://2new3.fjcdn.com/reaction_gifs/Since+when+was+keemstar+a+vegan+_00e2a958982ff5fa629af00cd5f944fb.gif");
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
        
        
         bot.commands.staff = {
            command: 'staff',  
            rank: 'residentdj',
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
        commandCooldown: 5,
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
        motd: "Welcome To NCFC Enjoy the Music and Follow the Rules! Miku-Plugin: http://mikuplugin.nightcore-fantasia.net/ RCS-Plugin: https://rcs.radiant.dj/ . Public Discord For the Community: https://discord.gg/SvS39Pw " ,
        filterChat: true,
        etaRestriction: true,
        welcome: true,
        mehSkip: true,
        mehSkipLimit: 10,
        opLink: null,
        rulesLink: null,
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
            OP: "https://rawgit.com/NCFCBot/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/NCFCBot/basicBot/master/basicBot.js', extend);

}).call(this);
