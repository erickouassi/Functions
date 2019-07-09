
MailApp.sendEmail("6465523666@tmomail.net", "test mail", "hello from erickouassi.com");

yourEmailHere/ Subject /
Your Message here


function CustomEmail() {
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A2:C4");
var UserData = range.getValues();
for (i in UserData) {
var row = UserData[i];
var name = row[0];
var email = row[1];
var score = row[2];
MailApp.sendEmail(row[1], "Custom mail", "Hello " + name + ", This is an email report of your score. Your score is " + score);
}
}
