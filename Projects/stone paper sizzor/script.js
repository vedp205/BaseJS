const choices = document.querySelectorAll(".choice");
const win_msg = document.querySelector(".win_msger");
const user_score = document.querySelector("#user_score_id");
const comp_score = document.querySelector("#comp_score_id");
//////////////////////////////////////////////////
let usersc = 0;
let compsc = 0;

//////////////////////////////////////////////////
// comp choice -It generate random number ;
const generate_numbers = () => {
  let three_choice = ["rock", "paper", "scissor"];
  let randm = Math.floor(Math.random() * 3);
  return three_choice[randm];
};
////////////////////////////////////////////////////
// function that use in if-else condi
const win = (user_win, user_choice, comp_choice) => {
  if (user_win) {
    usersc++;
    user_score.innerText = usersc;
    win_msg.innerText = `You win ${user_choice} beats ${comp_choice}`;
  } else {
    compsc++;
    comp_score.innerText = compsc;
    win_msg.innerText = `You loose ${comp_choice} beats ${user_choice}`;
  }
};
const draw = () => {
  console.log(`Game is draw`);
  win_msg.innerText = "Game is draw";
};
//////////////////////////////////////////////////////////
const user_choice = (choiceid) => {
  console.log(`User select = ${choiceid}`);
  const comp_choice = generate_numbers();
  console.log(`Comp select = ${comp_choice}`);
  //////////////////////////////////////////////////////////
  // if with comp and user
  if (choiceid == comp_choice) {
    draw();
  } else {
    let user_win = true;
    if (choiceid === "rock") {
      user_win = comp_choice === "paper" ? false : true;
    } else if (choiceid === "paper") {
      user_win = comp_choice === "scissor" ? false : true;
    } else {
      user_win = comp_choice === "rock" ? false : true;
    }
    win(user_win, user_choice, comp_choice);
  }
  ////////////////////////////////////////////////////////////
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceid = choice.getAttribute("id");
    user_choice(choiceid);
  });
});
