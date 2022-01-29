<template>
  <header
    class="masthead"
    style="background-image: url('/assets/img/chevrolet-blazer.jpg')"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <div class="post-heading">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
