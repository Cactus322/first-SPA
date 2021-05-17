import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Резюме");
    }

    async getHtml() {
        return `
            <!-- content -->
            <section>
                <div class="content__resume">
                    <div>
                        <h1>Резюме</h1>
                    </div>
                    <div class="content__resume__anchor">
                        <p>Обо мне</p>
                    </div>
                    <div>
                        <p class="content__resume__about-me">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ante mauris. Aliquam pharetra tincidunt sapien id pharetra. Curabitur nec finibus lectus.
                            In elementum nisi ac ex convallis, eu lobortis justo viverra. Praesent finibus varius mauris quis blandit. Nunc in rhoncus diam. Nunc et tellus vel.
                        </p>
                    </div>
                    <div>
                        <i class="fas fa-exclamation-circle"></i>
                        <h4>Навыки</h4>
                        <hr>
                        <p class="content__resume__skills">Figma</p>
                        <p class="content__resume__skills">PSD</p>
                    </div>
                    <div class="content__resume__anchor">
                        <p>Образование</p>
                    </div>
                    <div>
                        <p class="content__resume__about-me">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ante mauris. Aliquam pharetra tincidunt sapien id pharetra. Curabitur nec finibus lectus.
                            In elementum nisi ac ex convallis, eu lobortis justo viverra. Praesent finibus varius mauris quis blandit. Nunc in rhoncus diam. Nunc et tellus vel.
                        </p>
                    </div>
                    <div>
                        <i class="fas fa-globe"></i>
                        <h4>Языки</h4>
                        <hr>
                        <p class="content__resume__skills">HTML</p>
                        <p class="content__resume__skills">CSS</p>
                        <p class="content__resume__skills">JavaScript</p>
                        <p class="content__resume__skills">JQuery</p>
                    </div>
                </div>
            </section>
        `;
    }
}