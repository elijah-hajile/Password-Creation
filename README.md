# Password Creation Homework Assignment 3

For this week's homework assignment was generating a password
using Javascript with some code already -- the goal was to generate a proper password with a mix of characters that could be validated in the console.

## Steps Taken to Completion

My first steps towards this assignment was to create arrays using 'var' and specifying a string in an array. Since distinct characters were needed, I created arrays for these chracters. Thereafter, I needed to create expressions to only validate characters used from the arrays created.

## Using the Characters

In order for me to use the characters to generate a password at a specific length, I used a for loop, and used 'var options' to push the lists into a random string of characters. I created generateRandomList as a function, and expressed it later as a variable to generate random characters, and to use the new function generateRandomChar(options), I used options to specify the characters from the list. Since generateRandomChar was not a variable, I made it a variable, and made it equal randomList(generateRandomList) to pull all array characters, and used console.log to push it to options.
