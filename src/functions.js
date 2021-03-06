/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value that should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here
function uselessFunction() {
    return null;
}
//end your code

var bar = 'not a function';
var barType = typeof bar;

/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

//your code here
/* function bar = multArray(doubleArray); */

bar = function (doubleArray) {
    /* Declare variables i and arrayLength to be used within for loop */
    var i;
    var arrayLength = doubleArray.length;
    /* Loop thru array and double each element of array */
    for (i = 0; i < arrayLength; i++) {
        doubleArray[i] *= 2;
    }
    /* Check each elt to see if equal to zero because zero is the only
     * number that cannot be doubled */
    for (i = 0; i < arrayLength; i++) {
        if (doubleArray[i] == 0) {
            return false;
        }
    }
    /* Check each elt to see if not a number because only numbers can be doubled */
    for (i = 0; i < arrayLength; i++) {
        if (isNaN(doubleArray[i])) {
            return false;
        }
    }
    /* If we get here we know all elts have been doubled */
    return true;
}
//end your code

/**
* Creates a new GitLog
* @class
* @property {string} hash - the hash of the commit
* @property {Date} date - the date of the commit as a JS Date object
* @property {string} message - the commit message
*/
function GitLog(hash, date, message) {
    this.hash = hash;
    this.date = date;
    this.message = message;
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here
function parseGit(logArray) {
    var i, j, k, m;
    var logArrLen = logArray.length;
    var logString;
    var logStrLen; /* Not sure if set equal to logString.length here... */
    var logHash;
    var logDateStr;
    var logDateArr;
    var HrMinSec;
    var logMessage = "";
    var gLog;
    var gLogArr = [];
    
    for (i = 0; i < logArrLen; i++) {
        logString = logArray[i];
        logStrLen = logString.length; /* Or here... */
        /* Extract hash from string */
        for (j = 0; j < logStrLen; j++) {
            if (logString[j] == ' ') {
                logHash = logString.substring(0, j);
                break;
            }
        }
        /* Extract date from string */
        for (k = j+1; k < logStrLen; k++) {
            if (logString[k] == '"') {
                logDateStr = logString.substring(j+1, k-1);
                logDateArr = logDateStr.split(' ');
                break;
            }
        }
        /* Extract message from string */
        for (m = k+1; m < logStrLen; m++) {
            if (logString[m] == '"') {
                logMessage = logString.substring(k+1, m);
                break;
            }
        }
        
        /* Split Hours, Minutes, Seconds (HH:MM:SS) to be used for Date object */
        HrMinSec = logDateArr[4].split(':');
        /* Set corresponding month number to be used for Date object */
        var monthNum;
        if (logDateArr[2] == 'Jan') {
            monthNum = 0;
        } else if (logDateArr[2] == 'Feb') {
            monthNum = 1;
        } else if (logDateArr[2] == 'Mar') {
            monthNum = 2;
        } else if (logDateArr[2] == 'Apr') {
            monthNum = 3;
        } else if (logDateArr[2] == 'May') {
            monthNum = 4;
        } else if (logDateArr[2] == 'Jun') {
            monthNum = 5;
        } else if (logDateArr[2] == 'Jul') {
            monthNum = 6;
        } else if (logDateArr[2] == 'Aug') {
            monthNum = 7;
        } else if (logDateArr[2] == 'Sep') {
            monthNum = 8;
        } else if (logDateArr[2] == 'Oct') {
            monthNum = 9;
        } else if (logDateArr[2] == 'Nov') {
            monthNum = 10;
        } else {
            monthNum = 11;
        }
        /* Create GitLog object to be added to array */
        gLog = new GitLog(logHash, new Date(logDateArr[3],monthNum,logDateArr[1],HrMinSec[0],HrMinSec[1],HrMinSec[2],0), logMessage);
        /* Add GitLog object to array */
        gLogArr.push(gLog);
    }
    return gLogArr;
}
//end your code
