const signUpForm = document.getElementById("sign-up-form") as HTMLFormElement | null

if (!signUpForm) {
  console.error("Form is not defined!")
} else {
  const maleBtn = signUpForm.querySelector("#male-btn") as HTMLButtonElement | null
  const femaleBtn = signUpForm.querySelector("#female-btn") as HTMLButtonElement | null
  const nameInput = signUpForm.querySelector("#name") as HTMLInputElement | null
  const birthdayInput = signUpForm.querySelector("#birthday") as HTMLInputElement | null
  const agreeInput = signUpForm.querySelector("#agree") as HTMLInputElement | null

  let gender = ""

  maleBtn?.addEventListener("click", function () {
    femaleBtn?.classList.remove("bg-blue", "text-white")
    maleBtn.classList.add("bg-blue", "text-white")
    gender = "male"
  })

  femaleBtn?.addEventListener("click", function () {
    maleBtn?.classList.remove("bg-blue", "text-white")
    femaleBtn.classList.add("bg-blue", "text-white")
    gender = "female"
  })

  signUpForm.addEventListener("submit", function (event: Event) {
    event.preventDefault()

    const formValues = {
      gender: gender || "не вибрано",
      name: nameInput?.value.trim(),
      birthday: birthdayInput?.value.trim(),
      agree: agreeInput?.checked ? "+" : "-",
    }

    alert(JSON.stringify(formValues))
  })
}
