const showUserLocation = () => {

    navigator.geolocation.getCurrentPosition(console.log,console.error)

    console.log('immediately after invoking getCurrentPosition')
}

showUserLocation()