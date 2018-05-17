import React, {
  Component
} from 'react';
import {
  Redirect,
  Link
} from 'react-router-dom';
import axios from 'axios';
var moment = require('moment');
// var fs = require('fs');
// var readline = require('readline');
// const {google} = require('googleapis');
// var googleAuth = require('google-auth-library');

class Calender extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

    // // If modifying these scopes, delete your previously saved credentials
    // // at ~/.credentials/calendar-nodejs-quickstart.json
    // var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
    // var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    //   process.env.USERPROFILE) + '/.credentials/';
    // var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';
    //
    // // Load client secrets from a local file.
    // fs.readFile('client_secret.json', function processClientSecrets(err, content) {
    //   if (err) {
    //     console.log('Error loading client secret file: ' + err);
    //     return;
    //   }
    //   console.log(TOKEN_PATH);
    //   // Authorize a client with the loaded credentials, then call the
    //   // Google Calendar API.
    //   authorize(JSON.parse(content), listEvents);
    // });
    //
    // /**
    //  * Create an OAuth2 client with the given credentials, and then execute the
    //  * given callback function.
    //  *
    //  * @param {Object} credentials The authorization client credentials.
    //  * @param {function} callback The callback to call with the authorized client.
    //  */
    // function authorize(credentials, callback) {
    //   var clientSecret = credentials.installed.client_secret;
    //   var clientId = credentials.installed.client_id;
    //   var redirectUrl = credentials.installed.redirect_uris[0];
    //   var auth = new googleAuth();
    //   var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
    //
    //   // Check if we have previously stored a token.
    //   fs.readFile(TOKEN_PATH, function(err, token) {
    //     if (err) {
    //       getNewToken(oauth2Client, callback);
    //     } else {
    //       oauth2Client.credentials = JSON.parse(token);
    //       callback(oauth2Client);
    //     }
    //   });
    // }
    //
    // /**
    //  * Get and store new token after prompting for user authorization, and then
    //  * execute the given callback with the authorized OAuth2 client.
    //  *
    //  * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
    //  * @param {getEventsCallback} callback The callback to call with the authorized
    //  *     client.
    //  */
    // function getNewToken(oauth2Client, callback) {
    //   var authUrl = oauth2Client.generateAuthUrl({
    //     access_type: 'offline',
    //     scope: SCOPES
    //   });
    //   console.log('Authorize this app by visiting this url: ', authUrl);
    //   var rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    //   });
    //   rl.question('Enter the code from that page here: ', function(code) {
    //     rl.close();
    //     oauth2Client.getToken(code, function(err, token) {
    //       if (err) {
    //         console.log('Error while trying to retrieve access token', err);
    //         return;
    //       }
    //       oauth2Client.credentials = token;
    //       storeToken(token);
    //       callback(oauth2Client);
    //     });
    //   });
    // }
    //
    // /**
    //  * Store token to disk be used in later program executions.
    //  *
    //  * @param {Object} token The token to store to disk.
    //  */
    // function storeToken(token) {
    //   try {
    //     fs.mkdirSync(TOKEN_DIR);
    //   } catch (err) {
    //     if (err.code != 'EEXIST') {
    //       throw err;
    //     }
    //   }
    //   fs.writeFile(TOKEN_PATH, JSON.stringify(token));
    //   console.log('Token stored to ' + TOKEN_PATH);
    // }
    //
    // /**
    //  * Lists the next 10 events on the user's primary calendar.
    //  *
    //  * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
    //  */
    // function listEvents(auth) {
    //   var calendar = google.calendar('v3');
    //   calendar.events.list({
    //     auth: auth,
    //     calendarId: 'primary',
    //     timeMin: (new Date()).toISOString(),
    //     maxResults: 10,
    //     singleEvents: true,
    //     orderBy: 'startTime'
    //   }, function(err, response) {
    //     if (err) {
    //       console.log('The API returned an error: ' + err);
    //       return;
    //     }
    //     var events = response.items;
    //     if (events.length == 0) {
    //       console.log('No upcoming events found.');
    //     } else {
    //       console.log('Upcoming 10 events:');
    //       for (var i = 0; i < events.length; i++) {
    //         var event = events[i];
    //         var start = event.start.dateTime || event.start.date;
    //         console.log(moment().format('MMMM Do YYYY') == moment(start).format('MMMM Do YYYY'));
    //
    //         console.log('%s - %s', start, event.summary);
    //       }
    //     }
    //   });
    // }
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
      return this;
    }

    let year = parseInt(moment().format('YYYY'));
    let month = moment().format("MMMM");
    let dayOfMonth = moment().format("D");
    let firstDay = moment(month + ' ' + year).startOf('month').format('dddd');
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //let offSet =
    let dayClicked = null;
    let months = {
      January: 31,
      February: ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 29 : 28,
      March: 31,
      April: 30,
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 31,
      December: 31,
    };
    let hoursOfOperation = {
      Monday: [10, 19],
      Tuesday: [10, 17],
      Wednesday: [10, 17],
      Thursday: [10, 19],
      Friday: [10, 19],
      Saturday: [10, 18],
      Sunday: 'closed',
    };
    const canvas = this.refs.canvas;
    canvas.onmousedown = function() {
      return false;
    };
    const ctx = canvas.getContext("2d");
    let daySize = canvas.width / 7
    let monthView = true;

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (monthView) {
        ctx.fillStyle = "#000000";
        ctx.font = '40px Arial';
        ctx.fillText(`${month + ' ' + year}`, 0, 30);
        ctx.font = '20px Arial';
        ctx.fillText('    Sunday        Monday       Tuesday     Wednesday   Thursday        Friday        Saturday', 0, 60);
        let drawPos = 0;
        for (let i = 0; i < months[month]; drawPos++) {
          if (drawPos < days.indexOf(firstDay)) {
            continue;
          }
          ctx.fillStyle = "#000000";
          ctx.roundRect(daySize * (drawPos % 7) + 2, daySize * parseInt(drawPos / 7) + 72, daySize - 4, daySize - 4, 8).fill();
          if (i + 1 < dayOfMonth) {
            ctx.fillStyle = "#7f7f7f";
          }
          if (i + 1 == dayOfMonth) {
            ctx.fillStyle = "#d3d6a2";
          }
          if (i + 1 > dayOfMonth) {
            ctx.fillStyle = "#e5e5e5";
          }
          // if (hoursOfOperation[calDay] === 'closed') {
          //
          // }
          ctx.roundRect(daySize * (drawPos % 7) + 4, daySize * parseInt(drawPos / 7) + 74, daySize - 8, daySize - 8, 6).fill();
          ctx.fillStyle = "#000000";
          ctx.font = "30px Arial";
          ctx.fillText('' + (i + 1), daySize * (drawPos % 7) + 10, daySize * parseInt(drawPos / 7) + 102);
          i++;
        }
      } else {
        let calDay = moment(month + ' ' + dayClicked + ' ' + year).format('dddd');
        if (hoursOfOperation[calDay] === 'closed') {
          ctx.fillStyle = "#000000";
          ctx.font = "30px Arial";
          ctx.fillText(calDay + ', ' + month + ' ' + dayClicked + ', ' + year, 10, 100);
          ctx.fillStyle = "#ff0000";
          ctx.fillText('-CLOSED-', 40, 200);
        } else {
          ctx.fillStyle = "#000000";
          ctx.font = "30px Arial";
          ctx.fillText(calDay + ', ' + month + ' ' + dayClicked + ', ' + year, 10, 100);
          let hourCount = hoursOfOperation[calDay][1] - hoursOfOperation[calDay][0] + 1;
          let hourPos = hoursOfOperation[calDay][0];
          let hourMargin = 100;
          for (let i = 0; i < hourCount; i++, hourPos++) {

            let hourFormat = hourPos <= 12 ? hourPos + 'AM' : hourPos - 12 + 'PM'
            let hourSpacing = hourFormat.length == 3 ? '  ' : '';

            if (i != hourCount - 1) {
              ctx.fillStyle = "#000000";
              ctx.fillRect(70, i * hourMargin + 120, 680, hourMargin + 2);
              ctx.fillStyle = "#FFFFFF";
              ctx.fillRect(72, i * hourMargin + 122, 676, hourMargin - 2);

              ctx.fillStyle = "#e5e5e5";
              ctx.beginPath();
              ctx.setLineDash([8.05, 15]);
              ctx.moveTo(72, i * hourMargin + 147);
              ctx.lineTo(748, i * hourMargin + 147);
              ctx.stroke();

              ctx.fillStyle = "#e5e5e5";
              ctx.beginPath();
              ctx.setLineDash([]);
              ctx.moveTo(72, i * hourMargin + 172);
              ctx.lineTo(748, i * hourMargin + 172);
              ctx.stroke();

              ctx.fillStyle = "#e5e5e5";
              ctx.beginPath();
              ctx.setLineDash([8.05, 15]);
              ctx.moveTo(72, i * hourMargin + 197);
              ctx.lineTo(748, i * hourMargin + 197);
              ctx.stroke();
              ctx.fillStyle = "#d8d8d8";
              ctx.font = "16px Arial";
              ctx.fillText(hourSpacing + hourFormat.substring(0, hourFormat.length - 2) + ':15', 20, i * hourMargin + 152);
              ctx.fillText(hourSpacing + hourFormat.substring(0, hourFormat.length - 2) + ':30', 20, i * hourMargin + 177);
              ctx.fillText(hourSpacing + hourFormat.substring(0, hourFormat.length - 2) + ':45', 20, i * hourMargin + 202);
            }

            ctx.font = "16px Arial";
            ctx.fillStyle = "#000000";
            ctx.fillText(hourSpacing + hourFormat, 20, i * hourMargin + 127);
          }
        }
        ctx.fillStyle = "#000000";
        ctx.fillRect(660, 70, 120, 40);
        ctx.fillStyle = "#e5e5e5";
        ctx.fillRect(662, 72, 116, 36);
        ctx.fillStyle = "#000000";
        ctx.font = "20px Arial";
        ctx.fillText('Month View', 666, 97);

      }
      requestAnimationFrame(update);
    }
    update();
    window.addEventListener("mousedown", function(el) {
      let rect = canvas.getBoundingClientRect();
      let mouseX = el.clientX - rect.left;
      let mouseY = el.clientY - rect.top;
      let inBounds = false;
      if (mouseY >= 70 && mouseY <= canvas.height && mouseX >= 0 && mouseX <= canvas.width) {
        inBounds = true;
      } else {
        inBounds = false;
      }
      console.log(monthView);
      if (inBounds) {
        if (monthView) {
          dayClicked = parseInt(mouseX / daySize + 1 - days.indexOf(firstDay)) + parseInt((mouseY - 70) / daySize) * 7;
        }
        if (monthView && dayClicked > 0 && dayClicked <= months[month]) {
          monthView = false;
          console.log(dayClicked);
        } else {
          if (mouseX > 660 && mouseX < 780 && mouseY > 70 && mouseY < 110) {
            monthView = true;
          }
        }
      }
    });
  }

  render() {
    return ( <div className = "Calender" >
      <Link to = '/' > back home < /Link>Calander<select>
      <option value = "A" > Apple < /option>
      <option value = "B" > Banana < /option>
      <option value = "C" > Cranberry < /option>
      </select>
      <div style = {{margin: "20px"}} >
      <canvas ref = "canvas" width = {800} height = {1200}/>
      </div>
      </div>
    )
  }
};
export default Calender;
