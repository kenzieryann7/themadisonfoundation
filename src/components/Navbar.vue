<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
    <div class="container-fluid">
      <img
        src="@/assets/dogcat.svg"
        class="img-fluid rounded-start svg-size"
        alt="Madison Pets"
      />
      <a class="navbar-brand" href="#">The Madison Foundation</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'Main' }"
              class="text-white nav-link button-link"
              >Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Mission' }"
              class="text-white nav-link button-link"
              >Our Misson
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Team' }"
              class="text-white nav-link button-link"
              >Our Team
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Involved' }"
              class="text-white nav-link button-link"
              >Get Involved
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Gallery' }"
              class="text-white nav-link button-link"
              >Gallery
            </router-link>
          </li>
        </ul>
        <div class="d-flex">
          <a
            href="https://www.gofundme.com/f/i-need-help-to-spay-and-neuter-strays"
            target="_blank"
          >
            <button type="button" class="btn btn-success btn-lg">
              GoFundMe
            </button></a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-brand {
  font-size: 30px;
}
.nav-link:hover,
.nav-link:focus {
  color: #2db3f1 !important;
}
.button-link {
  font-size: 20px;
  text-decoration: none;
}
.svg-size {
  width: 5rem;
  color: white;
}
</style>
