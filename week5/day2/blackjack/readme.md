# Simple Blackjack Game

This game allows the user to 'Hit' or 'Stand' and allows for aces to be either one point or eleven, depending on the user's current point total. The player or dealer 'bust' if they go over 21. Hitting 'Deal' will start a new game.

## What I used

- HTML
- CSS (given by bootcamp instructors)
- JavaScript -- DOM manipulation, event listeners

## Some things I learned

I think the biggest thing I learned was to console.log everything. The hardest part for me was getting the aces to work and ironing out the game/stand logic. For each step, I had to add another console.log with the line number or the name of the function so I could tell what was being triggered and what wasn't. It really helped me understand the flow of my 'if' statements better.

## Looking Forward

Looking forward, I'd like to play around with the CSS some; I didn't have time before this mini-project was due, and it wasn't a priority.

I'd also like to have the first dealer card be face down -- that was the only original goal that I didn't have time to address. As it stands, it's coded into the logic that the dealer will stand if their point total is 17 or greater. So, if their first card isn't face down, the player can see their total and plan accordingly. If the dealer's points total 18 and the player's total 19, if the player stands they'll automatically win. Having that first card be face down would add another level of complexity for the player.
