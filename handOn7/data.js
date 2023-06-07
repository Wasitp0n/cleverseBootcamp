const userName = document.getElementById("user");
const pW = document.getElementById("pw");
const textButton = document.getElementById("buttin");

textButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value && pW.value) {
    const userNameV = userName.value;
    const pWV = pW.value;
    console.log(userNameV + pWV);
    userName.value = "";
    pW.value = "";
    return getLogin(userNameV, pWV);
    //login(userNameV, pWV);
    //
  } else {
    alert("Hey, Mate! Please your username or password");
  }
});

const getLogin = async (username, password) => {
  const loginOb = { username, password };
  console.log(loginOb);
  try {
    const response = await fetch(
      "https://api.learnhub.thanayut.in.th/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(loginOb),
      }
    );
    console.log(response);

    const data = await response.json();
    if (data.statusCode === 400) {
      alert(data.message);
      //  return;
    }
    //console.log(data.accessToken);
    return data.accessToken;
  } catch (err) {
    console.log(err);
  }
};

// const login = async (userNameV, pWV) => {
//   let keyPutIn = { userNameV, pWV };
//   try {
//     const res = await fetch("https://api.learnhub.thanayut.in.th/user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(keyPutIn),
//     });
//     console.log(res);
//     // const data = await res.json();
//     // console.log(data);
//     //return data;
//   } catch (err) {
//     console.log(err);
//   }
