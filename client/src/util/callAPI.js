function putCall(id){
    fetch("https://small-art-ab11.zjw-cors-anywhere.workers.dev/?http://challenge.z2o.cloud/challenges",
    {
        method: "PUT",
        headers: {
            "X-Challenge-Id": id,
        },
    })
    .then(response =>{
        return response.json();
    })
    .then(jsonResponse => {
        if(!jsonResponse.result){
            console.log(jsonResponse);
            console.log(Date.now());
            console.log(jsonResponse.actives_at - Date.now());
            setTimeout(putCall(jsonResponse.id), jsonResponse.actives_at - jsonResponse.called_at);
        }
        console.log(jsonResponse);
    })
    .catch(Error =>{
        console.log(Error);
    });
};


function callApi(){
    fetch("https://small-art-ab11.zjw-cors-anywhere.workers.dev/?http://challenge.z2o.cloud/challenges?nickname=HAL-ZorbaJWong",
    {
        method: "POST",
    })
    .then(response => {
        return response.json();
    })
    .then(jsonResponse => {
        setTimeout(putCall(jsonResponse.id), jsonResponse.actives_at - jsonResponse.called_at);
    })
    .catch(Error =>{
        console.log(Error);
    });
};

export default callApi;