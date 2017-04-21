<template>
  <page-content page-title="Introduction" v-on:toggleSidenav="this.$parent.toggleSidenav">
    <div class="main-content">
      <div class="row">
        <div class="column">
          <h2 class="md-headline">Material Design</h2>
          <p>Vue Material is lightweight framework built exactly according to the <a href="http://material.google.com" target="_blank" rel="noopener">Material Design</a> specs. Build powerful and well-designed web apps that can can fit on every screen.</p>
        </div>

        <div class="column">
          <h2 class="md-headline">Full-featured</h2>
          <p>You can generate and use themes dynamically, use components on demand, take advantage of UI Elements and Components with an ease-to-use API and more...</p>

          <md-button class="md-primary md-raised" href="#/getting-started">Getting Started</md-button>
          <md-button class="md-primary md-raised" href="https://github.com/marcosmoura/vue-material" target="_blank" rel="noopener">Github</md-button>
        </div>
      </div>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .main-content {
    margin: 0 auto;
  }

  .example {
    margin-bottom: 24px;
    overflow: hidden;

    img {
      margin: -45px auto;
      display: block;
    }
  }

  .button-actions {
    margin-bottom: 16px;
    text-align: center;

    .introduction {
      margin-bottom: .8em;
      font-size: 20px;
      line-height: 1.6em;
    }

    .md-button {
      margin-left: 0;
      color: #fff !important;
    }
  }

  .row {
    margin: 0 -10px;
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    margin: 0 10px;
    flex: 1 1 30%;

    @media (max-width: 640px) {
      flex: 1 1 100%;
    }
  }
</style>