<template>
    <div class="app-container">
        <a @click="$router.push('/')" class="centered-content app-bar app-bar-test">
            <svg class="app-bar-test__arrow" width="20" height="16" viewBox="0 0 20 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.5 8.00002C19.5 8.41402 19.164 8.75002 18.75 8.75002H2.561L8.28103 14.47C8.57403 14.763 8.57403 15.238 8.28103 15.531C8.13503 15.677 7.943 15.751 7.751 15.751C7.559 15.751 7.36703 15.678 7.22103 15.531L0.221032 8.53103C-0.0719683 8.23803 -0.0719683 7.76299 0.221032 7.46999L7.22103 0.469994C7.51403 0.176994 7.98901 0.176994 8.28201 0.469994C8.57501 0.762994 8.57501 1.23803 8.28201 1.53103L2.56204 7.251H18.75C19.164 7.25 19.5 7.58602 19.5 8.00002Z"
                    fill="#41416E" />
            </svg>
            <p class="app-bar__title">Learning</p>
        </a>
        <div class="test-menu">
            <div class="test-menu__item">
                <p class="test-menu__text">Tests</p>
                <hr class="test-menu__stripe">
            </div>
        </div>
        <div class="centered-content questions">
            <div v-for="(question, index) in questions" :key="question.id" @click='question.checked = !question.checked'
                class="questions__block">
                <div class="centered-content questions__question">
                    <p>{{ index + 1 }}</p>
                    <svg class="questions_half-moon" width="63" height="63" viewBox="0 0 63 63" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.276833 50.2859C6.78888 58.0579 16.5674 63 27.5001 63C47.1062 63 63 47.1062 63 27.5001C63 16.5674 58.0579 6.78887 50.2859 0.276825C55.4521 6.44256 58.5625 14.3894 58.5625 23.0626C58.5625 42.6687 42.6687 58.5625 23.0626 58.5625C14.3894 58.5625 6.44257 55.4521 0.276833 50.2859Z"
                            fill="#F9F9F9" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.276833 50.2859C6.78888 58.0579 16.5674 63 27.5001 63C47.1062 63 63 47.1062 63 27.5001C63 16.5674 58.0579 6.78887 50.2859 0.276825C55.4521 6.44256 58.5625 14.3894 58.5625 23.0626C58.5625 42.6687 42.6687 58.5625 23.0626 58.5625C14.3894 58.5625 6.44257 55.4521 0.276833 50.2859Z"
                            fill="black" fill-opacity="0.03" />
                    </svg>
                    <svg v-show="question.checked" class="questions_checked" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 8.20001L9.35999 12.86C9.21999 13.01 9.02999 13.08 8.82999 13.08C8.63999 13.08 8.44999 13.01 8.29999 12.86L5.97 10.53C5.68 10.24 5.68 9.75997 5.97 9.46997C6.26 9.17997 6.74 9.17997 7.03 9.46997L8.82999 11.27L12.97 7.14001C13.26 6.84001 13.74 6.84001 14.03 7.14001C14.32 7.43001 14.32 7.90001 14.03 8.20001Z"
                            fill="#52A754" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TestList',
    data(){
        return{
            questions: this.$store.getters.getQuestions
        }
    }
}
</script>

<style src="../css/styles.css"></style>