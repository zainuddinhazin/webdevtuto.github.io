/**
 * Main
 */

"use strict";

let menu, animate;

(function () {
  // Initialize menu
  //-----------------

  let layoutMenuEl = document.querySelectorAll("#layout-menu");
  layoutMenuEl.forEach(function (element) {
    menu = new Menu(element, {
      orientation: "vertical",
      closeChildren: false,
    });
    // Change parameter to true if you want scroll animation
    window.Helpers.scrollToActive((animate = false));
    window.Helpers.mainMenu = menu;
  });

  // Initialize menu togglers and bind click on each
  let menuToggler = document.querySelectorAll(".layout-menu-toggle");
  menuToggler.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      window.Helpers.toggleCollapsed();
    });
  });

  // Display menu toggle (layout-menu-toggle) on hover with delay
  let delay = function (elem, callback) {
    let timeout = null;
    elem.onmouseenter = function () {
      // Set timeout to be a timer which will invoke callback after 300ms (not for small screen)
      if (!Helpers.isSmallScreen()) {
        timeout = setTimeout(callback, 300);
      } else {
        timeout = setTimeout(callback, 0);
      }
    };

    elem.onmouseleave = function () {
      // Clear any timers set to timeout
      document.querySelector(".layout-menu-toggle").classList.remove("d-block");
      clearTimeout(timeout);
    };
  };
  if (document.getElementById("layout-menu")) {
    delay(document.getElementById("layout-menu"), function () {
      // not for small screen
      if (!Helpers.isSmallScreen()) {
        document.querySelector(".layout-menu-toggle").classList.add("d-block");
      }
    });
  }

  // Display in main menu when menu scrolls
  let menuInnerContainer = document.getElementsByClassName("menu-inner"),
    menuInnerShadow = document.getElementsByClassName("menu-inner-shadow")[0];
  if (menuInnerContainer.length > 0 && menuInnerShadow) {
    menuInnerContainer[0].addEventListener("ps-scroll-y", function () {
      if (this.querySelector(".ps__thumb-y").offsetTop) {
        menuInnerShadow.style.display = "block";
      } else {
        menuInnerShadow.style.display = "none";
      }
    });
  }

  // Init helpers & misc
  // --------------------

  // Init BS Tooltip
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Accordion active class
  const accordionActiveFunction = function (e) {
    if (e.type == "show.bs.collapse" || e.type == "show.bs.collapse") {
      e.target.closest(".accordion-item").classList.add("active");
    } else {
      e.target.closest(".accordion-item").classList.remove("active");
    }
  };

  const accordionTriggerList = [].slice.call(
    document.querySelectorAll(".accordion")
  );
  const accordionList = accordionTriggerList.map(function (accordionTriggerEl) {
    accordionTriggerEl.addEventListener(
      "show.bs.collapse",
      accordionActiveFunction
    );
    accordionTriggerEl.addEventListener(
      "hide.bs.collapse",
      accordionActiveFunction
    );
  });

  // Auto update layout based on screen size
  window.Helpers.setAutoUpdate(true);

  // Toggle Password Visibility
  window.Helpers.initPasswordToggle();

  // Speech To Text
  window.Helpers.initSpeechToText();

  // Manage menu expanded/collapsed with templateCustomizer & local storage
  //------------------------------------------------------------------

  // If current layout is horizontal OR current window screen is small (overlay menu) than return from here
  if (window.Helpers.isSmallScreen()) {
    return;
  }

  // If current layout is vertical and current window screen is > small

  // Auto update menu collapsed/expanded based on the themeConfig
  window.Helpers.setCollapsed(true, false);
})();

// EXERCISES

// When the user clicks the "Show Answer" button
$("#showAnswerBtn").click(function () {
  // Show the correct answer
  if ($("#answer").val()) {
    $("#answer").val("").removeClass("text-primary").prop("readonly", false);
    // If the input field is empty, show the default value
  } else {
    $("#answer")
      .val(correctAnswer)
      .addClass("text-primary")
      .prop("readonly", true);
  }
});

// When the user clicks the "Clear Progress" button
$("#clearProgressBtn").click(function () {
  // Clear the saved data from local storage
  // Show confirmation popup
  if (confirm("Are you sure you want to delete your progress?")) {
    localStorage.removeItem("exercises-html-attributes-1");
    localStorage.removeItem("exercises-html-attributes-2");
    localStorage.removeItem("exercises-html-attributes-3");
    localStorage.removeItem("exercises-html-attributes-4");
  }

  // Refresh the page to update the tick/X icon
  location.reload();
});

// Exercise 1
// Check if the user has answered the question correctly before
if (localStorage.getItem("exercises-html-attributes-1")) {
  // If so, show a tick icon
  $("#exercises-html-attributes-1-done").html(
    `<i class="menu-icon tf-icons bx bx-check fs-1 text-primary"></i>`
  );
  $("#exercises-html-attributes-1").append(
    `<i class="menu-icon tf-icons bx bx-check"></i>`
  );
}

