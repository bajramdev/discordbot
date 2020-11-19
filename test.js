
        let message = "arfiesty0@gmail.com"


       let mail =  message.split('');
        let arr = mail.lastIndexOf("@").valueOf();
        let removed = mail.splice(9, arr)

        console.log(arr);
        console.log(removed);
        console.log(mail);


