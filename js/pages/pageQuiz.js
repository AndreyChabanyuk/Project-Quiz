import './style.css'
import {mask} from '../libs/phoneMask/mask'
import {submitFormData} from './serverPath'


// Функция которая отображает тест

export default function () {
    const markup = `
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
                <h2 data-question class="title-main">Что такое инлайновые стили и сильнее ли они стилей в обычном CSS файле?</h2>
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
`

document.querySelector('#app').innerHTML = ''
document.querySelector('#app').insertAdjacentHTML("afterbegin", markup)
    
// Для подсчета текущего индекса карточки теста
let currentIndex = 0;

// Для подсчета текущей карты и замены ее на другую
let currentCard = 0;

const cards = document.querySelectorAll(".plate");

// Получение каждой карточки из всего набора по классу plate для дальнейшей работы с ней
cards.forEach((card) =>  card.classList.add("none"));
cards[currentIndex].classList.remove("none");
cards[currentIndex].classList.add("visible");

// Запуск работы прогресса теста
updateProgressBar();

window.addEventListener("click", function(e) {

  const result = checkAnswers(cards[currentIndex])
  const blockRed = document.querySelectorAll('[data-answers]')
  
  if (e.target.closest('[data-nav="next"]')) {

    console.log(e.target);
    if (result) {
        e.preventDefault()
      updateProgressBar("next");

      blockRed[currentIndex].classList.remove('required')
      cards[currentIndex].querySelector('.warn-red').classList.add('hidden')
      setTimeout(function () {
        cards[currentIndex].classList.remove("visible");

        setTimeout(function () {
          cards[currentIndex].classList.add("none");
          currentIndex = currentIndex + 1;
          cards[currentIndex].classList.remove("none");

          setTimeout(function () {
            cards[currentIndex].classList.add("visible");
          }, 100);

        }, 500);
      }, 500);
    }
    
    else{
        blockRed[currentIndex].classList.add('required')
        cards[currentIndex].querySelector('.warn-red').classList.add('visible')
        cards[currentIndex].querySelector('.warn-red').classList.remove('hidden')
       
    }
}

  if (e.target.closest('[data-nav="prev"]')) {
    blockRed[currentIndex].classList.remove('required')
        cards[currentIndex].querySelector('.warn-red').classList.remove('visible')
        cards[currentIndex].querySelector('.warn-red').classList.add('hidden')
        updateProgressBar("prev");
        setTimeout(function () {
      cards[currentIndex].classList.remove("visible");

      setTimeout(function () {
        cards[currentIndex].classList.add("none");

        currentIndex = currentIndex - 1;

        cards[currentIndex].classList.remove("none");

        setTimeout(function () {
          cards[currentIndex].classList.add("visible");
        }, 100);
      }, 500);
    }, 500);
  }
});

// Смена карточек и подсчет прогресс числа и линии

function updateProgressBar(direction = "start") {
  if (direction === "next") {
    currentCard = currentCard + 1;
  } else if (direction === "prev") {
    currentCard = currentCard - 1;
  }

  const progressLabel = document.querySelectorAll(".progress__label strong");
  const progressLineBar = document.querySelectorAll(".progress__line-bar");
  const cardProgress = document.querySelectorAll("[data-progress]").length;
  const progress = Math.round((currentCard * 100) / cardProgress);

  progressLabel.forEach((item) => (item.innerText = progress + "%"));
  progressLineBar.forEach((item) => (item.style.width = progress + "%"));
}


// Проверка на правильность ответов
function checkAnswers(card) {

    // Проверка на radio кнопки

    const radioBtns = card.querySelectorAll('input[type="radio"]')
        if(radioBtns.length > 0){
            for(let radioBtn of radioBtns ) if(radioBtn.checked && radioBtn.dataset.right) {
                return true
            } 
            
        }

  const checkboxesBtns = card.querySelectorAll('input[type="checkbox"]')

// Проверка на checkbox кнопки

  if(checkboxesBtns.length > 0){
    if(card.dataset.count == 2){
        let answered = 0;

        for(let checkboxBtn of checkboxesBtns) {
            if ( checkboxBtn.checked  && checkboxBtn.dataset.right) answered++
        }
        if(answered == card.dataset.count){
            return true
        } 

    } else {
        for (let checkboxBtn of checkboxesBtns){
            if(checkboxBtn.checked) return true;
        }
    }
  }
}

// Для региональных номеров телефона
mask('#tel');
const submitForm = document.querySelector('.quiz-form')
const telInput = document.querySelector('#tel')


// Отправка формы
submitForm.addEventListener('submit', async function(e) {  
    e.preventDefault()
    if(telInput.value == '+' || telInput.value.length < 6){
        telInput.value = ''
    }else {
        const formData  = getInput()
        await submitFormData(formData)  
        window.location.replace('#/final')
        submitForm.classList.add('hidden')
    }
})
}

// Сбор данных с формы в объект
function getInput(){
    const formData = {}
    formData.name  = document.querySelector('#name').value
    formData.tel  = document.querySelector('#tel').value
    formData.email  = document.querySelector('#email').value
    return formData
}



