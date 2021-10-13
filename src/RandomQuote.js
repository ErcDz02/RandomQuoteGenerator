import React, { Component } from "react";
import "./style.css";
class RandomQuote extends Component {
  constructor() {
    super();

    this.state = {
      quote: "Random Quote Generator",
      author: "by Eric Dominguez",
      color: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const quoteArr = [
      [`“Be yourself; everyone else is already taken.”`, "Oscar Wilde"],
      [
        `"You've gotta dance like there's nobody watching,
      Love like you'll never be hurt,
      Sing like there's nobody listening,
      And live like it's heaven on earth.”`,
        "William W. Purkey",
      ],
      [`“Be the change that you wish to see in the world.”`, "Mahatma Gandhi"],
      [
        `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        "Mahatma Gandhi",
      ],
      [
        `
      “Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
        "Martin Luther King Jr.",
      ],
      ["“Without music, life would be a mistake.”", "Friedrich Nietzsche"],
      [`“We accept the love we think we deserve.”`, "Stephen Chbosky"],
      [
        `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”`,
        "Marilyn Monroe",
      ],
      [
        `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”`,
        "Albert Einstein",
      ],
      [
        `“We are all in the gutter, but some of us are looking at the stars.”`,
        "Oscar Wilde",
      ],
      [
        `“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”`,
        "Neil Gaiman",
      ],
      [
        `“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”`,
        "Bill Keane",
      ],
    ];
    let ranNum = Math.floor(Math.random() * quoteArr.length);
    this.setState({
      quote: quoteArr[ranNum][0], // quote: ''
      author: quoteArr[ranNum][1],
    });
  }

  render() {
    return (
      <div>
        <div id="quote-box">
          <div id="quote-mini-box">
            <h1 id="text">{this.state.quote}</h1>
            <h3 id="author">
              <em>{this.state.author}</em>
            </h3>
          </div>

          <div id="button-edits">
            <button
              id="new-quote"
              onClick={this.handleClick}
              className="button-4"
              role="button"
            >
              Random Quote
            </button>
            <a href="https://twitter.com/intent/tweet" id="tweet-quote">
              <button className="button-4" role="button">
                Retweet
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomQuote;

{
  /*All you need to do is have a random number, get the element in the array at the index of the random number and show that to the text and display an author. Connect the button to the functionality as well!*/
}

{
  /*
When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.*/
}
