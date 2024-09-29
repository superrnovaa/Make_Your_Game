function createHistoryDiv(container) {
  console.log(container);
  let Container = document.querySelector(`.${container}`);
  if (Container) {
    Container.style.display = "flex";
  } else {
    grid = document.querySelector(".grid");
    const Div = document.createElement("div");
    Div.classList.add(`${container}`);
    let text;
    if (container === "IntroContainer") {
      text =
        "You are Pac-Man, the plump yellow orb with a mouth. You live happily in Pac-Land eating pellets and fruits alongside your fellow Pac-People. One day, the evil Ghost Gang (Blinky, Pinky, Inky, and Clyde) invade Pac-Land. Led by their malevolent leader The Ghost, they place a ghostly barrier around Pac-Land trapping the Pac-People inside. It's up to you Pac-Man to face the Ghost Gang, make your way through the maze and break the barrier to free your people!";
    } else if (container === "DevelopContainer") {
      text =
        "You've been navigating the maze, chomping pellets and evading the Ghost Gang. Their attempts to scare you with sudden changes of direction have failed so far. You've cleared over half the maze and worn down the ghostly barrier. But the Ghosts are getting angrier and more erratic as their leader The Ghost fuels them with promises of a Pac-Free future. You'll have to up your game to make it out alive!";
    }
    const TextNode = document.createTextNode(text);
    Div.appendChild(TextNode);
    grid.appendChild(Div);
  }
}

function removeHistoryDiv(container) {
  const div = document.querySelector(`.${container}`);
  if (div) {
    div.style.display = "none";
  }
}
