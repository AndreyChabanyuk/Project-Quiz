
// Функция которая отображает последнюю страницу после отправки формы

export default function(){
    
    const markup=`

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

`
document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)

}