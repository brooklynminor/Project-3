const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function email(userInfo) {
    console.log("inside email.js: ", userInfo.emailAddress)
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
    subject: `Thank you ${userInfo.firstName} for choosing Pet Hotel!`, // Subject line
    text: "You have successfully created your account with Pet hotel.", // plain text body
    html: "<b>You have successfully created your account with Pet hotel.</b>", // html body
  });
console.log("message info: ", info)
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
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

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Pet Hotel" <lhalvorson34@gmail.com>', // sender address
    to: userInfo.emailAddress, // list of receivers
    subject: `Thank you ${userInfo.firstName} for choosing Pet Hotel!`, // Subject line
    text: `You have successfully booked a reservation for your pet ${scheduleInfo.petName}.`, // plain text body
    html: `<b>You have successfully booked a reservation for your pet ${scheduleInfo.petName}.<br><br>
    Check-In: ${scheduleInfo.checkIn.toLocaleDateString("en-US")} @ 11:00 am.<br>
    Check-Out: ${scheduleInfo.checkOut.toLocaleDateString("en-US")} @ 1:00 pm.
    </b>`, // html body
  });
console.log("message info: ", info)
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



module.exports = {email, emailSchedule};
