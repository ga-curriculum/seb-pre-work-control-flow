<textarea id="source">

<h1 class="slide-header">Control Flow</h1>

<span id=time-estimate class="color-grey-500">60 mins</span>

<p id="lesson-description">
  It would be nice if we could tell computers to make us the perfect sandwich, but that’s beyond what we can ask from our electronic friends right now. What we can do, however, is tell them to make decisions based on certain conditions using logic. You’d be surprised how much computers can get done just by comparing things to each other. Let’s see how that works.
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Control Flow

<hr>

Conditionals

<hr>

Loops

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/control-flow-619bca.pdf" target="_blank" download="control_flow_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Use comparison operators to compare data.</li>
  <li>Create conditional statements to control the flow of your program.</li>
  <li>Write “for” loops and “while” loops.</li>
</ul>

---

<h1 class="slide-header">Comparison Statements</h1>

Computers make their decisions based on comparisons. Are two things equal? Is one thing greater than another? These comparative statements always boil down to a single Boolean value: `true` or `false`.

Here’s how we can write comparison statements in JavaScript:

|Operator| Functionality | Usage |
|--| -------- | ---- | 
|`>`| Greater than | `5 > 2` | 
| `>=`| Greater than or equal to | `5 >= 5` | 
| `<`| Less than | `2 < 200` | 
| `<=`| Less than or equal to | `1 <= 72` | 
| `==`| **Loose equality** tests if the left and right sides have equal values. | `5 == "5"` | 
|`===`| **Strict equality** tests if the left and right sides have equal values AND are the same data type. | `"apples" === "apples"` |
| `!==` | **Inequality** tests if the data type OR the value is different (basically, the opposite of `===`). | `5 !== "5"` |

---
<h1 class="slide-header">Loose and Strict Equality</h1>

It’s worth reviewing the difference between those equality and inequality operators, because they’re one of the trickiest parts of JavaScript.

* When using **loose equality comparison**, or `==`, JavaScript transforms the given values so that the data types will match. (Fancy term alert: This is called “type coercion.”)
     * `"4" == 4` would evaluate to `true`.
     * `4 == 4` would evaluate to `true`.
     * `5 == 4` would evaluate to `false`.


* When using **strict equality comparison**, or `===`, JavaScript isn’t so lenient; it makes sure the data type AND value match.
     * `"4" === 4` would evaluate to `false`.
     * `4 === 4` would evaluate to `true`.


* The **inequality operator**, `!==`, is just as strict; if the data types OR the values don’t match, it will evaluate to `true`.
     * `"4" !== 4` would evaluate to `true`.
     * `4 !== 4` would evaluate to `false`.


#### Programmer Tip:
You can get a lot of confusing, unexpected answers to loose comparisons. **Always use strict equality (`===` or `!==` )** to ensure the things you compare are the same value and data type.

---

<h1 class="slide-header">Knowledge Check</h1>

Select all of the options that will evaluate to `true`.

<fieldset>
    <legend>Please select all that apply</legend>
<input type='checkbox' id='answer1' value='answer1' correct='true'/><label for='answer1'>"Baked Brie" !== 'baked brie"</label><br />
<input type='checkbox' id='answer2' value='answer2' /><label for='answer2'>17 == "17"</label><br />
<input type='checkbox' id='answer3' value='answer3' /><label for='answer3'>17 === "17"</label><br />
<input type='checkbox' id='answer4' value='answer4' /><label for='answer4'>5 * 5 < 20</label><br />
<input type='checkbox' id='answer5' value='answer5' /><label for='answer5'>99 >= 99</label><br />
</fieldset>
<button class='ant-btn ant-btn-primary multiple-choice-radio-submit'>Submit Answer</button>

---

<h1 class="slide-header">Using Comparisons to Create Conditionals</h1>

Comparison statements are nice, but they’re not that powerful on their own. After all, you don’t need a computer to tell you that `100 > 1`. The real power of comparisons lies their use in **conditional statements** to control what, when, and how things happen in your program.

