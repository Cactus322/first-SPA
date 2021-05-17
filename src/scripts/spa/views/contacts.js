import AbstractView from "./abstractView.js";


export default class Contacts extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Контакты");
    }

    async getHtml() {
        return `
                <!-- content -->
                <section>
                    <div class="content__contacts">
                        <div>
                            <h1>Пишите</h1>
                        </div>
                        <div class="content__contacts__input-div">
                            <form id="email-forms">
                                <input class="content__contacts__input-name" type="text" name="f[name]" placeholder="Имя">
                                <input class="content__contacts__input-email" type="email" name="f[email]" placeholder="Email">
                                <input class="content__contacts__input-phone" type="tel" name="f[phone-number]" placeholder="Телефон">
                                <textarea class="content__contacts__input-message" type="text" name="f[message]" placeholder="Добавьте сообщение..."></textarea>
                                <button type="submit" class="content__contacts__button">Отправить</button>
                            </form>
                        </div>
                    </div>
                </section>
        `;
    }
}


