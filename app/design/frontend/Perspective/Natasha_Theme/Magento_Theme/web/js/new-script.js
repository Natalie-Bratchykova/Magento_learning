define(['matchMedia'], (mediaCheck)=>{
    return function(){
        const doSmthOnDesktop = () =>{
            console.log("this is for desktop")
        }

        const doSmthOnMobile = () =>{
            console.log('this is for mobile');
            
        }

        mediaCheck({
            media:'(min-width:768px)',
            entry: doSmthOnDesktop,
            exit: doSmthOnMobile
        })
    }
})