And guess what — you do this all the time yourself. How do you make decisions when you’re getting ready in the morning? With conditional logic, of course.

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/conditional.png)

---

<h1 class="slide-header">Conditionals in Programming</h1>

When it comes to conditionals, a computer isn’t all that different from a human brain.

We write conditionals in the form of `if` statements that tell the computer to execute or skip a certain code block if the comparison comes out to be `true`.

```javascript
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
}
```

In plain English, this is saying: “If the assignments completed are over 80%, then tell us, ‘Ready to graduate!’”.

---

<h1 class="slide-header">Breaking Down Conditionals</h1>

Let’s break down the parts of an `if` statement:

* First, we have the `if` keyword to signal a comparison coming up.
* Then, the comparison goes inside the parentheses.
* If the comparison evaluates to `true`, the code block inside the curly braces will execute.

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/if-statement.png)

---

<h1 class="slide-header">Knowledge Check</h1>

Let’s look back at our morning routine decisions:
* “If the `temperature` is below 60 degrees, wear a coat.”
* “If it’s `raining`, bring an umbrella.”

How would you write these as conditional statements in JavaScript? (Hint: Use a `console.log` to output what you should do in each situation.)

<details>
  <summary>Reveal Answer</summary>
  Here’s how we did it:

  ```js
  if (temperature < 60) {
     console.log("Wear a coat!");
  }
  if (weather === "raining") {
     console.log("Bring an umbrella!");
  }
  ```

</details>

---

<h1 class="slide-header">Adding More Conditionals</h1>

So far, our `if` statements are limited. Something only happens when the comparison is `true`. But what about when it’s `false`? 

Conditional statements can be extended with an `else` block, which gives the computer something else to do if the conditional comes out to be `false`. 

In this example, it’s simply telling JavaScript, “If the assignments completed are NOT greater than 80%, tell us, ‘Better catch up on your homework!’”.

```javascript
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
} else {
    console.log("Better catch up on your homework!");
}
```

---

<h1 class="slide-header">Conditions on Conditions on Conditions</h1>

Conditionals don’t stop there. If you need a conditional to check for more than two possibilities, you can add more comparisons to create an `if ... else if ... else` chain, as shown below. The first conditional that turns out to be `true` is executed, and the rest of the chain is skipped entirely:

```javascript
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
} else if (assignmentsCompleted > .65) {
   console.log("Better catch up on your homework!");
} else {
    console.log("You’ve got a lot of work left to do.");
}
```

---

<h1 class="slide-header">Yes, Even More Conditions</h1>

If you saw `if... else if` chains and thought that was a lot, hold on to your seat, because we ain’t done yet. You can make your conditions even more complex by adding `if... else` statements and nesting your conditionals.

For example, choosing what to wear might entail a decision tree that considers more than just the temperature and whether or not it’s raining. Here’s how you could make that happen:

```javascript
if (temperature < 60) {
    if (weather === "raining") {
        console.log("It's cold and raining. Time for a heavy rain jacket.");
    } else if (weather === "snowing") {
        console.log("It's cold and snowing. Get out the parka.");
    } else {
        console.log("It's cold and clear. Feels like sweater weather today.");
    }
} else {
    if (weather === "raining") {
        console.log("It's warm but it's raining. A light windbreaker will do.");
    } else if (weather === "sunny") {
        console.log("It's warm and sunny. Tank top it is.");
    } else {
        console.log("It's warm and clear. Regular old T-shirt day.");
    }
}
```

---

<h1 class="slide-header">Logical Operators</h1>

So far, we've only had one comparison inside of our conditionals. However, you can combine any number of comparisons together with **logical operators**  such as AND (`&&`) and OR (`||`). You've already seen one operator, NOT (`!`), which changes any comparison into the opposite boolean.

