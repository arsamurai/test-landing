import IMask from "imask"

const birthday = document?.getElementById("birthday")

const birthdayMaskOptions = {
  mask: "00/00/0000",
}

const masks = {
  birthdayMask: () => {
    new (IMask as any)(birthday, birthdayMaskOptions)
  },
}

if (birthday) {
  masks.birthdayMask()
}
