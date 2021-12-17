async function hello() {

}

const sing = async() => {
    throw "oh no there is problem"
    return 'La la la la'
}

sing()
    .then( data =>{
        console.log("PROMISE RESOLVE WITH:", data)
    })
    .catch( error => {
        console.log("error is:", error)
    })

const delayedColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay) 
    })
}

async function rainbow() {
    await delayedColorChange('red',1000)
    await delayedColorChange('orange',1000)
    await delayedColorChange('yellow',1000)
    await delayedColorChange('green',1000)
    await delayedColorChange('blue',1000)
    await delayedColorChange('indigo',1000)

    return 'At the end of the rainbow'

}

rainbow().then(str => console.log('We are',str) )

//HANDLING ERRORS WITH TRY AND CATCH
const fakeRequest = (url) => {
    return new Promise((resolve, reject)=>{
        const rand = Math.random()
        setTimeout(()=>{
            if (rand<0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('REQUEST ERROR');
        },1000)
    })
}


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
    }
    catch (e) {
        console.log("Caught error with the name of", e)

    }
}
