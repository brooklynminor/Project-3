const nodemailer = require("nodemailer");
// const petHotelPicture = require("../assets/petHotel.jpg");
// async..await is not allowed in global scope, must use a wrapper
async function email(userInfo) {
    // console.log("inside email.js: ", userInfo.emailAddress)
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'lhalvorson34@gmail.com',
        pass: 'b({W39v7LT6}'
    }
    });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Pet Hotel" <lhalvorson34@gmail.com>', // sender address
    to: userInfo.emailAddress, // list of receivers
    subject: `Thank you ${userInfo.fullName} for choosing Pet Hotel!`, // Subject line
    text: "You have successfully created your account with Pet hotel.", // plain text body
    html: `<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Schedule Email</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <style type="text/css">
            a[x-apple-data-detectors] {color: inherit !important;}
        </style>
    
    </head>
    <body style="margin: 0; padding: 0;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td style="padding: 20px 0 30px 0;">
    
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
        <tr>
            <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0;">
                <img src="https://www.k9franchise.com/wp-content/uploads/2019/07/Luxury-Pet-Hotel.jpg" alt="Pet Hotel" width="550" style="display: block;" />
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                    <tr>
                        <td style="color: #153643; font-family: Arial, sans-serif;">
                            <h1 style="font-size: 24px; margin: 0;">You have successfully created an account with us!.</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
                            <p style="margin: 0;">You can create your first reservation <a href="#">Here</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#ee4c50" style="padding: 30px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                    <tr>
                        <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;">
                            <p style="margin: 0;">&reg; The Decoding Java Drinkers 2020<br/>
                        </td>
                        <td align="right">
                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                                <tr>
                                    <td>
                                        <a href="http://www.twitter.com/">
                                            <img src="https://i.imgur.com/3oeSUNL.png" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="http://www.instagram.com/">
                                        <img src="https://i.imgur.com/DWMyWfZ.png" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                                        </a>
                                    </td>
                                    <td>
                                    <a href="http://www.facebook.com/">
                                    <img src="https://i.imgur.com/eabA79E.png" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                                    </a>
                                </td>

                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
                </td>
            </tr>
        </table>
    </body>
    </html>`, // html body
  });
// console.log("message info: ", info)
//   console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

async function emailSchedule(scheduleInfo, userInfo) {
    console.log("inside email.js: ", userInfo.emailAddress)
    console.log("check in and check out: ",scheduleInfo)
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'lhalvorson34@gmail.com',
        pass: 'b({W39v7LT6}'
    }
    });
{/* <b>You have successfully booked a reservation for your pet ${scheduleInfo.petName}.<br><br>
    Check-In: ${scheduleInfo.checkIn.toLocaleDateString("en-US")} @ 11:00 am.<br>
    Check-Out: ${scheduleInfo.checkOut.toLocaleDateString("en-US")} @ 1:00 pm.
    </b> */}
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Pet Hotel" <lhalvorson34@gmail.com>', // sender address
    to: userInfo.emailAddress, // list of receivers
    subject: `Thank you ${userInfo.fullName} for choosing Pet Hotel!`, // Subject line
    text: `You have successfully booked a reservation for your pet ${scheduleInfo.petName}.`, // plain text body
    html: `<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Schedule Email</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <style type="text/css">
            a[x-apple-data-detectors] {color: inherit !important;}
        </style>
    
    </head>
    <body style="margin: 0; padding: 0;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td style="padding: 20px 0 30px 0;">
    
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
        <tr>
            <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0;">
                <img src="https://storage.googleapis.com/petbacker/images/blog/2019/petbnb-alternative-home-stay-to-pet-hotels.jpg" alt="Pet Hotel" width="550" style="display: block;" />
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                    <tr>
                        <td style="color: #153643; font-family: Arial, sans-serif;">
                            <h1 style="font-size: 24px; margin: 0;">You have successfully booked a reservation for your pet ${scheduleInfo.petName}.</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
                            <p style="margin: 0;">Check-In: ${scheduleInfo.checkIn.toLocaleDateString("en-US")} @ 11:00 am.</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
                            <p style="margin: 0;">Check-Out: ${scheduleInfo.checkOut.toLocaleDateString("en-US")} @ 1:00 pm.</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <table border="0" cellpadding="0" cellspacing="0" width="75%" style="border-collapse: collapse;">
                                <tr>
                                    <td width="260" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" width="75%" style="border-collapse: collapse;">
                                            <tr>
                                                <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 25px 0 0 0;">
                                                    <p style="margin: 0;">Ruff day? You'll leave Creature Comforts pawsitively restored.</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#ee4c50" style="padding: 30px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                    <tr>
                        <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;">
                            <p style="margin: 0;">&reg; The Decoding Java Drinkers 2020<br/>
                        </td>
                        <td align="right">
                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                            <tr>
                            <td>
                                <a href="http://www.twitter.com/">
                                    <img src="https://i.imgur.com/3oeSUNL.png" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                                </a>
                            </td>
                            <td>
                                <a href="http://www.instagram.com/">
                                <img src="https://i.imgur.com/DWMyWfZ.png" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                                </a>
                            </td>
                            <td>
                            <a href="http://www.facebook.com/">
                            <img src="https://i.imgur.com/eabA79E.png" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                            </a>
                        </td>

                        </tr>
                    </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
                </td>
            </tr>
        </table>
    </body>
    </html>`, // html body
  });
console.log("message info: ", info)
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



module.exports = {email, emailSchedule};
