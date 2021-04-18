Vue.component('error', {
    template: `
        <p v-if="$root.error">Ошибка загрузки данных с серверха проверьте интернет соединение</p>
    `
})