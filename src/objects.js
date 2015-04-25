/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
    return {type: 'Goldfish', brand: 'Pepperidge Farm', flavor: 'Cheddar', count: 2000}; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user) {
    this.user = user;
    this.sentMessages = [];
    this.receivedMessages = [];
    this.numSent = 0;
    this.numReceived = 0;
    this.logMessage = function (messageText, direction) {
        if (direction == 0) {
            /* Sent message */
            /* Increase numSent */
            this.numSent += 1;
            /* Check if array already has 5 messages in it. If so,
             * delete the last one, then push on new message */
            if (this.sentMessages.length == 5) {
                /* Delete the sent message at the end of array */
                this.sentMessages.pop(4);
            }
            /* Add new message to beginning of sentMessages[] */
            this.sentMessages.unshift(messageText);
        }
        if (direction == 1) {
            /* Received message */
            /* Increase numReceived */
            this.numReceived += 1;
            /* Check if array already has 5 messages in it. If so,
             * delete the last one, then push on new message */
            if (this.receivedMessages.length == 5) {
                /* Delete the sent message at the end of array */
                this.receivedMessages.pop(4);
            }
            /* Add new message to beginning of receivedMessages[] */
            this.receivedMessages.unshift(messageText);
        }
    }
    this.getSentMessage = function (n) {
        if (n < 5) {
            return this.sentMessages[n];
        }
    }
    this.totalSent = function () {
        return this.numSent;
    }
    this.totalReceived = function () {
        return this.numReceived;
    }
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function () {
    return this.receivedMessages[0];
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog("BlackHatGuy");
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);
//end your code
