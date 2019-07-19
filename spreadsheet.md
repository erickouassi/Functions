
* Spreadsheet simple email
```
MailApp.sendEmail("64655236XX@tmomail.net", "test mail", "hello from erickouassi.com");
```


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
