# Welcome to Park-a-pedia, a site to explore parks and historical sites across the US

![Park-a-pedia Home Page](/FrontEndProject/pictures/parkapediaHome.png)

Park-a-pedia was created as my frontend project for my bootcamp with DigitalCrafts. Users can search parks and historical sites by name, or, if they want a broader search, they can use the 'Explore Parks' section and search by state. If they want to be surprised, they can click 'Random Park' and be taken to the page of a random park in the National Park Service API.

Click [here](https://medium.com/@jayelonlasseigne/building-a-website-with-the-nps-api-1c5cc0c68cd9?postPublishedType=initial) to view the Medium article I wrote on this project!

## What I used

- HTML
- CSS -- transitions, transforms, dynamic navbar, flexbox, css grid, media queries
- JavaScript -- DOM manipulation, async functions, event listeners
- An API from the [National Park Service](https://www.nps.gov/subjects/developer/guides.htm)

## Getting Started

The API does require a key to work properly! Go to the link above and register for an API key. Once you have it, go to the pages below and enter your key on the lines listed.

| Page                | Lines       |
| ------------------- | ----------- |
| exploreParksPage.js | 23          |
| individualPark.js   | 32 and 80   |
| randomPark.js       | 502 and 550 |

## Helpful Resources

While creating Park-a-pedia, I used these resources to achieve some of the functionality and the styling:

- [Navbar link animations](https://codepen.io/t_afif/pen/OJbGzrG) (first option)
- [Responsive navbar with hamburger menu](https://www.youtube.com/watch?v=flItyHiDm7E)
- [Home page/search page picture overlay](https://www.youtube.com/watch?v=DZg6UfS5zYg)
- [Autocomplete on an input field](https://www.w3schools.com/howto/howto_js_autocomplete.asp)
- [Unsplash images for home page/search page background](https://awik.io/generate-random-images-unsplash-without-using-api/)

## Some things I learned

1. Design 'mobile first!' I didn't and I suffered the consequences. Lots of time spent on media queries and having to re-code parts of the pages.
2. You have to stop adding things at some point.
3. Even if an API has lots of good documentation, it still might not do what you want it to do out of the box. You might have to put in some extra work.
4. I should've thought about the layout of the pages more before I started. I had sketched some stuff out, but I kept changing my mind mid-code and I wasted a lot of time.

## Looking Forward

I flip-flopped alot while creating Park-a-pedia, between "wow, I'm super cool, this is awesome," and "I have no idea what I'm doing," or "my website looks terrible." Overall, though, I am happy with the site and I had fun doing it! It feels great to see the mostly-finished product and know that I coded the majority of it from scratch.

In the future, there are some things I'd like to add:

- Code to 'catch' invalid entries in the input field on the main page. That input field was something I added last minute and it took forever to figure out, even with w3schools. I just didn't have time before the project was due to add the 'catch' in. Right now, if a user types something invalid and hits the button, it takes them to a page but nothing loads on the screen. The code breaks.
- One thing I tried to figure out but eventually scrapped because of time was I wanted to have a cool scrolling animation on the home page, where you scroll down and the two divs below the title appear. I looked into it a little bit, decided it was too intense, and moved on.
- Another thing I scrapped was changing the way the 'activities' load on the individual park pages. Right now, they populate on the bottom of the page in blue spans. It looks ok if there are only a few, but for the bigger parks that have over 20, it looks cluttered, especially for mobile devices. I threw around making it a modal like the alerts, or storing them in an acordian, but I scrapped it for time and left it as is.
- I'd also like to add more information on the individual park pages as well. The National Park API has a rediculous amount of information stored in it; I barely scratched the surface with what I have now.
- Last but not least, I'd like to add 'favorite' functionality. That was in the original design, but like the rest, got scrapped for time. I briefly looked into it and local storage, but it looked too time consuming.
