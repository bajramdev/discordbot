
        let message = "bajram@gmail.com"

        let mail =  message.split('');
        let arr = mail.lastIndexOf("@").valueOf();
        let removed = mail.splice(10, arr)

        let randomIndex = mail[Math.floor(Math.random() * Math.floor(mail.length))];
        let randomIndex1 = mail[Math.floor(Math.random() * Math.floor(mail.length))];
        let concaunated = randomIndex + randomIndex1;

        console.log(concaunated);


