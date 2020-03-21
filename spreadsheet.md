

Relative & Absolute Cell References
|  |  |
| ------ | ------ |
| $A1 | Allows the row reference to change, but not the column reference.|
| A$1 | Allows the column reference to change, but not the row reference.|
| $A$1 | Allows neither the column nor the row reference to change.|



* Spreadsheet simple email
```
MailApp.sendEmail("64655236XX@tmomail.net", "test mail", "hello from erickouassi.com");
```
Note: Each line should be separated with a LF (\n). Lines should not exceed 70 characters.

* Spreadsheet advanced email
```
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
```
```
/*
function CustomEmail() {
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A2:C4");
var UserData = range.getValues();
for (i in UserData) {
var row = UserData[i];
var name = row[0];
var email = row[1]; // email2Send
var score = row[2];
var message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua " + name + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" + score;
var subject = Your score is " + score
 
 MailApp.sendEmail(email2Send, subject, message);
 */
 ```
 
 * IF statement to display text in cell
 ```
 =IF(D23<0,"Net Income (loss)","Net Income (profit)")
 ```
 * Date in 3 Years 7 months 25 days
 ```
 =DATEDIF(0,A2,"y")&" years " &DATEDIF(0,A2,"ym")&" months "&DATEDIF(0,A2,"md")&" days"
 ```
 
 * COUNTIF function (text)
 ```
 =COUNTIF(B3:B53,"*")
 ```
 * Hide Cell
 
 On the Number tab, choose Custom at the bottom and enter three semicolons (;;;) without the parentheses into the Type box.
 
 * Reminder
 ```
 function checkReminder() {
  // get the spreadsheet object
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // set the first sheet as active
  SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]);
  // fetch this sheet
  var sheet = spreadsheet.getActiveSheet();
   
  // figure out what the last row is
  var lastRow = sheet.getLastRow();
 
  // the rows are indexed starting at 1, and the first row
  // is the headers, so start with row 2
  var startRow = 2;
 
  // grab column 5 (the 'days left' column) 
  var range = sheet.getRange(2,5,lastRow-startRow+1,1 );
  var numRows = range.getNumRows();
  var days_left_values = range.getValues();
   
  // Now, grab the reminder name column
  range = sheet.getRange(2, 1, lastRow-startRow+1, 1);
  var reminder_info_values = range.getValues();
   
  var warning_count = 0;
  var msg = "";
   
  // Loop over the days left values
  for (var i = 0; i <= numRows - 1; i++) {
    var days_left = days_left_values[i][0];
    if(days_left == 7) {
      // if it's exactly 7, do something with the data.
      var reminder_name = reminder_info_values[i][0];
       
      msg = msg + "Reminder: "+reminder_name+" is due in "+days_left+" days.\n";
      warning_count++;
    }
  }
   
  if(warning_count) {
    MailApp.sendEmail("youremail@yourdomain.com,anotheremail@anotherdomain.com", 
        "Reminder Spreadsheet Message", msg);
  }
   
};

// https://www.withoutthesarcasm.com/automating-google-spreadsheets-email-reminders/
 ```
 
 * For characters count
 ```
 =sum(LEN(B1)+LEN(B2)+LEN(B3)+LEN(B4)+LEN(B5)+LEN(B6)+LEN(B7))
 ```
* QR Code formula
```
=if(isblank($A1), "BLANK", image("https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl="&$A1))
```

* Select 1 raw for view ([0-n], raw 7 is selected)
```
google.spreadsheeet.link/gviz/tq?tqx=out:html&tq=select+*+LIMIT+1+OFFSET+7&gid=0

```
* Create a mail merge using Gmail and Google Sheets
https://github.com/gsuitedevs/solutions/tree/master/mail-merge
