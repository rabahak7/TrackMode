(this.webpackJsonptrackf=this.webpackJsonptrackf||[]).push([[0],{38:function(t,c,i){},39:function(t,c,i){},40:function(t,c,i){},67:function(t,c,i){"use strict";i.r(c);var A=i(1),I=i(0),a=i.n(I),e=i(26),b=i.n(e),n=(i(38),i(39),i(11)),h=i(2),j=i.p+"static/media/logo.7cb06fc5.png",M=(i(40),i(10)),l=i(8),N=i.n(l),o=function(){var t=Object(I.useState)([{}]),c=Object(M.a)(t,2),i=c[0],a=c[1];return Object(I.useEffect)((function(){var t=function(){N.a.get("/data/users").then((function(t){t.data.length>0&&a(t.data)})).catch((function(t){console.log(t)}))};t();var c=setInterval((function(){t()}),1e3);return function(){return clearInterval(c)}}),[]),Object(A.jsx)("div",{className:"content",children:Object(A.jsxs)("table",{children:[Object(A.jsx)("thead",{children:Object(A.jsx)("tr",{children:Object.keys(i[0]).map((function(t){return Object(A.jsx)("td",{children:t})}))})}),Object(A.jsx)("tbody",{children:i.map((function(t){return Object(A.jsx)("tr",{children:Object.keys(t).map((function(c){return Object(A.jsx)("td",{children:t[c]})}))})}))})]})})},O=function(){var t=Object(I.useState)([{}]),c=Object(M.a)(t,2),i=c[0],a=c[1];return Object(I.useEffect)((function(){var t=function(){N.a.get("/data/pis").then((function(t){t.data.length>0&&a(t.data)})).catch((function(t){console.log(t)}))};t();var c=setInterval((function(){t()}),1e3);return function(){return clearInterval(c)}}),[]),Object(A.jsx)("div",{className:"content",children:Object(A.jsxs)("table",{children:[Object(A.jsx)("thead",{children:Object(A.jsx)("tr",{children:Object.keys(i[0]).map((function(t){return Object(A.jsx)("td",{children:t})}))})}),Object(A.jsx)("tbody",{children:i.map((function(t){return Object(A.jsx)("tr",{children:Object.keys(t).map((function(c){return Object(A.jsx)("td",{children:t[c]})}))})}))})]})})},D=i(27),Z=i(28),Y=i(29),R=i(32),G=i(31),s=function(t){Object(R.a)(i,t);var c=Object(G.a)(i);function i(t){var A;return Object(Z.a)(this,i),(A=c.call(this,t)).state={posX:[],posY:[]},A.myCanvas=Object(I.createRef)(),A}return Object(Y.a)(i,[{key:"componentDidMount",value:function(){var t=this;this.ctx=this.myCanvas.current.getContext("2d");var c=setInterval((function(){t.props.data&&t.props.data.map((function(c,i){console.log(c),N.a.get("/data/pis/"+c.device).then((function(c){if(3==c.data.length){console.log(c.data.length);var A,I,a,e=0,b=[],n=[],h=[],j=Object(D.a)(c.data);try{for(j.s();!(a=j.n()).done;){var M=a.value;"pi1"===M.pi?(b[e]=M.rssi,b[e]=100*Math.pow(10,(-69-(b[e]-69))/10),n[e]=700,h[e]=405,e++):"pi2"===M.pi?(b[e]=M.rssi,b[e]=100*Math.pow(10,(-69-(b[e]-69))/10),n[e]=100,h[e]=20,e++):"pi3"===M.pi?(b[e]=M.rssi,b[e]=100*Math.pow(10,(-69-(b[e]-69))/10),n[e]=100,h[e]=800,e++):"pi4"===M.pi?(b[e]=M.rssi,b[e]=100*Math.pow(10,(-69-(b[e]-69))/10),n[e]=900,h[e]=405,e++):"pi5"===M.pi?(b[e]=M.rssi,b[e]=100*Math.pow(10,(-69-(b[e]-69))/10),n[e]=1550,h[e]=20,e++):"pi6"===M.pi&&(b[e]=M.rssi,b[e]=100*Math.pow(10,(-69-(b[e]-69))/10),n[e]=1550,h[e]=800,e++)}}catch(R){j.e(R)}finally{j.f()}var l=-2*n[0]+2*n[1],N=-2*h[0]+2*h[1],o=Math.pow(b[0],2)-Math.pow(b[1],2)-Math.pow(n[0],2)+Math.pow(n[1],2)-Math.pow(h[0],2)+Math.pow(h[1],2),O=-2*n[1]+2*n[2],Z=-2*h[1]+2*h[2],Y=Math.pow(b[1],2)-Math.pow(b[2],2)-Math.pow(n[1],2)+Math.pow(n[2],2)-Math.pow(h[1],2)+Math.pow(h[2],2);A=(o*Z-Y*N)/(Z*l-N*O),I=(o*O-l*Y)/(N*O-l*Z),t.state.posX[i]=A,t.state.posY[i]=I,console.log(t.state.posX),console.log(t.state.posY)}})).catch((function(t){console.log(t)}))})),t.ctx.clearRect(0,0,1e3,830),t.ctx.beginPath(),t.ctx.font="24px Arial",t.ctx.fillStyle="magenta",t.ctx.textAlign="center",t.ctx.fillText("Pi1",700,405),t.ctx.fillText("Pi2",100,20),t.ctx.fillText("Pi3",100,800),t.ctx.fillText("Pi4",900,405),t.ctx.fillText("Pi5",1550,20),t.ctx.fillText("Pi6",1550,800),t.ctx.fill(),t.state.posX.forEach((function(c,i){if(c){var A=new Image(64,64);t.ctx.beginPath(),0===i&&(A.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAbQaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0yNlQxMzoxMjoxOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMjZUMTM6MTY6NDYrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMjZUMTM6MTY6NDYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MGY3NTY1ZTgtMThmZS00NTM2LWE5ODMtY2Q5YjdkOTU2MWJkIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2E1ZDdjMDItYWY4Ny0zYTQ2LWFlOTYtYTIzODllOGNmODIyIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjE2NzY5OTYtOWIzZC00NzYyLWFhNGYtOGMzNzQ2MWFlNDUyIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+OUJGMTU0MkI2NDQ3NDRDQjI3MjQ0QzVCRTgxRDBGNEM8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmQwNTliYTItZTczOC1mZTQzLTk5NDAtMzM2NmEzNmYxMGM0PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjE2NzY5OTYtOWIzZC00NzYyLWFhNGYtOGMzNzQ2MWFlNDUyIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTI2VDEzOjEyOjE5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGY3NTY1ZTgtMThmZS00NTM2LWE5ODMtY2Q5YjdkOTU2MWJkIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTI2VDEzOjE2OjQ2KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJE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"),1==i&&(A.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAbQaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0yNlQxMzoxMjoxOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMjZUMTM6MjA6NDUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMjZUMTM6MjA6NDUrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzhlYjNjMmEtYmY1Ni00NmQ1LWE4M2UtNWZhNmRmZGU0MTkwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTBiZTRkZDMtOTUzOC1lNzQwLWI4ODEtZTgxNjU5NjA3ZGIxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODBlNDlhOTYtYmQ4ZS00NTM5LWE1MDUtODVkMmQzOWQ1ZjU2Ij4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+OUJGMTU0MkI2NDQ3NDRDQjI3MjQ0QzVCRTgxRDBGNEM8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmQwNTliYTItZTczOC1mZTQzLTk5NDAtMzM2NmEzNmYxMGM0PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODBlNDlhOTYtYmQ4ZS00NTM5LWE1MDUtODVkMmQzOWQ1ZjU2IiBzdEV2dDp3aGVuPSIyMDIxLTA0LTI2VDEzOjEyOjE5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzhlYjNjMmEtYmY1Ni00NmQ1LWE4M2UtNWZhNmRmZGU0MTkwIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTI2VDEzOjIwOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7R9D/AAAAN7ElEQVR4XtVaaWwc5Rl+ZvY+7F0f6/vKOg6B0JCAmwZECCBAgh+llSqgqpCq/mslqKqiVqpakOghIaG2SP1BS6EQBG0KBNRyFVAhnCEhB4EEEt+OHa+Ptfeyvff0eWfHEIPT7G7G6/Yxk/m+b2a++d7nPb73HVaBifgA67er0G7lpDs0aF9RoNiNS+cFzpUGlE8VaHsVWJ7Ygr73jUvnDVMIOIhgL4X9HSe70hhaVWjA2yrUu8wgQjXOZYELUQ4j+FNO8l6lhBfIuzTk3j6C4N3GUNko2wJE+CPo/j2bdxZG1gwPbMHAjygIl1Q6yraAQwj+hKe1Fl7wQ1ph2ZZQlgUcRPdlDHb7+LjVGILy5hPwNDYhm81CVRVkMlnk80CVV+Kgynae1zIYGRrB1FQIJ/oHMDA0BI/LgQ09Qdz/wB+QXFxANp2Golj4jCiUIc9uQ55zChSV82Rz8PP6PxM1+piAQTKrwnJlOTGhLAIOoftNPrjD6OrIvfEwvG3rYeEFhQfXWpicHRFlZGQEDz3yFxw/8SkJmEI+l0Z7RweGh4aRy+UoQg45CprOpCiRQsJynINEcCItl4XFZoPGiYSMGvL+0hkEFKDt3YrBq41O0SiZgMNYt42r+hLTyjuPw9u6Tlcc9VQYUxiqKMjI8Cju/uW9+PjYx7pgNocDyfkEVJJjsdn1Md7K+xWSkeWR1wXV2Betqwr1KwSQqFwmQwtYiQCBdiVJeMfoFIWSY4AG5TajuQxWq5MXeVXL65pCXkN6MYmXX3gRP7jjDpwc6KOgYsoatZ+D1W6HlUTk0inoBk8SqHioVqt+TYix2qxcoGpoiYZO1xJS2NJHvgiOrri2/4ZyguA1xnkZFGollcxgMUXNcSV5qnR0fAx/fnwXIokoMqkkhczDQgFzjAW5ZKEv0uk+L9rmPCKaCKio/JfXFZWEyh/bHNIJLjC8Ikreissh4CLjvAzHP9yPyMQotSmLyyPDYPanhx9GKBRCIhZFNpXSTVjh+u12J4kQk2agpLmLm2gUKrWwQBNP0/wzFJgkCCli/hbGAbEu9i0WC7ou6Cm89EtQNhuNolESAa9jp/Vs6e1MJIr+U0MID9DPk4uwU8DJ6SmkKJAuCDVPZ0Ymm9KtQRGhKKRosxDwaOq8L5/O6kKLwEt/HOD9NH3ed9Ott+Kb3/6O8dblEA86inWNRrcolESAH8NtRvNLaKxvhtvhxomJCXyy7x3MTk0iMjun24NqoS8LAVxi3hBM4oBsaXIWwWX7k5vlmrRlXAjSD/6Je2RzGVgtbl47e4lBuh1GsyiU4wIrIsmFnh4bR0a1Yy61QJc4ghh9Py9mTs1JVFdpFRYhg2YskT1Pf7ZLMCQ5MiYRX1DQPh2Jfi9tNnSyZLAjGMSVO67S7zMDphGQXUgjGY5Bi0YRozvs2v1XxOJxajOlC2ez0Oe5C+gxXbRPoTwOO67oqsFNG+rQVluFKo9DdwXxc7lPtC4L1F2FLqNaLRgdO4VB5hRmQd5RNA6js4sb3pDRXYa3fvE9ZNqaoUTnMDs3i917nsX0bJg+n9E1a6HGrdT+ha31cLlUzIajuDrox4YWP2w2BwZDYbw3OI2xaBqxxRziqTR3C7qHqJ0uwod1C7BaHfBm83ghUmW8eTnoOJ29GBw1uueEaRYQjsVhZwCzu90YOjWCal+1nsnZuJ8Ly2LU129qxre2r8M3LuvGPbdfjWu3bUR7exP8biu666pwbXcNru7yYn29A34X/Vy2PD4t8yi0AllsYTulO5gE0wiw1dfCSk3l6P/pRByhmWl9dtnFJdVtqHbj9ut6sSnYiUs629EeaEWtLwCv0wt/TS2aGry4sLMRPc016G3z4WvtXlS7HYwB3CYZRySxyjILlFgiAdIsmEaAklcRmotgeDyE+TSzQJpwnosWXxcT2NzVgO513ejqDCLQ3glvbR1q6hrh9wfg89XC7WvEyYiGT6bTCM1n9FjQWu3SzV8yQ1o/V8ssg3NJYDULphHQrNiwsaUZ/ceOYfT0OM00D5dNgp8KJ33/2i2tmIhO4cDRI3j0medw3x8fwf4D7zP5iWFq/BSee+0AXj3Qj5n5NOq9Dly6zof6ahvzCRXdDJAKcwhhUuKJIkWSSTCNAM2uor+vHxd196DW68XWC7qxnn69Y30bahndt23sRi6xgP6JGP7dF0ZNUxfmF+ahOZ2YmokBzBR37LwCtqoA02g3IrEFWoAV1YwhaQY9LU8CuCXqFmUiTCOgb2wUidQimtra0dXUjBiD4un4ImYWFlFHjcoW569yYueWIO68oReBhTg1XIOA340MM0eHRUNNeBg3dlnx1U4XNnU2MzBWw+WwIZai5m3VzCa91D6DI3cUs2DaTC6Gu7ZAAA67lXV+E7j5cTtLYnEhiZ6WBricHrS2dqDR7cS6GhduvH47tm+/FD5vFbqa69HKsSafAwGPlfP4edSikwRIuEtkqHl7FfLOWsDZwIi7UilcHkwjoCvYgzpG99RkCI0eO7XtRSqdR0drHQuhRbhYALnc1aj116KjowNeatbj4V6uqfB63Qj43PB4nagPNKKuphF21crAlyJBDrqEDXnVxrdI1ciEiodZMI2AB598DHf/5ld48KUX8NA/XsXJ0dOwMXpHkzl0UsNJVnqyn1sdTiQjEcRDMzT9DOL09UwqT8txIsHiKT0fwyKPVJLbKSvFcDyHNE2/sA0wDtD8pVgyC6bNNEHNR2MRROJRTDETzEmez1T36FAIJ6MpnBgcQ+L0CMIjA5geG4KzrgH9/YPY98FhPH/4BPYcGcZESmNGOINTY2MY43Y6N5dGJCmVIV/ALVUvjPQ6QWfDFJhGgHy4kI+hohyFAU22LT2n5xb42qETePfECCJzk5hPxnAqmccrh47i0OAwhlk/MH1E2uLAWyNxPHVwHO/0TWEinsIYtb9oqabQFr2KFDPQU2O9bQ5MI0CEl2KusFsTWg5ejwf1dQxcWQ0vH51AMmelP7swFKKZJ4GW6jasr2pDj6MO21hOd3pcuKDOC4/bjghvGCABTm6vha9A/I/FlJ4G6ymyOdDXWiz+zijUg+4V07BbghpcdTVob+G+X1tDV4gzL2DdRJOoq6tnqhvANl8SOzcEOIsdTrcPVs2KeRZB8ZlZRBJMiJIR/YNJikImWEXu+oiFVSIDh8fHPcaFeCLFPCCHGh7/Yta4MtS2regbNzrnREkWcAuLLfpf2uguw603fx3XXLGDM9rxwUfHcXo6gpaOTvgDDfA3NqCB7Q8Hx5HLp1koVbEiZIpry9AFTuH5Yx+jby4Eh1u+CeTgYPb34ek4NJsTdQEKn0nAokVZR/jQUus0PrutiGwpwgvKcYFjxnkZpufi+IQ+HUskcMmmTWhsasTExASmw1Noa26E22EFDRhObo+ToXHm924mNjYEgy3MGtvoLk7dz+Vb4cB0GGkGPD2OWK3w043ExU5PTaKlxoHeDcwFVgBp+dRoFo2SCaDPvG40lyEcmdP9s9bvw8T0DMLhMCLzcVRVUdtMdwVRZocOi4I4U+A39h/AQGgMH5wcwSwLp0OjU3j9k3G80T+hf/6WfJ/iFw4WRE63q/BBZHaWxdaKRihre8toFo0yLEDbbTSWYTGZpknb9I8g8i3QRU3KZ68A/T9JfxYhhueymI3G0NHkQyazgHsefRW/ffEwHnz9OF7rn8HewTDT6SyqHAqimZxuAbLnqwp3AVqEfDrTM0P5PLYC+MQuo1k0SiZgK4b2k4S9RvczOOw2JFNJhJgP+Kp9XLwKt9vNcTsTHdbxkhe4vXjytf1YmJ/HJZ21uOvmi7Gzp4qpsYqN9TbctNGLy1kH5OksE4sKbCRRiBPIp3H9TMtIZb8chxmb9vWif5/RLRrlxAAuEHfxlRmjqyPNSm90cAhe+raDi3Sxiqtmu97rQzaxCIUkeF0uvHl8Bq+8dxyzU9PwW3K4qsuDG3hc3uxEq8dCslLom0zR5P2wM49w8HDTshw0cCutQD75yvlMyA7J4w6jWxJK2gbPxCF0/4wP/9rorimo/XsuxeC9RrcklE2A4CCC9zNN+bHRXSs8thUD3zXaJaMsF1jCZRikK+DnX3SHSqBg9to95yO84LwsYAlHEezNQrmPk11rDK02DrAw/v5mDBw0+mXDFAKWID+TY5Z2GzVzHSe+gNN/9guS84PGakL/mdybzAt2/c/9TO5s+BidTcwOPuRLVk7dzgGa+STLp0s2Y2jSGDId5xUDzoWLMRKi8M8Y3ZLBZ/espvCCVSXAAIvI8kCzXzHrNBOrTkAEbW9TlGmjWzRo/qGt6C85ty8Vq07ANdjLAFaOFWjP0AXM/Z8AK6ASLiBS7DGaRaOcZ8rBqu4CS6AFyM9qJ9gs6ucrEv2Z4DRzcWyuLipiAYYgzxZ65wbvf7YSwgsqQoCAEf1vRvOcyCP3V6O56qgYAXn43iUNM0b3rBDzH8BwSb/2PB9UjIBeHMxQuCL2de1p+fhqdFYdFSNAwJedM7IXc4+ZqMgusARagHqYuwFfumJtwOuhSxn9jW5FUFELoODyM4ezapjXnjOaFUNFCTBw1jigQq1Y9F9CxQk4W20g0X8z+ioW/ZdQcQKkNuDpqULvcyiF3L9i0X8Ja+EChPK00TgDK42tPtaEALoBy9zP3UCi/xYMvGF0K4o1IaDgBp9rnKZfsdz/i1gjF9BxZhwo+6vR/y0kKTqE7kkeIWkbwxXHmr2YJi9JkUT+PdI2hiuOtXQBWoGym8lP0WWy+QD+AyNUmwNauD+9AAAAAElFTkSuQmCC"),2==i&&(A.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAbQaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0yNlQxMzoxMjoxOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMjZUMTM6MjI6MzkrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMjZUMTM6MjI6MzkrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzgzMmIzNjctNzBlYS00MDEyLWI2MTEtMjI3MTQ4YjRhYTA3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDgzYjJlMGYtZTY1My0wYzQxLWI2NWQtZTA5YTBhNGIyOTI5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NmU4MWM5MjMtMjY3OS00N2ZiLWE0ODUtZjA1M2IxNGRjZDBmIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+OUJGMTU0MkI2NDQ3NDRDQjI3MjQ0QzVCRTgxRDBGNEM8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmQwNTliYTItZTczOC1mZTQzLTk5NDAtMzM2NmEzNmYxMGM0PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmU4MWM5MjMtMjY3OS00N2ZiLWE0ODUtZjA1M2IxNGRjZDBmIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTI2VDEzOjEyOjE5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzgzMmIzNjctNzBlYS00MDEyLWI2MTEtMjI3MTQ4YjRhYTA3IiBzdEV2dDp3aGVuPSIyMDIxLTA0LTI2VDEzOjIyOjM5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJE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"),t.ctx.drawImage(A,t.state.posX[i],t.state.posY[i])}}))}),5e3);this.setState({intervalId:c})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("canvas",{ref:this.myCanvas,id:"myCanvas",width:"1600px",height:"810px"})})}}]),i}(I.Component),g=function(){var t=Object(I.useState)([]),c=Object(M.a)(t,2),i=c[0],a=c[1];return Object(I.useEffect)((function(){N.a.get("/data/users").then((function(t){t.data.length>0&&a(t.data)})).catch((function(t){console.log(t)}))}),[]),Object(A.jsx)("div",{className:"content",children:Object(A.jsx)(s,{data:i})})},d=function(){return Object(I.useEffect)((function(){console.log(window.location.pathname)}),[]),Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(n.a,{children:[Object(A.jsxs)("div",{className:"sidebar",children:[Object(A.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(A.jsx)("h2",{style:{display:"block",color:"black"},children:"TRACKMODE"}),Object(A.jsx)(n.b,{activeClassName:"active",to:"/map",children:"Map"}),Object(A.jsx)(n.b,{activeClassName:"active",to:"/users",children:"Users"}),Object(A.jsx)(n.b,{activeClassName:"active",to:"/pis",children:"Pis"}),Object(A.jsx)(n.b,{activeClassName:"active",to:"/about",children:"About"})]}),Object(A.jsx)(h.a,{path:"/map",children:Object(A.jsx)(g,{})}),Object(A.jsx)(h.a,{path:"/users",children:Object(A.jsx)(o,{})}),Object(A.jsx)(h.a,{path:"/pis",children:Object(A.jsx)(O,{})})]})})};var m=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(d,{})})},w=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,68)).then((function(c){var i=c.getCLS,A=c.getFID,I=c.getFCP,a=c.getLCP,e=c.getTTFB;i(t),A(t),I(t),a(t),e(t)}))};b.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(m,{})}),document.getElementById("root")),w()}},[[67,1,2]]]);
//# sourceMappingURL=main.752844a3.chunk.js.map