For example, if we only want our windbreaker when it's cold AND windy outside, we can combine those thoughts together with `&&`:

```javascript
if(temperature === "cold" &&  windSpeed > 10){
	console.log("Time for the windbreaker!");
}
```

Similarly, if we want our boots when its either snowing OR raining, we can. use the `||` operator:

```javascript
if(weather === "snowing" || weather === "raining"){
	console.log("Looks like we need to wear boots today.");
}
```

---

<h1 class="slide-header">Buckle Up For Conditionals</h1>

Conditionals are exciting because they allow your program to make decisions based on user input. For the next few code challenges, we’ll ask you to write code inside of a *function* — don’t worry, we’ll get to functions soon! For now, functions are allowing us to test whether or not conditional logic works under different circumstances. 

Inside this first function, you’ll have access to a variable named `userIsBuckled`. Your challenge is to write a conditional statement that evaluates this variable and makes the following decisions:

* If `userIsBuckled` is equal to `true`, log the message `You deserve a safe driver discount!` to the console.
* If `userIsBuckled` is equal to `false`, log the message `Click it or ticket!` to the console.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Buckle Up for Conditionals" src="https://codepen.io/GAmarketing/embed/jORVedN?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GAmarketing/pen/jORVedN">
    Buckle Up for Conditionals</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
    on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">A Tense Negotiation</h1>

In this challenge, we’ll program a conditional sequence to respond to a given `price` input. 

* If the price variable is less than `5`, log the message `"I'll take it!"`.
* If the price variable is greater than `10`, log the message `"______ for this? You must be joking!"` Fill in the blank with the `price` variable using string concatenation (i.e., `string1` + `string2`).
* If neither of the conditions above are met, log the message `"Take off 10% and you've got a deal."`.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="A Tense Negotiation" src="https://codepen.io/GAmarketing/embed/ZEZBqwQ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GAmarketing/pen/ZEZBqwQ">
    A Tense Negotiation</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
    on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Introducing Loops</h1>

If you thought the delights of conditionals would be done in one go, think again. You can keep the fun going with **loops**. In programming, a loop will continue to execute as long as a certain condition is met.

We’ll cover two kinds of JavaScript loops here: `for` loops and `while` loops. They both get the job done, but we’ll learn which situations make the most sense for each kind.

---

<h1 class="slide-header">For Loops</h1>

We'll start with `for` loops, which programmers love for their accuracy and precision.

The syntax of a `for` loop in JavaScript may look a little cryptic — but don't fret. It can be broken down in terms we’ve already learned.

Here’s a basic `for` loop:

```javascript
for (let i = 0; i < 100; i++) {
  console.log(i);
}
```

---

<h1 class="slide-header">Knowledge Check</h1>

Before we get into `for` loop syntax, let’s take a moment to pause and think things through. Take a wild guess: What will this `for` loop do?

```javascript
for (let i = 0; i < 100; i++) {
  console.log(i);
}
```

<fieldset>
    <legend>Please select one of the following</legend>
<input type='radio' name='answers' id='answer1' value='answer1' correct='true'/><label for='answer1'>Count every number from 0 up to, but not including, 100.</label><br />
<input type='radio' name='answers' id='answer2' value='answer2' /><label for='answer2'>Count every number from 0 up to, and including, 100</label><br />
<input type='radio' name='answers' id='answer3' value='answer3' /><label for='answer3'>Add 2 to each number, starting at 0, until it reaches 100</label><br />
</fieldset>
<button class='ant-btn ant-btn-primary multiple-choice-radio-submit'>Submit Answer</button>

---

<h1 class="slide-header">Breaking Down a For Loop</h1>

Let's break down the loop into several parts:

- The iterator variable
- The conditional
- The final expression
- The code block

---

<h1 class="slide-header">The iterator variable</h1>

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/for-variable.png)

