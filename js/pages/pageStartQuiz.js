
// Отображение стартовой страницы

export default function(){
    
    const markup = `<body style="flex-wrap: wrap;">
    
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
    
</body>`
    document.querySelector('#app').innerHTML = ''
    document.querySelector('#app').insertAdjacentHTML("afterbegin", markup)
    
}