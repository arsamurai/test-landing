const signInForm = document.getElementById("sign-in-form") as HTMLFormElement | null
const signUpForm = document.getElementById("sign-up-form") as HTMLFormElement | null
const showFormBtns = document.querySelectorAll(
  "[data-show-form-btn]",
) as NodeListOf<HTMLButtonElement>

const getFormOffset = (): number => {
  const signInFormRect = signInForm?.getBoundingClientRect()
  const signUpFormRect = signUpForm?.getBoundingClientRect()

  const signUpOffsetTop = signUpFormRect ? signUpFormRect.top + window.scrollY : 0
  const signInOffsetTop = signInFormRect ? signInFormRect.top + window.scrollY : 0

  return window.innerWidth > 640 ? signInOffsetTop : signUpOffsetTop
}

window.addEventListener("load", () => {
  showFormBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const formOffset = getFormOffset()

      window.scrollTo({
        top: formOffset > 0 ? formOffset - 100 : 0,
        behavior: "smooth",
      })
    })
  })
})
