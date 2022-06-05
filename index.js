function updateMap() {
  console.log("Updating the data every 5 secs")
    fetch("data.json")//fetch api to fetch data
        //promises
        .then(response => response.json())
        .then((rsp) => {
            //console.log(rsp.data)

            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                
                cases=element.infected
                if(cases>255){
                    color="rgb(255,0,0)";
                }

                else
                {
                    color=`rgb(${cases},0,0)`;
                }
                
                //mark on the map
                new mapboxgl.Marker({

                    draggable: false,
                    color:color
                })
                    .setLngLat([longitude, latitude])
                    .setPopup(popup)
                    .addTo(map);

                    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                        'element.infected'
                        );
            });
        })

}
let interval=5000
setInterval(updateMap,interval);

//pk.eyJ1IjoicnVrYXRoMSIsImEiOiJja250dDI4YWQwNWI5MnRsZGNnNTliZTF0In0._vaf-NTsyjFd4MeQEpoeVQ