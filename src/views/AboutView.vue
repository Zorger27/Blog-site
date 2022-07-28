<template>
  <div class="about">
    <h1>This is a Website template for a blogger</h1>
    <h2>Back-end Technologies & Modules:</h2>
    <line></line>
    <ol>
      <li><a href="https://nodejs.org/en/" title="Node.js" target="_blank">Node.js</a></li>
      <li><a href="https://expressjs.com" title="Express.js" target="_blank">Express.js</a></li>
      <li><a href="https://www.npmjs.com/package/body-parser" title="body-parser" target="_blank">body-parser</a></li>
      <li><a href="https://www.npmjs.com/package/cors" title="cors" target="_blank">cors</a></li>
      <li><a href="https://www.npmjs.com/package/nodemon" title="nodemon" target="_blank">nodemon</a></li>
      <li><a href="https://jwt.io" title="JSON Web Tokens" target="_blank">JSON Web Tokens</a></li>
      <li><a href="https://axios-http.com/ru/" title="Axios" target="_blank">Axios</a></li>
    </ol>
    <h2>Front-end Technologies & Modules:</h2>
    <line></line>
    <ol>
      <li><a href="https://v3.ru.vuejs.org" title="Vue.JS v.3.0" target="_blank">Vue.JS v.3.0</a></li>
      <li><a href="https://www.npmjs.com/package/vue-property-decorator?activeTab=readme" title="Vue Property Decorator" target="_blank">Vue Property Decorator</a></li>
      <li><a href="https://vuex.vuejs.org" title="Vuex" target="_blank">Vuex</a></li>
      <li><a href="https://www.npmjs.com/package/vuex-class" title="Vuex Class" target="_blank">Vuex Class</a></li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li><a href="https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox" title="FlexBox CSS" target="_blank">FlexBox CSS</a></li>
      <li><a href="https://necolas.github.io/normalize.css/" title="Normalize.css" target="_blank">Normalize.css</a></li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li><a href="https://element-plus.org" title="Element Plus" target="_blank">Element Plus</a></li>
      <li><a href="https://kazupon.github.io/vue-i18n/" title="Vue I18n" target="_blank">Vue I18n</a></li>
    </ol>
    <h2>Storage Technology:</h2>
    <line></line>
    <ol>
      <li><a href="https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage" title="localStorage" target="_blank">localStorage</a></li>
    </ol>
    <h2>Testing:</h2>
    <line></line>
    <ol>
      <li><a href="https://www.cypress.io" title="CYpress" target="_blank">E2E - CYpress</a></li>
      <li><a href="https://jestjs.io" title="Jest" target="_blank">UNIT - Jest</a></li>
    </ol>
    <line></line>
    <h3>Project setup: <strong>npm install</strong></h3>
    <h3>Compiles and hot-reloads for development: <strong>npm run serve</strong></h3>
    <h3>Compiles and minifies for production: <strong>npm run build</strong></h3>
    <h3>Running CYpress tests: <strong>npm run test:e2e</strong></h3>
    <h3>Running Jest tests: <strong>npm run test:unit</strong></h3><br>
    <line></line>
  </div>
</template>

<style lang="scss" scoped>
.about {
  //display: inline-block;
  text-align: left;
  font-size: 18px;
  h1 {
    text-align: center;
  }
  h2 {
    margin-bottom: 2px;
  }
  h3 {
    margin-bottom: 2px;
  }
  ol {
    margin-top: 1px;
  }
  a{
    text-decoration: none;
    color: indigo;
  }
  strong {
    color: darkred;
  }
}
line{
  content:'';
  display:block;
  width:60%;
  border:1px solid;
  margin-bottom: 4px;
}
</style>