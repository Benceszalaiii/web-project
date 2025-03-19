"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeo = getGeo;
var Side;
(function (Side) {
    Side[Side["LEFT"] = 0] = "LEFT";
    Side[Side["RIGHT"] = 1] = "RIGHT";
})(Side || (Side = {}));
let e1;
let e2;
let map1; 
let map2;
document.addEventListener("DOMContentLoaded", ()=> {
     e1 = document.getElementById("map1");
     e2 = document.getElementById("map2");
     map1 = L.map(e1).setView([51.505, -0.09], 6);
     map2 = L.map(e2).setView([51.505, -0.09], 6);
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);
})
function getGeo(circuit_id, side) {
    if (map1 && map2) {
        fetch(`../json/circuits_geo/${circuit_id}`).then((res) => {
            res.json().then((data) => {
                console.log(data.bbox);
                let vec = [0, 0]
                if (data.bbox[0] > 180){
                    vec[0] = data.bbox[0] - 180;
                }
                else {
                    vec[0] = data.bbox[0];
                }
                if (data.bbox[1] > 180){
                    vec[1] = data.bbox[1] 
                    + 180
                }
                else{
                    vec[1] = data.bbox[1]
                }
                if (side === "left") {
                    L.geoJSON(data).addTo(map1);
                    map1.setView([vec[1], vec[0]], 13)
                }
                else{
                    L.geoJSON(data).addTo(map2);
                    map2.setView([vec[1], vec[0]], 13)   
                }
            });
        });
    }
}