* We start with the `for` keyword, with the **control statement** wrapped in parentheses after it.
* In the control statement, we declare a variable upon which to operate: `let i = 0`. This variable, `i`, is our **iterator**. In this case, we’ll have it start at `0`.
* To separate each part of our `for` loop statement, we **must use semicolons**.

**Note**: As you work more with loops, you’ll notice this declaration often contains `i`. It’s simply a convention that stands for “iterator.”

---

<h1 class="slide-header">The Conditional</h1>

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/for-condition.png)

* Next comes the conditional statement: `i < 100`. Whenever the loop is wondering if it should keep going, it will check this condition.
* If the condition evaluates to `true` — in this case, if `i` is less than `100` — the loop will execute the code block and then check the conditional again.
* Once the condition evaluates to `false`, the loop will end. Here, once the `i` variable becomes equal to `100`, this condition will become `false` and the loop will stop.

---

<h1 class="slide-header">The Final Expression</h1>

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/for-operator.png)

We’ve made it to the last part of the control statement: the **final expression**. This defines what the loop should do after each iteration of the code block. In this example, `i++` is using the **post-fix operator**, `++`, to say, “After each go-around of the loop, add `1` to the current value of the `i` variable.”

Although `i++` is the most common, you could perform any operation in the final expression — perhaps `i--` or `i += 2` — just as long as the operation brings the iterator closer to reaching the limit of the conditional statement.

---

<h1 class="slide-header">The Code Block</h1>

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/for-action.png)

Once we’ve made it out of the control statement, which tells the loop how long it should run, we get to the **code block**, which tells the loop what to do in each iteration. Here, we’re simply logging the value of `i` to the console.

When the value has been logged, the loop will return to the control statement to see if it should keep going.

---

<h1 class="slide-header">Putting it All Together</h1>

```javascript
for (let i = 0; i < 100; i++) {
  console.log(i);
}
```

With all of the pieces working together, we can summarize this `for` loop like so:
1. Start an iterator variable, `i`, at the value of `0`.
2. If the value of `i` is less than `100`, execute the code block.
3. After the code block has run, add `1` to the `i` variable.

The loop will repeat Steps 2 and 3 until the conditional, `i < 100`, is finally `false`. At that point, the loop “exits” and the code block no longer runs.

---

<h1 class="slide-header">Knowledge Check</h1>

How many times would this `for` loop run?

```javascript
for (let i = 5; i < 10; i++) {
    console.log(i);
}
```

<fieldset>
    <legend>Please select one of the following</legend>
<input type='radio' name='answers' id='answer1' value='answer1'/><label for='answer1'>4</label><br />
<input type='radio' name='answers' id='answer2' value='answer2'  correct='true' /><label for='answer2'>5</label><br />
<input type='radio' name='answers' id='answer3' value='answer3' /><label for='answer3'>6</label><br />
<input type='radio' name='answers' id='answer4' value='answer4' /><label for='answer4'>10</label><br />
</fieldset>
<button class='ant-btn ant-btn-primary multiple-choice-radio-submit'>Submit Answer</button>

---

<h1 class="slide-header">Echo Chamber</h1>

Write a `for` loop that logs the message `"Hello?"` three times.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Echo Chamber" src="https://codepen.io/GAmarketing/embed/rNbWqPL?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GAmarketing/pen/rNbWqPL">
    Echo Chamber</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
    on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Looping Over an Array</h1>

One of the most common uses of a `for` loop is to loop through each element of an array. We use the `i` iterator to represent the index of the array and start it at `0` so we can access elements from the first to the last index.

The loop below will `console.log` every element in the `cookies` array:

```javascript
const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}
```

Notice the conditional `i < cookies.length`? Because array indices start at `0`, the index of the last element will always be one less than the length of the array. We want to keep the loop going for as long as the iterator is less than `array.length`.

---

<h1 class="slide-header">Roll Call</h1>

