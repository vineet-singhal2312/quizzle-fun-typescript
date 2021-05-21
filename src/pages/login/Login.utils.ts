export const takeUserName = (
  e: React.ChangeEvent<HTMLInputElement>,
  setUserInput: React.Dispatch<React.SetStateAction<string>>
) => {
  setUserInput(e.target.value);
};

export const submitNameHandler = (
  dispatch: any,
  userInput: string,
  navigate: any
) => {
  if (userInput) {
    dispatch({ type: "initialize-user-name", payload: userInput });
    navigate("/quizzes");
  } else {
    alert("Enter your name!!");
  }
};
