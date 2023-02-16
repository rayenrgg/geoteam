document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", startQuiz);
  function startQuiz() {
    const questions = [
      {
        question: "كيف أثر نمو وسائل الإعلام على المجتمع؟",
        choices: [
          "أ - أدى ذلك إلى زيادة فرص العمل",
          "ب - جعل المعلومات والترفيه أكثر يسرا",
          "ج - أدى ذلك إلى انخفاض الطلب على محتوى وسائط الإعلام",
        ],
        answer: 2,
      },
      {
        question: "ما هو دور التطورات التكنولوجية في نمو التدفقات الإعلامية؟",
        choices: [
          "أ - مكن من إنتاج وتوزيع واستهلاك وسائل الإعلام بطرق جديدة ومبتكرة",
          "ب - أدى ذلك إلى انخفاض في إستهلاك وسائط الإعلام",
          "ج - أدت إلى زيادة سيطرة الحكومة على محتوى وسائط الإعلام",
        ],
        answer: 0,
      },
      {
        question:
          "ما هي العلاقة بين نمو شبكات الاتصالات العالمية والتدفقات الإعلامية؟",
        choices: [
          "أ - قلصت شبكات الاتصالات العالمية الطلب على محتوى وسائط الإعلام",
          "ب - أدى نمو شبكات الاتصالات العالمية إلى انخفاض في إستهلاك وسائط الإعلام",
          "ج -وسعت شبكات الاتصالات العالمية آفاق وسائط الإعلام، مما أتاح إمكانية الحصول على المعلومات من جميع أنحاء العالم",
        ],
        answer: 2,
      },
      {
        question:
          "من الذي يسيطر على إنتاج وتوزيع المحتوى الإعلامي في العالم المتقدم؟",
        choices: [
          "أ - الشركات والمنظمات الكبيرة",
          "ب - وسائط الإعلام المملوكة للحكومة",
          "ج - اللاعبون المحليون",
        ],
        answer: 0,
      },
      {
        question: "كيف أثر نمو وسائل الإعلام على أنماط العمالة؟",
        choices: [
          "أ - أدى ذلك إلى انخفاض فرص العمل",
          "ب - لم يكن له أي تأثير على أنماط العمالة",
          "ج -أدت إلى زيادة الطلب على العاملين في وسائط الإعلام",
        ],
        answer: 2,
      },
      {
        question: "ما هي الآثار الاجتماعية والاقتصادية لنمو وسائل الإعلام؟",
        choices: [
          "أ - انخفاض فرص الحصول على المعلومات، والتغيرات في أنماط العمالة، والتغيرات في إيرادات الإعلانات",
          "ب - زيادة الوصول إلى المعلومات، والتغيرات في أنماط العمالة، والتغيرات في إيرادات الإعلانات",
          "ج - عدم التأثير على المجتمع أو الاقتصاد",
        ],
        answer: 1,
      },
      {
        question:
          "من يسيطر على إنتاج وتوزيع المحتوى الإعلامي في العالم النامي؟",
        choices: [
          "أ - الشركات والمنظمات الكبيرة",
          "ب - الجهات الفاعلة المحلية ووسائل الإعلام المملوكة للحكومة",
          "ج - وسائط الإعلام المستقلة والصحفيون",
        ],
        answer: 1,
      },
      {
        question: "ما الذي يحرك نمو وسائل الإعلام؟",
        choices: [
          "أ -التقدم التكنولوجي والعولمة وزيادة الطلب على المعلومات والترفيه",
          "ب -التقدم التكنولوجي والعولمة وانخفاض الطلب على المحتوى الإعلامي",
          "ج -التقدم التكنولوجي، وانخفاض العولمة، وزيادة سيطرة الحكومة على المحتوى الإعلامي",
        ],
        answer: 0,
      },
      {
        question:
          "ما هي العلاقة بين نمو وسائل الإعلام وتوافر وسائل الإعلام المكتوبة والمسموعة والمرئية؟",
        choices: [
          "أ - لم يكن لنمو مسارات وسائط الإعلام أي تأثير على توافر وسائط الإعلام المكتوبة والمسموعة والمرئية وإمكانية الوصول إليها",
          "ب - أدى نمو مسارات وسائط الإعلام إلى انخفاض توافر وسائط الإعلام المكتوبة والمسموعة والمرئية وإمكانية الوصول إليها",
          "ج -أدى تزايد توافر وسائط الإعلام المكتوبة والمسموعة والمرئية وإمكانية الوصول إليها إلى توسيع أفق وسائط الإعلام أمام الناس على الصعيد العالمي",
        ],
        answer: 2,
      },
      {
        question: "ما هو دور الإنترنت في نمو تدفق وسائل الإعلام؟",
        choices: [
          "أ - أدى صعود الإنترنت والتكنولوجيات الرقمية إلى تغيير الطريقة التي تنتج بها وسائط الإعلام وتوزع وتستهلك",
          "ب - لم يكن للإنترنت أي تأثير على نمو تدفقات وسائط الإعلام",
          "ج - أدت شبكة الإنترنت إلى انخفاض في إستهلاك وسائط الإعلام",
        ],
        answer: 0,
      },
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionContainer = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const resultContainer = document.getElementById("result");
    questionContainer.style.fontSize = "24px";
    choicesContainer.style.fontSize = "24px";
    resultContainer.style.fontSize = "24px";

    function renderQuestion() {
      const current = questions[currentQuestion];
      questionContainer.innerHTML = `<p>${current.question}</p>`;
      choicesContainer.innerHTML = current.choices
        .map((choice, index) => {
          return `<button class="choice-button" data-index="${index}">${choice}</button>`;
        })
        .join("");
    }
    document.getElementById("start-button").style.display = "none";
    function checkAnswer(index) {
      if (index === questions[currentQuestion].answer) {
        score++;
      }

      currentQuestion++;

      if (currentQuestion === questions.length) {
        resultContainer.innerHTML = `Your final score is ${score}/${questions.length}`;
        resultContainer.style.display = "block";
        resultContainer.style.marginBottom = "50px";
        questionContainer.style.display = "none";
        choicesContainer.style.display = "none";
      } else {
        renderQuestion();
      }
    }

    choicesContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("choice-button")) {
        checkAnswer(parseInt(event.target.dataset.index, 10));
      }
    });

    renderQuestion();
  }
});