You need to make sure the whole team is ready before you roll out. We’ve provided an array of `characters`, and it’s up to you to `console.log()` each one of them by using a `for` loop.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Roll Call" src="https://codepen.io/GAmarketing/embed/ExJNdrZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GAmarketing/pen/ExJNdrZ">
    Roll Call</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
    on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">While Loops</h1>

Let’s meet the simpler, cleaner cousin of the `for` loop: the `while` loop. It should be much easier to read and figure out what’s going on here, with no cryptic `++` or long control statements:

```javascript
let number = 0;
while (number < 11) {
    number = number + 1;
}
```

That’s right, there’s just one part of a `while` loop: the conditional. As long as the conditional is `true`, the loop will keep going. This loop will add `1` to the `number` variable as long as it’s less than `11`, at which point the loop will exit.

---

<h1 class="slide-header">Danger Zone</h1>

`while` loops might seem nice and slick, but they’re notorious for causing infinite loops and crashing browsers everywhere.

In a `for` loop, the final expression ensures that we’re progressing toward making the conditional `false`. But with a `while` loop, you must ensure the code **inside the code block** gives you an exit strategy by eventually making the conditional statement `false`.

The loop below, for instance, is an easy way to crash your browser and freeze up the tab with unlimited executions of the code block. Think it through: Why is this the case?

```javascript
let number = 10;
while (number < 500) {
    number = number - 1;
}
```

---

<h1 class="slide-header">Danger Zone</h1>

The answer: Because subtracting `1` from the `number` variable will always keep the conditional `number < 500` `true`, this loop has no way of stopping. The only way out is the time-tested “close your computer as quickly as you can and run away” trick.

```javascript
let number = 10;
while (number < 500) {
    number = number - 1;
}
```

---

<h1 class="slide-header">"For" or "While", That is the Question</h1>

Upon seeing how simple the `while` loop is, most beginners reach for it whenever they can. However, it’s not always the best tool for the job. You have to define a variable outside of the loop (not often a great thing), and you run the risk of infinite loops.

Considering how strictly the `for` loop is defined, there’s a general rule on when each type of loop is appropriate:
* If you know **exactly how many times** the loop should execute, use a `for` loop for its precision. This includes iterating over an array, which has a specific amount of items.
* If you’re **not sure how many times** the loop has to run but you do know when it should stop, use a `while` loop.

---

<h1 class="slide-header">The Wild World of Crypto</h1>

You recently invested $1,000 into cryptocurrency. Good luck! Using a `for` loop and a conditional, log the value of your `investment` throughout the next 10 years by using the following rules:

* Each year, the investment increases by 10%. Add 10% to the `investment` variable before logging the value.
* In the seventh year, the investment loses 75% **instead** of increasing. Eeek!

 Use a `for` loop to log how many years it has been and how much the investment is worth for each year. Your logs should look like this:
 
 ```
 Years: 1 Value: 1100
 Years: 2 Value: 1210
 ```

 <iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="The Wild World of Cryptocurrency" src="https://codepen.io/GAmarketing/embed/LYvbgqz?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GAmarketing/pen/LYvbgqz">
    The Wild World of Cryptocurrency</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>

 ---

<h1 class="slide-header">Countdown</h1>

Use a `while` loop to count down the `daysUntilTheFinale` of your favorite show, starting at 30 days. For each day, log the message `"Only ______ more days!"` by filling in the value of `daysUntilTheFinale` in the blank. Stop the countdown once `daysUntiltheFinale` reaches `0`, then log the message `"It's finally here!"`.

Your first message should be `"Only 30 more days!"` and it should log down to `"Only 1 more days!"`.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Countdown" src="https://codepen.io/GAmarketing/embed/VwNmEgQ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GAmarketing/pen/VwNmEgQ">
    Countdown</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
    on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Conclusion</h1>

Our JavaScript programs are suddenly a lot smarter now that they can use conditionals and control flow!

No matter how complex an application's underlying goals become, you'll always be working with these fundamental tools to direct the flow of your program.

</textarea>