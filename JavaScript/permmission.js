
    navigator.permissions.query({name: 'microphone'})
    .then((permissionObj) => {
        console.log(permissionObj.state);
        const micper = permissionObj.state;
        if(micper == "denied"){
            alert("마이크 권한 거부됨");
        }else if(micper == "granted"){
            
        }else if(micper == "prompt"){
            alert("마이크 권한 요청 대기");
        }else{
            alert("?");
        }
    }).catch((error) => {
        console.log('Got error :', error);
    })

    navigator.permissions.query({name: 'camera'})
    .then((permissionObj) => {
        console.log(permissionObj.state);
        const caper = permissionObj.state;
        if(caper == "denied"){
            alert("카메라 권한 거부됨");
        }else if(caper == "granted"){
            
        }else if(caper == "prompt"){
            alert("카메라 권한 요청 대기");
        }else{
            alert("?");
        }
    }).catch((error) => {
        console.log('Got error :', error);
    })

    navigator.mediaDevices.getUserMedia({
        audio:true,
        video:true
    }).then();