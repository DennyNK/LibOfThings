# **LibOfThings**
Online space for borrowing, lending and giving away things.

## **Description**
The Library of things aims to be a space where people exchange things, which is an alternative to existing fb groups. Not everyone has or wants to have a fb profile. It aims at the problem of overconsumpitons and gives a solution by giving the alternative of borrowing things instead of buying and giving away things when one decides they no longer need the things. The project is free to use, it requires registration to have access to detailed functionalities like adding things and messaging requests for borrowing/taking things.

### **Installation**
1. Clone the repository: git clone https://github.com/DennyNK/LibOfThings
2. Install dependencies: cd client => npm install
3. Run development cd server: npm run dev
4. Run back-end server: cd server => node server [^1]

### **Functionalities**
*Available for guests*
- Login/Registration: by form;
- Catalog: list of the things that have been added; an option to filter things by category or purpose
- Search: option to search by keyword;

*Available only to logged in users*
- Add things: option to add things by filling out a form;
- Things details: see details about the things with a 'Contact Owner' button;
- Contact owner button: opens a modal for sending a message to the owner, navigates to Messages;
- Edit / Delete: Owners can edit or delete their things;
- Profile: user can see the things they have added here;
- Messages: user can see messages sent by them to request things from other users or the messages sent to them by other users;

[^1]: In this project I have used the SoftUni Practice Server. For more info: https://github.com/softuni-practice-server/softuni-practice-server