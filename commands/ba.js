var asciify = require('asciify-image');
module.exports = {
    name: 'badapple',
    run: (client, message, args) => {
         var asciify = require('asciify-image');

         var options = {
            fit:    'box',
            width:  30,
            height: 30,
            color: false
            }
         
            asciify('frames/frame0.jpg', options, function (err, asciified) {
                console.log(asciified)
                message.channel.send('\`\`\`' + asciified + '\`\`\`', { split: true })
                
            });
               
            let i = 32;
            function myLoop() {     
              setTimeout(function() { 
                var options = {
                    fit:    'box',
                    width:  30,
                    height: 30,
                    color: false
                    }
                    asciify(`frames/frame${i}.jpg`, options, function (err, asciified) {
                        message.channel.send('\`\`\`' + asciified + '\`\`\`', { split: true })
                            
                    });  
                i++;                   
                if (i < 7000) {          
                  myLoop();           
                }                   
              }, 31)
            }
            
            myLoop();               
            
    }
}