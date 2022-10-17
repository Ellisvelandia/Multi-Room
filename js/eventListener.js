window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -25;
      break;

    case "a":
      // move player to the left
      keys.a.pressed = true
      break;
    //  nove the player fot the right
    case "d":
      keys.d.pressed = true
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      // move player to the left
      keys.a.pressed = false
      break;
    //  nove the player fot the right
    case "d":
      keys.d.pressed = false
      break;
  }
});
