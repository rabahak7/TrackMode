import React, { Component, createRef, useEffect, useState } from "react";
import axios from "axios";
import rabah from "../assets/rabah.png";
import zifaan from "../assets/zifaan.png";
import peter from "../assets/peter.png";

const Map = () => {
    var [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("/data/users")
            .then((response) => {
                if (response.data.length > 0) {
                    setUsers(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="content">
            <Canvas data={users} />
        </div>
    );
}

class Canvas extends Component {

    state = {
        posX: [],
        posY: []
    }

    constructor(props) {
        super(props);
        this.myCanvas = createRef();
    }

    componentDidMount() {
        this.ctx = this.myCanvas.current.getContext('2d');
        // this.ctx.scale(1, 1)
        var x1 = 30, y1 = 800;
        var x2 = 30, y2 = 30;
        var x3 = 800, y3 = 425;
        // var x4 = 10, y4 = 790;
        // var x5 = 10, y5 = 100;
        // var x6 = 765, y6 = 780;
        var intervalId = setInterval(() => {
            // var watches = ['98:28:A6:D4:6F:0E', '98:28:A6:D4:6F:DB']
            // Deleted watch 98:28:A6:D4:6F:0E
            if (this.props.data) {
                this.props.data.map((user, idx) => {
                    console.log(user);
                    axios
                        .get("/data/pis/" + user.device)
                        .then(response => {
                            if (response.data.length == 3) {
                                console.log(response.data.length)
                                var cnt = 0;
                                var rs = [], xs = [], ys = [], wx, wy;
                                for (let dt of response.data) {
                                    // console.log(dt.rssi);
                                    if (dt.pi === 'pi1') {
                                        rs[cnt] = dt.rssi;
                                        rs[cnt] = (10 ** ((0 - (rs[cnt])) / (10 * 2))) * 100;
                                        xs[cnt] = x1;
                                        ys[cnt] = y1;
                                        cnt++;
                                    } else if (dt.pi === 'pi2') {
                                        rs[cnt] = dt.rssi;
                                        rs[cnt] = (10 ** ((0 - (rs[cnt])) / (10 * 2))) * 100;
                                        xs[cnt] = x2;
                                        ys[cnt] = y2;
                                        cnt++;
                                    } else if (dt.pi === 'pi3') {
                                        rs[cnt] = dt.rssi;
                                        rs[cnt] = (10 ** ((0 - (rs[cnt])) / (10 * 2))) * 100;
                                        xs[cnt] = x3;
                                        ys[cnt] = y3;
                                        cnt++;
                                    } 
                                    // else if (dt.pi === 'pi4') {
                                    //     rs[cnt] = dt.rssi;
                                    //     rs[cnt] = (10 ** ((0 - (rs[cnt])) / (10 * 2))) * 100;
                                    //     xs[cnt] = x4;
                                    //     ys[cnt] = y4;
                                    //     cnt++;
                                    // } else if (dt.pi === 'pi5') {
                                    //     rs[cnt] = dt.rssi;
                                    //     rs[cnt] = (10 ** ((0 - (rs[cnt])) / (10 * 2))) * 100;
                                    //     xs[cnt] = x5;
                                    //     ys[cnt] = y5;
                                    //     cnt++;
                                    // } else if (dt.pi === 'pi6') {
                                    //     rs[cnt] = dt.rssi;
                                    //     rs[cnt] = (10 ** ((0 - (rs[cnt])) / (10 * 2))) * 100;
                                    //     xs[cnt] = x6;
                                    //     ys[cnt] = y6;
                                    //     cnt++;
                                    // }
                                }

                                var A = -2 * xs[0] + 2 * xs[1];
                                var B = -2 * ys[0] + 2 * ys[1];
                                var C = Math.pow(rs[0], 2) - Math.pow(rs[1], 2) - Math.pow(xs[0], 2) + Math.pow(xs[1], 2) - Math.pow(ys[0], 2) + Math.pow(ys[1], 2);
                                var D = -2 * xs[1] + 2 * xs[2];
                                var E = -2 * ys[1] + 2 * ys[2];
                                var F = Math.pow(rs[1], 2) - Math.pow(rs[2], 2) - Math.pow(xs[1], 2) + Math.pow(xs[2], 2) - Math.pow(ys[1], 2) + Math.pow(ys[2], 2);
                                wx = ((C * E - F * B) / (E * A - B * D))
                                wy = ((C * D - A * F) / (B * D - A * E))
                                this.state.posX[idx] = wx;
                                this.state.posY[idx] = wy;
                                console.log(this.state.posX);
                                console.log(this.state.posY);

                                // axios.get('/data/pis/reset/' + user.device)
                                //     .then(function (response) {
                                //         console.log(response);
                                //     })
                                //     .catch(function (error) {
                                //         console.log(error);
                                //     });
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
            }
            this.ctx.clearRect(0, 0, 850, 850);

            this.ctx.beginPath();
            this.ctx.font = "24px Arial";
            this.ctx.fillStyle = "magenta";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Pi1", x1, y1);
            this.ctx.fillText("Pi2", x2, y2);
            this.ctx.fillText("Pi3", x3, y3);
            // this.ctx.fillText("Pi4", x4, y4);
            // this.ctx.fillText("Pi5", x5, y5);
            // this.ctx.fillText("Pi6", x6, y6);
            this.ctx.fill();

            // console.log("0E: ["+this.state.posX[0]+','+this.state.posY[0]+'] \t'+'DB: ['+this.state.posX[1]+','+this.state.posY[1]+']');

            this.state.posX.forEach((el, idx) => {
                if (el) {
                    let img = new Image(64, 64);
                    this.ctx.beginPath();
                    // console.log(el, idx)
                    // console.log(this.state.posY[idx], idx)
                    if (idx === 0) {
                        img.src = zifaan;
                        // this.ctx.fillStyle = 'red';
                    }
                    if (idx == 1) {
                        // this.ctx.fillStyle = 'blue';
                        // this.ctx.beginPath();
                        img.src = rabah;
                    }
                    // if (idx == 2) {
                    //     img.src = peter;
                    // }
                    this.ctx.drawImage(img, this.state.posX[idx], this.state.posY[idx])
                    // this.ctx.fillStyle = this.ctx.createPattern(img, 'no-repeat');
                    // this.ctx.fillRect(this.state.posX[idx], this.state.posY[idx], 64, 64);
                    // this.ctx.arc(this.state.posX[idx], this.state.posY[idx], 10, 0, 2 * Math.PI);
                    // this.ctx.fill();
                }
            });
        }, 2000);
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <>
                <canvas ref={this.myCanvas} id="myCanvas" width='850px' height='850px'></canvas>
            </>
        );
    }

}

export default Map;