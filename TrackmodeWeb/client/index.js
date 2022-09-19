const io = require("socket.io-client");
const socket = io("http://192.168.0.10:5000");
const { exec } = require("child_process");
const Pis = require("./Models/Pis");
// const Users = require("./Models/Users");
const { Sequelize } = require("sequelize");
const moment = require('moment');
// const sequelize = require("sequelize");
const db = require('./Config/database');

let PI = "pi3";

let startTime;
let endTime;

onError = (err, addr) =>{
  console.log(err);
  endTime = new Date();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;
  var seconds = Math.round(timeDiff);
  if (seconds < 3){
    connectDevice(addr);
  }
}

let connectDevice = (btAddress) => {
  exec("hcitool cc " + btAddress, (error, stdout, stderr) => {
    if (error || stderr) {
      onError(error, btAddress);
    } else {
      measureRSSI(btAddress);
    }
  });
};

let measureRSSI = (btAddress) => {
  exec("hcitool rssi " + btAddress, (error, stdout, stderr) => {
    if (error || stderr) {
      onError(error, btAddress);
    } else {
      rssi = stdout.match(/[\-]*[0-9]+/);

      updateDB(btAddress, rssi);

      disconnectDevice(btAddress);
    }
  });
};

async function updateDB(btAddress, rssi) {
  let transaction;
  try {
    transaction = await db.transaction();
    await Pis.update(
      { watch: btAddress, rssi: rssi.toString(), updatetime: moment().format("HH:mm:ss") },
      { where: Sequelize.and({ pi: PI, watch: btAddress }) }
    );
    await transaction.commit();
  } catch (error) {
    console.log(error);
  }
}

let disconnectDevice = (btAddress) => {
  exec("hcitool dc " + btAddress, (error, stdout, stderr) => {
    if (error) {
      disconnectDevice(btAddress);
    } else if (stderr){
      disconnectDevice(btAddress);
    }
    if (stdout) {
      disconnectDevice(btAddress);
    }
  });
};

socket.on(PI, (data)=>{
  startTime = new Date();
  connectDevice(data.watch);
})