// Exercise 2
// Check if the user has answered the question correctly before
if (localStorage.getItem("exercises-html-attributes-2")) {
  // If so, show a tick icon
  $("#exercises-html-attributes-2-done").html(
    `<i class="menu-icon tf-icons bx bx-check fs-1 text-primary"></i>`
  );
  $("#exercises-html-attributes-2").append(
    `<i class="menu-icon tf-icons bx bx-check"></i>`
  );
}

// Exercise 3
// Check if the user has answered the question correctly before
if (localStorage.getItem("exercises-html-attributes-3")) {
  // If so, show a tick icon
  $("#exercises-html-attributes-3-done").html(
    `<i class="menu-icon tf-icons bx bx-check fs-1 text-primary"></i>`
  );
  $("#exercises-html-attributes-3").append(
    `<i class="menu-icon tf-icons bx bx-check"></i>`
  );
}

// Exercise 4
// Check if the user has answered the question correctly before
if (localStorage.getItem("exercises-html-attributes-4")) {
  // If so, show a tick icon
  $("#exercises-html-attributes-4-done").html(
    `<i class="menu-icon tf-icons bx bx-check fs-1 text-primary"></i>`
  );
  $("#exercises-html-attributes-4").append(
    `<i class="menu-icon tf-icons bx bx-check"></i>`
  );
}

// Exercise 1
// Check if the user has answered the question correctly before
if (localStorage.getItem("exercises-css-selectors-1")) {
  // If so, show a tick icon
  $("#exercises-css-selectors-1-done").html(
    `<i class="menu-icon tf-icons bx bx-check fs-1 text-primary"></i>`
  );
  $("#exercises-css-selectors-1").append(
    `<i class="menu-icon tf-icons bx bx-check"></i>`
  );
}

// Exercise 2
// Check if the user has answered the question correctly before
if (localStorage.getItem("exercises-css-selectors-2")) {
  // If so, show a tick icon
  $("#exercises-css-selectors-2-done").html(
    `<i class="menu-icon tf-icons bx bx-check fs-1 text-primary"></i>`
  );
  $("#exercises-css-selectors-2").append(
    `<i class="menu-icon tf-icons bx bx-check"></i>`
  );
}

// Exercise 3
// Check if the user has answered the question correctly before
if (localStorage.getItem("exercises-css-selectors-3")) {
  // If so, show a tick icon
  $("#exercises-css-selectors-3-done").html(
    `<i class="menu-icon tf-icons bx bx-check fs-1 text-primary"></i>`
  );
  $("#exercises-css-selectors-3").append(
    `<i class="menu-icon tf-icons bx bx-check"></i>`
  );
}

// Exercise 4
// Check if the user has answered the question correctly before
if (localStorage.getItem("exercises-css-selectors-4")) {
  // If so, show a tick icon
  $("#exercises-css-selectors-4-done").html(
    `<i class="menu-icon tf-icons bx bx-check fs-1 text-primary"></i>`
  );
  $("#exercises-css-selectors-4").append(
    `<i class="menu-icon tf-icons bx bx-check"></i>`
  );
}

// QUIZ

// Timer variables
let timeLeft = 1800; // Total time in seconds
let timerInterval; // Reference to the interval timer

// Game state
let currentQuestionIndex = 0;
let score = 0;
let gameOver = false;

// Update the timer
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  let seconds = (timeLeft % 60).toString().padStart(2, "0");
  $("#timer").text(minutes + ":" + seconds);
  timeLeft--;
  if (timeLeft < 0) {
    endGame();
  }
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Show the next question
function nextQuestion() {
  // Check if there are more questions
  if (currentQuestionIndex >= quiz.length) {
    // End the game
    endGame();
    return;
  }

  // Get the current question
  const currentQuestion = quiz[currentQuestionIndex];

  // Update the question text
  $("#quiz").html(`
        <h2 class="question">${currentQuestion.question}</h2>
        <ul class="answers"></ul>
      `);

  // Add the answers to the quiz
  currentQuestion.answers.forEach((answer) => {
    $("#quiz .answers").append(`
          <li>${answer.text}</li>
        `);
  });

  // Handle clicks on the answers
  $("#quiz .answers li").click(function () {
    // Check if the game is over
    if (gameOver) {
      return;
    }

    // Get the selected answer
    const selectedAnswer = quiz[currentQuestionIndex].answers[$(this).index()];

    // Check if the answer is correct
    if (selectedAnswer.correct) {
      // Increment the score
      score++;
      $(this).addClass("correct");
    } else {
      $(this).addClass("incorrect");
    }

    // Move to the next question
    currentQuestionIndex++;
    setTimeout(nextQuestion, 1000);
  });
}

// Start the game
function startGame() {
  // Reset the game state
  currentQuestionIndex = 0;
  score = 0;
  gameOver = false;
  // Show the starting screen
  $("#quiz").html(`
        <h1 class="card-title">Let's start?</h1>
                    <p class="card-text">
                      Let the quiz begin!
                    </p>
        <button id="start-button" class="btn btn-primary">Start</button>
      `);

  // Handle clicks on the start button
  $("#start-button").click(function () {
    // Start the timer
    startTimer();

    // Show the first question
    nextQuestion();
  });
}
