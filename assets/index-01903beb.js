(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) c(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && c(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function c(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = d(o);
    fetch(o.href, s);
  }
})();
function m() {
  const a = `

    <section class="plate visible" data-card="6">
        <div class="cover-content-wrapper">
            <div class="cover-content">

                <section>
                    <img
                        class="title-img"
                        width="70"
                        src="../js/img/icons/clapping.svg"
                        alt="Спасибо!"
                    />
                    <div class="title">Спасибо!</div>
                    <p>
                        Результаты вашего теста и методичка, уже отправлены вам
                        на Email.
                    </p>
                </section>

                <section>
                    <div class="title-2">Ваши бонусы:</div>
                    <div class="bonus-cards-wrapper">
                        <a href="https://github.com/nadam131/html-css-course" target="_blank" class="bonus-card">
                            <img
                                class="bonus-card__img"
                                src="../js/img/icons/leaflet.svg"
                                alt=""
                            />
                            <div class="bonus-card__title">
                                Методичка с курса по верстке
                            </div>
                        </a>
                        <a href="https://www.youtube.com/watch?v=DPA9qzBJPaA" target="_blank" class="bonus-card">
                            <img
                                class="bonus-card__img"
                                src="../js/img/icons/video-tutorial.png"
                                alt=""
                            />
                            <div class="bonus-card__title">
                                Видео урок с курса по верстке
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    </section>

`;
  document.querySelector("#app").insertAdjacentHTML("afterbegin", a);
}
const _ = [
    { code: "+247 ####" },
    { code: "+290 ####" },
    { code: "+290 ####" },
    { code: "+683 ####" },
    { code: "+690 ####" },
    { code: "+500 #####" },
    { code: "+676 #####" },
    { code: "+677 #####" },
    { code: "+678 #####" },
    { code: "+688 2####" },
    { code: "+49 ### ###" },
    { code: "+682 ## ###" },
    { code: "+686 ## ###" },
    { code: "+688 90####" },
    { code: "+95 ### ###" },
    { code: "+298 ### ###" },
    { code: "+376 ### ###" },
    { code: "+387 ## ####" },
    { code: "+508 ## ####" },
    { code: "+597 ### ###" },
    { code: "+672 1## ###" },
    { code: "+672 3## ###" },
    { code: "+681 ## ####" },
    { code: "+685 ## ####" },
    { code: "+687 ## ####" },
    { code: "+850 ### ###" },
    { code: "+230 ### ####" },
    { code: "+239 ## #####" },
    { code: "+245 # ######" },
    { code: "+246 ### ####" },
    { code: "+263 # ######" },
    { code: "+269 ## #####" },
    { code: "+297 ### ####" },
    { code: "+299 ## ## ##" },
    { code: "+354 ### ####" },
    { code: "+372 ### ####" },
    { code: "+387 ## #####" },
    { code: "+49 ### ## ##" },
    { code: "+501 ### ####" },
    { code: "+507 ### ####" },
    { code: "+592 ### ####" },
    { code: "+597 ### ####" },
    { code: "+599 ### ####" },
    { code: "+599 ### ####" },
    { code: "+599 ### ####" },
    { code: "+60 # ### ###" },
    { code: "+62 ## ### ##" },
    { code: "+65 #### ####" },
    { code: "+670 ### ####" },
    { code: "+673 ### ####" },
    { code: "+674 ### ####" },
    { code: "+677 ### ####" },
    { code: "+678 ## #####" },
    { code: "+679 ## #####" },
    { code: "+680 ### ####" },
    { code: "+689 ## ## ##" },
    { code: "+691 ### ####" },
    { code: "+692 ### ####" },
    { code: "+95 # ### ###" },
    { code: "+960 ### ####" },
    { code: "+220 ### ## ##" },
    { code: "+232 ## ######" },
    { code: "+234 ## ### ##" },
    { code: "+237 #### ####" },
    { code: "+238 ### ## ##" },
    { code: "+248 # ### ###" },
    { code: "+252 # ### ###" },
    { code: "+252 # ### ###" },
    { code: "+265 1 ### ###" },
    { code: "+291 # ### ###" },
    { code: "+350 ### #####" },
    { code: "+356 #### ####" },
    { code: "+372 #### ####" },
    { code: "+373 #### ####" },
    { code: "+47 ### ## ###" },
    { code: "+49 ### ## ###" },
    { code: "+504 #### ####" },
    { code: "+505 #### ####" },
    { code: "+506 #### ####" },
    { code: "+52 ## ## ####" },
    { code: "+53 # ### ####" },
    { code: "+599 9### ####" },
    { code: "+60 ## ### ###" },
    { code: "+62 ## ### ###" },
    { code: "+64 ## ### ###" },
    { code: "+66 ## ### ###" },
    { code: "+670 77# #####" },
    { code: "+670 78# #####" },
    { code: "+850 #### ####" },
    { code: "+852 #### ####" },
    { code: "+853 #### ####" },
    { code: "+886 #### ####" },
    { code: "+95 ## ### ###" },
    { code: "+961 # ### ###" },
    { code: "+965 #### ####" },
    { code: "+967 # ### ###" },
    { code: "+973 #### ####" },
    { code: "+974 #### ####" },
    { code: "+975 # ### ###" },
    { code: "+1 ### ### ####" },
    { code: "+1 242 ### ####" },
    { code: "+1 246 ### ####" },
    { code: "+1 264 ### ####" },
    { code: "+1 268 ### ####" },
    { code: "+1 284 ### ####" },
    { code: "+1 340 ### ####" },
    { code: "+1 345 ### ####" },
    { code: "+1 441 ### ####" },
    { code: "+1 473 ### ####" },
    { code: "+1 649 ### ####" },
    { code: "+1 664 ### ####" },
    { code: "+1 670 ### ####" },
    { code: "+1 671 ### ####" },
    { code: "+1 684 ### ####" },
    { code: "+1 721 ### ####" },
    { code: "+1 758 ### ####" },
    { code: "+1 767 ### ####" },
    { code: "+1 784 ### ####" },
    { code: "+1 809 ### ####" },
    { code: "+1 829 ### ####" },
    { code: "+1 849 ### ####" },
    { code: "+1 868 ### ####" },
    { code: "+1 869 ### ####" },
    { code: "+1 876 ### ####" },
    { code: "+216 ## ### ###" },
    { code: "+218 ## ### ###" },
    { code: "+222 ## ## ####" },
    { code: "+223 ## ## ####" },
    { code: "+224 ## ### ###" },
    { code: "+225 ## ### ###" },
    { code: "+226 ## ## ####" },
    { code: "+227 ## ## ####" },
    { code: "+228 ## ### ###" },
    { code: "+229 ## ## ####" },
    { code: "+231 ## ### ###" },
    { code: "+234 ## ### ###" },
    { code: "+236 ## ## ####" },
    { code: "+241 # ## ## ##" },
    { code: "+252 ## ### ###" },
    { code: "+254 ### ######" },
    { code: "+257 ## ## ####" },
    { code: "+258 ## ### ###" },
    { code: "+262 ##### ####" },
    { code: "+262 ##### ####" },
    { code: "+266 # ### ####" },
    { code: "+267 ## ### ###" },
    { code: "+268 ## ## ####" },
    { code: "+27 ## ### ####" },
    { code: "+31 ## ### ####" },
    { code: "+32 ### ### ###" },
    { code: "+33 ### ### ###" },
    { code: "+34 ### ### ###" },
    { code: "+357 ## ### ###" },
    { code: "+36 ### ### ###" },
    { code: "+370 ### ## ###" },
    { code: "+371 ## ### ###" },
    { code: "+374 ## ### ###" },
    { code: "+377 ## ### ###" },
    { code: "+382 ## ### ###" },
    { code: "+385 ## ### ###" },
    { code: "+386 ## ### ###" },
    { code: "+389 ## ### ###" },
    { code: "+39 6 698 #####" },
    { code: "+40 ## ### ####" },
    { code: "+41 ## ### ####" },
    { code: "+45 ## ## ## ##" },
    { code: "+46 ## ### ####" },
    { code: "+48 ### ### ###" },
    { code: "+49 ### ## ####" },
    { code: "+502 # ### ####" },
    { code: "+503 ## ## ####" },
    { code: "+509 ## ## ####" },
    { code: "+51 ### ### ###" },
    { code: "+56 # #### ####" },
    { code: "+591 # ### ####" },
    { code: "+593 # ### ####" },
    { code: "+594 ##### ####" },
    { code: "+60 ## ### ####" },
    { code: "+60 ### ### ###" },
    { code: "+61 # #### ####" },
    { code: "+62 ## ### ####" },
    { code: "+62 8## ### ###" },
    { code: "+64 ### ### ###" },
    { code: "+66 ## ### ####" },
    { code: "+675 ### ## ###" },
    { code: "+81 ### ### ###" },
    { code: "+82 ## ### ####" },
    { code: "+84 ## #### ###" },
    { code: "+850 ## ### ###" },
    { code: "+855 ## ### ###" },
    { code: "+856 ## ### ###" },
    { code: "+880 ## ### ###" },
    { code: "+93 ## ### ####" },
    { code: "+94 ## ### ####" },
    { code: "+961 ## ### ###" },
    { code: "+966 # ### ####" },
    { code: "+967 ## ### ###" },
    { code: "+968 ## ### ###" },
    { code: "+971 # ### ####" },
    { code: "+972 # ### ####" },
    { code: "+975 17 ### ###" },
    { code: "+976 ## ## ####" },
    { code: "+977 ## ### ###" },
    { code: "+993 # ### ####" },
    { code: "+20 ### ### ####" },
    { code: "+211 ## ### ####" },
    { code: "+212 ## #### ###" },
    { code: "+213 ## ### ####" },
    { code: "+218 21 ### ####" },
    { code: "+221 ## ### ####" },
    { code: "+233 ### ### ###" },
    { code: "+235 ## ## ## ##" },
    { code: "+240 ## ### ####" },
    { code: "+242 ## ### ####" },
    { code: "+243 ### ### ###" },
    { code: "+244 ### ### ###" },
    { code: "+249 ## ### ####" },
    { code: "+250 ### ### ###" },
    { code: "+251 ## ### ####" },
    { code: "+253 ## ## ## ##" },
    { code: "+255 ## ### ####" },
    { code: "+256 ### ### ###" },
    { code: "+260 ## ### ####" },
    { code: "+261 ## ## #####" },
    { code: "+264 ## ### ####" },
    { code: "+265 # #### ####" },
    { code: "+30 ### ### ####" },
    { code: "+351 ## ### ####" },
    { code: "+352 ### ### ###" },
    { code: "+353 ### ### ###" },
    { code: "+355 ### ### ###" },
    { code: "+359 ### ### ###" },
    { code: "+377 ### ### ###" },
    { code: "+378 #### ######" },
    { code: "+381 ## ### ####" },
    { code: "+39 ### #### ###" },
    { code: "+420 ### ### ###" },
    { code: "+421 ### ### ###" },
    { code: "+43 ### ### ####" },
    { code: "+44 ## #### ####" },
    { code: "+49 ### ### ####" },
    { code: "+52 ### ### ####" },
    { code: "+54 ### ### ####" },
    { code: "+55 ## #### ####" },
    { code: "+55 ## 7### ####" },
    { code: "+57 ### ### ####" },
    { code: "+58 ### ### ####" },
    { code: "+590 ### ### ###" },
    { code: "+593 ## ### ####" },
    { code: "+595 ### ### ###" },
    { code: "+598 # ### ## ##" },
    { code: "+62 8## ### ####" },
    { code: "+63 ### ### ####" },
    { code: "+64 ### ### ####" },
    { code: "+7 ### ### ## ##" },
    { code: "+7 6## ### ## ##" },
    { code: "+7 7## ### ## ##" },
    { code: "+81 ## #### ####" },
    { code: "+84 ### #### ###" },
    { code: "+86 ### #### ###" },
    { code: "+886 # #### ####" },
    { code: "+90 ### ### ####" },
    { code: "+91 #### ### ###" },
    { code: "+92 ### ### ####" },
    { code: "+962 # #### ####" },
    { code: "+963 ## #### ###" },
    { code: "+966 5 #### ####" },
    { code: "+967 ### ### ###" },
    { code: "+970 ## ### ####" },
    { code: "+971 5# ### ####" },
    { code: "+972 5# ### ####" },
    { code: "+98 ### ### ####" },
    { code: "+992 ## ### ####" },
    { code: "+995 ### ### ###" },
    { code: "+996 ### ### ###" },
    { code: "+998 ## ### ####" },
    { code: "+234 ### ### ####" },
    { code: "+234 ### ### ####" },
    { code: "+375 ## ### ## ##" },
    { code: "+380 ## ### ## ##" },
    { code: "+423 ### ### ####" },
    { code: "+49 #### ### ####" },
    { code: "+55 ## 9#### ####" },
    { code: "+596 ### ## ## ##" },
    { code: "+850 ### #### ###" },
    { code: "+850 191 ### ####" },
    { code: "+856 20## ### ###" },
    { code: "+86 ### #### ####" },
    { code: "+964 ### ### ####" },
    { code: "+994 ## ### ## ##" },
    { code: "+358 ### ### ## ##" },
    { code: "+62 8## ### ## ###" },
    { code: "+86 ## ##### #####" },
    { code: "+850 #### #############" },
  ],
  g = (a) => {
    function e() {
      let c = "+###############";
      _.forEach((l) => {
        let u = l.code.replace(/[\s#]/g, "");
        this.value.replace(/[\s#-)(]/g, "").includes(u) && (c = l.code);
      });
      let o = 0,
        s = this.value.replace(/\D/g, "");
      this.value = c.replace(/(?!\+)./g, function (l) {
        return /[#\d]/.test(l) && o < s.length
          ? s.charAt(o++)
          : o >= s.length
          ? ""
          : l;
      });
    }
    document.querySelectorAll(a).forEach((c) => {
      c.value || (c.value = "+"),
        c.addEventListener("input", e),
        c.addEventListener("focus", e),
        c.addEventListener("blur", e);
    });
  };
async function h(a) {
  await fetch("https://able-developing-lathe.glitch.me/data", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(a),
  });
}
function f() {
  const a = `
    <form action="#/final" method="POST" class="quiz-form">
       <section class="plate visible " data-progress >
            <header class="plate-header">
                <img src="../js/img/icons/list.png" alt="Icon" class="plate-header__icon" />
                Ваш уровень знания верстки сайтов
            </header>

            <div class="plate-content">
                <h2 data-question class="title-main">Что означает сокращение HTML?</h2>
                <div class="radio-group" data-answers>

                    <label class="radio-block">
                        <input
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="Hero Tutorial Multi Level"
                        />
                        <div class="radio-block__fake"></div>
                        Hero Tutorial Multi Level
                    </label>

                    <label class="radio-block" >
                        <input
                            data-right="success"
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="Hyper Text Markup Language"
                        />
                        <div class="radio-block__fake"></div>
                        Hyper Text Markup Language

                    </label>

                    <label class="radio-block">
                        <input
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="High Task Mirage Language"
                        />
                        <div class="radio-block__fake"></div>
                        High Task Mirage Language

                    </label>

                    <label class="radio-block">
                        <input
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="HTML не имеет расшифровки. Это военная разработка."
                        />
                        <div class="radio-block__fake"></div>
                        HTML не имеет расшифровки. Это военная разработка.
                    </label>

                </div>
                <span class="warn-red hidden">Выберите правильный ответ</span>
            </div>

            <footer class="plate-footer">
                <div class="plate-footer__progress progress">
                    <div class="progress__label">Готово: <strong>56%</strong></div>
                    <div class="progress__line-wrapper">
                        <div class="progress__line-bar" style="width: 56%;" ></div>
                    </div>
                </div>
                <div class="plate-footer__buttons">
                  
                    <button type="button" class="button" data-nav="next">Далее</button>
                </div>
            </footer>
        </section> 

        <section class="plate" data-progress data-count="2">
            <header class="plate-header">
                <img src="../js/img/icons/list.png" alt="Icon" class="plate-header__icon" />
                Ваш уровень знания верстки сайтов
            </header>

            <div class="plate-content">
                <h2 data-question class="title-main">Что такое инлайновые стили и сильнее ли они "стилей" в обычном CSS файле?</h2>
                <div class="checkbox-group" data-answers>

                    <label class="checkbox-block" >
                        <input
                            type="checkbox"
                            name="Стили прямо в CSS"
                            class="checkbox-block__real"
                        />
                        <div class="checkbox-block__fake"></div>
                        <div class="checkbox-block__text">
                            Стили прямо в CSS
                        </div>
                    </label>

                    <label class="checkbox-block" data-right="success">
                        <input
                            data-right="success"
                            type="checkbox"
                            name="Стили прямо в HTML"
                            class="checkbox-block__real"
                        />
                        <div class="checkbox-block__fake"></div>
                        <div class="checkbox-block__text">
                            Стили прямо в HTML
                        </div>
                    </label>

                    <label class="checkbox-block">
                        <input
                            type="checkbox"
                            name="Нет,стили равны"
                            class="checkbox-block__real"
                        />
                        <div class="checkbox-block__fake"></div>
                        <div class="checkbox-block__text">
                            Нет,стили равны
                        </div>
                    </label>

                    <label class="checkbox-block">
                        <input
                            data-right="success"
                            type="checkbox"
                            name="Да,стили прописанные в HTML сильнее чем в в обычном CSS"
                            class="checkbox-block__real"
                        />
                        <div class="checkbox-block__fake"></div>
                        <div class="checkbox-block__text">
                           Да,стили прописанные в HTML сильнее чем в в обычном CSS
                        </div>
                    </label>
                </div>
                <span class="warn-red hidden">Выберите правильный ответ</span>
            </div>

            <footer class="plate-footer">
                <div class="plate-footer__progress progress">
                    <div class="progress__label">Готово: <strong>56%</strong></div>
                    <div class="progress__line-wrapper">
                        <div class="progress__line-bar" style="width: 56%;" ></div>
                    </div>
                </div>
                <div class="plate-footer__buttons">
                    <button type="button" class="button button--back" data-nav="prev">Назад</button>
                    <button type="button" class="button" data-nav="next">Далее</button>
                </div>
            </footer>
        </section>

        <section class="plate" data-progress>
            <header class="plate-header">
                <img src="../js/img/icons/list.png" alt="Icon" class="plate-header__icon" />
                Ваш уровень знания верстки сайтов
            </header>

        
            <div class="plate-content">
                <h2 data-question class="title-main">На HTML можно создавать:</h2>

                <div class="cards-group" data-answers>
                   
                    <label class="card-block">
                        <div class="card-block__radio">
                            <input
                                name="image-group"
                                type="radio"
                                class="card-block__radio-real"
                                value="Мобильные приложения"
                            />
                            <div class="card-block__radio-fake"></div>
                        </div>
                        <div class="card-block__img">
                            <img src="../js/img/pictures/mobile.jpg" alt="Img" />
                        </div>
                        <div class="card-block__text">
                            Мобильные приложения
                        </div>
                    </label>

                
                    <label class="card-block">
                        <div class="card-block__radio">
                            <input
                                data-right="success"
                                name="image-group"
                                type="radio"
                                class="card-block__radio-real"
                                value="Сайты для всех браузеров и платформ"
                            />
                            <div class="card-block__radio-fake"></div>
                        </div>
                        <div class="card-block__img">
                            <img src="../js/img/pictures/browser.jpg" alt="Img" />
                        </div>
                        <div class="card-block__text">
                            Сайты для всех браузеров и платформ
                        </div>
                    </label>

                    <label class="card-block">
                        <div class="card-block__radio">
                            <input
                                name="image-group"
                                type="radio"
                                class="card-block__radio-real"
                                value="Программы для Windows"
                            />
                            <div class="card-block__radio-fake"></div>
                        </div>
                        <div class="card-block__img">
                            <img src="../js/img/pictures/windows.jpg" alt="Img" />
                        </div>
                        <div class="card-block__text">
                            Программы для Windows
                        </div>
                    </label>
                    
                   
                    <label class="card-block">
                        <div class="card-block__radio">
                            <input
                                name="image-group"
                                type="radio"
                                class="card-block__radio-real"
                                value="Программы для Linux"
                            />
                            <div class="card-block__radio-fake"></div>
                        </div>
                        <div class="card-block__img">
                            <img src="../js/img/pictures/linux.jpg" alt="Img" />
                        </div>
                        <div class="card-block__text">
                            Программы для Linux
                        </div>
                    </label>
                </div>
                <span class="warn-red hidden">Выберите правильный ответ</span>
            </div>
            

            <footer class="plate-footer">
                <div class="plate-footer__progress progress">
                    <div class="progress__label">Готово: <strong>56%</strong></div>
                    <div class="progress__line-wrapper">
                        <div class="progress__line-bar" style="width: 56%;" ></div>
                    </div>
                </div>
                <div class="plate-footer__buttons">
                    <button type="button" class="button button--back" data-nav="prev">Назад</button>
                    <button type="button" class="button" data-nav="next">Далее</button>
                </div>
            </footer>
        </section> 

        <section class="plate" data-progress >
            <header class="plate-header">
                <img src="../js/img/icons/list.png" alt="Icon" class="plate-header__icon" />
                Ваш уровень знания верстки сайтов
            </header>

            <div class="plate-content">
                <h2 data-question class="title-main">Выберите JavaScript команду создающую строковую переменную:</h2>
                <div class="radio-group" data-answers>

                    <label class="radio-block">
                        <input
                            
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="let str = newArray('Строковая переменная')"
                        />
                        <div class="radio-block__fake"></div>
                        let str = newArray('Строковая переменная')
                    </label>

                    <label class="radio-block" >
                        <input
                            data-right="success"
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="let str='Строковая переменная'"
                        />
                        <div class="radio-block__fake"></div>
                         let str='Строковая переменная'

                    </label>

                    <label class="radio-block">
                        <input
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="let str = newObject('Строковая переменная')"
                        />
                        <div class="radio-block__fake"></div>
                        let str = newObject('Строковая переменная')

                    </label>

                    <label class="radio-block">
                        <input
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="let str = newStr('Строковая переменная')"
                        />
                        <div class="radio-block__fake"></div>
                        let str = newStr('Строковая переменная')
                    </label>

                </div>
                <span class="warn-red hidden">Выберите правильный ответ</span>
            </div>

            <footer class="plate-footer">
                <div class="plate-footer__progress progress">
                    <div class="progress__label">Готово: <strong>56%</strong></div>
                    <div class="progress__line-wrapper">
                        <div class="progress__line-bar" style="width: 56%;" ></div>
                    </div>
                </div>
                <div class="plate-footer__buttons">
                  
                    <button type="button" class="button" data-nav="next">Далее</button>
                </div>
            </footer>
        </section> 

        <section class="plate" data-progress >
            <header class="plate-header">
                <img src="../js/img/icons/list.png" alt="Icon" class="plate-header__icon" />
                Ваш уровень знания верстки сайтов
            </header>

            <div class="plate-content">
                <h2 data-question class="title-main">Какое выражение позволяет проверять участки кода на наличие ошибок?</h2>
                <div class="radio-group" data-answers>

                    <label class="radio-block">
                        <input
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="error...catch"
                        />
                        <div class="radio-block__fake"></div>
                        error...catch
                    </label>

                    <label class="radio-block" >
                        <input
                            data-right="success"
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="try...catch"
                        />
                        <div class="radio-block__fake"></div>
                        try...catch

                    </label>
                    <label class="radio-block">
                        <input
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="error...try"
                        />
                        <div class="radio-block__fake"></div>
                        error...try
                    </label>

                    <label class="radio-block">
                        <input
                            type="radio"
                            name="what-html-means"
                            class="radio-block__real"
                            value="throw"
                        />
                        <div class="radio-block__fake"></div>
                        throw
                    </label>

                </div>
                <span class="warn-red hidden">Выберите правильный ответ</span>
            </div>

            <footer class="plate-footer">
                <div class="plate-footer__progress progress">
                    <div class="progress__label">Готово: <strong>56%</strong></div>
                    <div class="progress__line-wrapper">
                        <div class="progress__line-bar" style="width: 56%;" ></div>
                    </div>
                </div>
                <div class="plate-footer__buttons">
                    <button type="button" class="button" data-nav="next">Далее</button>
                </div>
            </footer>
        </section>


        <section class="plate ">
            <div class="cover-content-wrapper">
                <div class="cover-content">
                    <div>
                        <img
                            class="title-img"
                            width="70"
                            src="../js/img/icons/clapping.svg"
                            alt="Отлично! Последний шаг!"
                        />
                        <div data-question class="title">Отлично! Последний шаг!</div>
                            <div class="form-group">
                            <!-- <label class="label" for="email">Введите Имя:</label> -->
                            <input
                                class="input input--user"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Имя"
                                required
                                autocomplete="off"
                            />
                        </а>
                        </div>

                        <div class="form-group">
                            <!-- <label class="label" for="email">Введите Email:</label> -->
                            <input
                                class="input input--email"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                autocomplete="off"
                            />
                        </div>

                        <div class="form-group">
                            <label class="label" for="email"></label> 
                            <input
                                class="input input--phone"
                                type="tel"
                                id="tel"
                                name="tel"
                                placeholder="Телефон"
                                required
                                autocomplete="off"
                            />
                        </div>

                        <label class="checkbox">
                            <input name="policy" required type="checkbox" class="checkbox__real" id="policy" />
                            <div class="checkbox__fake"></div>
                            <div class="checkbox__text">
                                С <a href="https://google.com" target="_blank">политикой конфеденциальности</a> ознакомлен
                            </div>
                        </label>

                        <button
                            class="button button--huge mt-20"
                            type="submit"
                            id="submitForm"
                        >Получить результаты
                        </button>
                </div>
            </div>
        </section>
    </form>
`;
  (document.querySelector("#app").innerHTML = ""),
    document.querySelector("#app").insertAdjacentHTML("afterbegin", a);
  let e = 0,
    d = 0;
  const c = document.querySelectorAll(".plate");
  c.forEach((t) => t.classList.add("none")),
    c[e].classList.remove("none"),
    c[e].classList.add("visible"),
    o(),
    window.addEventListener("click", function (t) {
      const n = s(c[e]),
        i = document.querySelectorAll("[data-answers]");
      t.target.closest('[data-nav="next"]') &&
        (console.log(t.target),
        n
          ? (t.preventDefault(),
            o("next"),
            i[e].classList.remove("required"),
            c[e].querySelector(".warn-red").classList.add("hidden"),
            setTimeout(function () {
              c[e].classList.remove("visible"),
                setTimeout(function () {
                  c[e].classList.add("none"),
                    (e = e + 1),
                    c[e].classList.remove("none"),
                    setTimeout(function () {
                      c[e].classList.add("visible");
                    }, 100);
                }, 500);
            }, 500))
          : (i[e].classList.add("required"),
            c[e].querySelector(".warn-red").classList.add("visible"),
            c[e].querySelector(".warn-red").classList.remove("hidden"))),
        t.target.closest('[data-nav="prev"]') &&
          (i[e].classList.remove("required"),
          c[e].querySelector(".warn-red").classList.remove("visible"),
          c[e].querySelector(".warn-red").classList.add("hidden"),
          o("prev"),
          setTimeout(function () {
            c[e].classList.remove("visible"),
              setTimeout(function () {
                c[e].classList.add("none"),
                  (e = e - 1),
                  c[e].classList.remove("none"),
                  setTimeout(function () {
                    c[e].classList.add("visible");
                  }, 100);
              }, 500);
          }, 500));
    });
  function o(t = "start") {
    t === "next" ? (d = d + 1) : t === "prev" && (d = d - 1);
    const n = document.querySelectorAll(".progress__label strong"),
      i = document.querySelectorAll(".progress__line-bar"),
      r = document.querySelectorAll("[data-progress]").length,
      p = Math.round((d * 100) / r);
    n.forEach((v) => (v.innerText = p + "%")),
      i.forEach((v) => (v.style.width = p + "%"));
  }
  function s(t) {
    const n = t.querySelectorAll('input[type="radio"]');
    if (n.length > 0) {
      for (let r of n) if (r.checked && r.dataset.right) return !0;
    }
    const i = t.querySelectorAll('input[type="checkbox"]');
    if (i.length > 0) {
      if (t.dataset.count == 2) {
        let r = 0;
        for (let p of i) p.checked && p.dataset.right && r++;
        if (r == t.dataset.count) return !0;
      } else for (let r of i) if (r.checked) return !0;
    }
  }
  g("#tel");
  const l = document.querySelector(".quiz-form"),
    u = document.querySelector("#tel");
  l.addEventListener("submit", async function (t) {
    if ((t.preventDefault(), u.value == "+" || u.value.length < 6))
      u.value = "";
    else {
      const n = k();
      await h(n), window.location.replace("#/final"), l.classList.add("hidden");
    }
  });
}
function k() {
  const a = {};
  return (
    (a.name = document.querySelector("#name").value),
    (a.tel = document.querySelector("#tel").value),
    (a.email = document.querySelector("#email").value),
    a
  );
}
function y() {
  const a = `<body style="flex-wrap: wrap;">
    <!-- Card 01 -->
    <section class="plate visible" data-card="1" data-validate="novalidate">
        <div class="cover-content-wrapper">
            <div class="cover-content">
                <section>
                    <img
                        class="title-img"
                        src="../js/img/pictures/html.png"
                        alt="HTML"
                    />
                    <div class="title">
                        Определи свой уровень знания верстки сайтов
                    </div>
                    <p>
                        Ответь на серию вопросов, получи оценку знаний, список
                        уроков чтобы подтянуть свой уровень и методичку с нашего
                        курса “Профессия: Верстальщик сайтов.”
                    </p>
                    <p>
                        <a href="#/quiz" class="button" data-nav="next">Начать тест</a>
                    </p>
                </section>

                <section>
                    <div class="title-3">Бонусы после прохождения теста:</div>
                    <div class="bonus-cards-wrapper">
                        <div class="bonus-card bonus-card-disabled">
                            <img
                                class="bonus-card__img"
                                src="../js/img/icons/leaflet.svg"
                                alt=""
                            />
                            <div class="bonus-card__title">
                                Методичка с курса по верстке
                            </div>
                        </div>
                        <div class="bonus-card bonus-card-disabled">
                            <img
                                class="bonus-card__img"
                                src="../js/img/icons/video-tutorial.png"
                                alt=""
                            />
                            <div class="bonus-card__title">
                                Видео урок с курса по верстке
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
    
</body>`;
  (document.querySelector("#app").innerHTML = ""),
    document.querySelector("#app").insertAdjacentHTML("afterbegin", a);
}
const w = [
  { path: "/", component: y },
  { path: "quiz", component: f },
  { path: "final", component: m },
];
function x(a, e) {
  return e.find(function (d) {
    return d.path === a;
  });
}
function b() {
  const a = location.hash.split("/");
  let e = a[0] === "" ? "/" : a[1];
  e = e === "" ? "/" : e;
  const { component: d = errorPage } = x(e, w) || {};
  d();
}
window.addEventListener("hashchange", b);
window.addEventListener("load", b);
