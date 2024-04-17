export const inputBtnsNumberControl = () => {
  const wrappers = document.querySelectorAll(".common__button-number-wrapper");

  if (wrappers?.length > 0) {
    wrappers.forEach((wrapper) => {
      const input = wrapper.querySelector(".common__input");
      const decreaseBtn = wrapper.querySelector(
        ".common__button-button--decrease"
      );
      const increaseBtn = wrapper.querySelector(
        ".common__button-button--increase"
      );

      if (input && increaseBtn && decreaseBtn) {
        increaseBtn.addEventListener("click", () => {
          input.stepUp();

          input.dispatchEvent(new Event("change"));
        });

        decreaseBtn.addEventListener("click", () => {
          if (input.value && Number(input.value) > Number(input.min)) {
            input.stepDown();
          } else {
            input.value = input.min;
          }

          input.dispatchEvent(new Event("change"));
        });
      }
    });
  }
};

const COMPARE_VALS = [">", "<", ">=", "<="];

const addFiltersBlock = () => {
  const filtersBlock = document.querySelector(".common__filters__block");
  const wrapper = document.createElement("div");
  const beforeInput = document.createElement("input");
  const afterInput = document.createElement("input");
  const filtersSelect = document.createElement("select");
  const removeButton = document.createElement("button");

  COMPARE_VALS.forEach((val, index) => {
    const opt = document.createElement("option");
    opt.value = val;
    opt.innerHTML = val;

    if (index === 0) {
      opt.selected = true;
    }

    filtersSelect.appendChild(opt);
  });

  beforeInput.type = "text";
  afterInput.type = "text";
  removeButton.type = "button";

  wrapper.classList.add("common__parameters-block");
  beforeInput.classList.add(
    "js_parametrs-step-input",
    "common__input",
    "common__input--condition",
    "common__input--condition--left"
  );
  afterInput.classList.add(
    "js_parametrs-step-input",
    "common__input",
    "common__input--condition",
    "common__input--condition--right"
  );
  filtersSelect.classList.add("common__select");
  removeButton.classList.add(
    "common__button-button",
    "common__button-button--decrease",
    "filters__bt--remove"
  );

  removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <rect x="7" y="12.001" width="1" height="9" transform="rotate(-90 7 12.001)" fill="#151833" fill-opacity="0.46"/>
                            </svg>`;

  removeButton.addEventListener("click", () => {
    filtersBlock.removeChild(wrapper);
  });

  wrapper.appendChild(beforeInput);
  wrapper.appendChild(filtersSelect);
  wrapper.appendChild(afterInput);
  wrapper.appendChild(removeButton);

  filtersBlock.appendChild(wrapper);
};

export const filtersBtns = () => {
  const addBtn = document.querySelector(".filters__bt--add");

  if (addBtn) {
    addBtn.addEventListener("click", () => {
      addFiltersBlock();
    });
  }
};
