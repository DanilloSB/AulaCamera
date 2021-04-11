/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    let btnTirarFoto = document.getElementById("btnTirarFoto");
    btnTirarFoto.addEventListener('click', tirarFoto);

}

function tirarFoto(){
    if (!navigator.camera){
        alert("Erro o plugin do cordova não foi instalado");
    }
    
    var options =   {   quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        saveToPhotoAlbum: true,
        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
        encodingType: 0     // 0=JPEG 1=PNG
                    };
    
    let options2 = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: false,
        cameraDirection: 1,
        sourceType: Camera.PictureSourceType.CAMERA
                    }
    
    navigator.camera.getPicture(
        function(imgData){
            let imgHtmlTag = document.getElementById("imgHtmlTag");
            imgHtmlTag.src = "data:image/jpeg;base64,"+imgData;
        }, 
        function(err){
            alert(err);
        },  options2);
}