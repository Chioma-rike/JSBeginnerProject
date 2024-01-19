function sumSalary() {
    staffSalary = {
        CHIOMA: 10000,
        ABBA: 8000,
        JOY: 5000
    }
    let sum = (staffSalary.CHIOMA) + (staffSalary.ABBA) + (staffSalary.JOY)

//   let sum = 0;

//   for (let salary in staffSalary) {
//     sum += Number(staffSalary[salary]);
//   }

  console.log(sum);
}
sumSalary()

function getmilk() {
    alert ("Welcome Ebro's Foodie")
    let milk = prompt('what milk do you want');
    alert ('Nice ' + milk + ' milk is available')
    Number = prompt('How many milk do you want?');
    let milkAmount = 30;
    alert ("You need " + Number + " and that would be" + " $"+ Number * + milkAmount )
}

getmilk()

const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);