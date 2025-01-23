const signUpFormList = document.querySelectorAll(
  "[data-sign-up-form]",
) as NodeListOf<HTMLFormElement>

const configSignUpForm = (form: HTMLFormElement) => {
  if (!form) {
    console.error("Form is not defined!")
  } else {
    const maleBtn = form.querySelector("#male-btn") as HTMLButtonElement | null
    const femaleBtn = form.querySelector("#female-btn") as HTMLButtonElement | null
    const nameInput = form.querySelector("#name") as HTMLInputElement | null
    const birthdayInput = form.querySelector("#birthday") as HTMLInputElement | null
    const agreeInput = form.querySelector("#agree") as HTMLInputElement | null

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

    const clearValues = () => {
      gender = ""
      if (nameInput) nameInput.value = ""
      if (birthdayInput) birthdayInput.value = ""
      if (agreeInput) agreeInput.checked = false

      femaleBtn?.classList.remove("bg-blue", "text-white")
      maleBtn?.classList.remove("bg-blue", "text-white")
    }

    form.addEventListener("submit", function (event: Event) {
      event.preventDefault()

      const formValues = {
        gender: gender || "не вибрано",
        name: nameInput?.value.trim(),
        birthday: birthdayInput?.value.trim(),
        agree: agreeInput?.checked ? "+" : "-",
      }

      alert(JSON.stringify(formValues))
      clearValues()
    })
  }
}

signUpFormList.forEach(configSignUpForm)
