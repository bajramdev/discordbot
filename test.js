

        function  dotTrick(message) {

            let mail = message.split('');
            let arr = mail.lastIndexOf("@", mail.length - 1).valueOf();


            let removed = mail.splice(arr, 10); // @gmail.com

            // add . inside random element
            let randomNumber = Math.floor(Math.random() * Math.floor(mail.length) + 1);
            let bajram = mail.join("")
            for (let i = 0; i < mail.length; i++) {
                var randomStr = bajram.substr(0, randomNumber) + "." + bajram.substr(randomNumber);
            }
            console.log(randomStr.concat(removed.join('')))
        }

        dotTrick("bajram@gmail.com")



        //let randomIndex = mail[Math.floor(Math.random() * Math.floor(mail.length))] + ".";

        //console.log(randomIndex);

