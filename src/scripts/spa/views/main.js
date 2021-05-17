import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Момчян");
    }

    async getHtml() {
        return `
            <!-- content -->
<section>
    <div class="content">
        <img src="src/images/people.png" alt="avatar">
        <div>
            <!-- main text -->
            <div>
                <h1>Привет,</h1>
                <h2>Будем знакомы:</h2>
            </div>
            <!-- buttons -->
            <div class="content-div__button">
                <a href="/" class="content__button main" data-link>Главная</a>
                <a href="/resume" class="content__button resume" data-link>Резюме</a>
                <a href="/contacts" class="content__button contacts" data-link>Контакты</a>
            </div>
            <!-- secondary text -->
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ante mauris. Aliquam pharetra tincidunt sapien id pharetra. Curabitur nec finibus lectus.
                    In elementum nisi ac ex convallis, eu lobortis justo viverra. Praesent finibus varius mauris quis blandit. Nunc in rhoncus diam. Nunc et tellus vel
                    mauris consequat interdum. Sed at egestas odio, eu molestie lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                </p>
            </div>
        </div>
    </div>
</section>
        `;
    }
}