<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <a class="nav-link active" aria-current="page" href="#"
              ><router-link
                :to="{ name: 'Main' }"
                class="text-white button-link"
                >Our Misson
              </router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"
              ><router-link
                :to="{ name: 'Team' }"
                class="text-white button-link"
                >Our Team
              </router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link
                :to="{ name: 'Involved' }"
                class="text-white button-link"
                >Get Involved
              </router-link></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex">
          <button type="button" class="btn btn-success btn-lg">
            <router-link :to="{ name: 'Donate' }" class="text-white button-link"
              >Donate Now
            </router-link>
          </button>
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
.button-link {
  text-decoration: none;
}
.svg-size {
  width: 5rem;
  color: white;
}
</style>
