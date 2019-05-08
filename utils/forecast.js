const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c20d68f4a42fcc9c08b11e21e625b76f/'+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)
    request({url:url,json:true}, (err,res) => {
        if(err){
            callback("Unable to connect to location services.", undefined)
        } else if (res.body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, res.body.daily.data[0].summary+" It is currently "+ res.body.currently.temperature+" degrees out. There is a "+ res.body.currently.precipProbability+"% chance of rain.")
        }
    })
}

module.exports = forecast