<template>
  <div class="container-fluid text-dark fw-bold">
    <h1 class="fw-bold mb-5">Get Involved</h1>
    <div class="row mb-4">
      <div class="col-md-6">
        <div class="card bg-light mb-3 me-3 shadow">
          <div class="card-header h2 fw-bold">
            Make a Donation!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              class="bi bi-cash-coin ms-3"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
              />
              <path
                d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"
              />
              <path
                d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"
              />
              <path
                d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"
              />
            </svg>
          </div>
          <div class="card-body">
            <h5 class="card-title">Want to help?</h5>
            <p class="card-text ">
              Help fund our cause and help these animals in need. <br />All
              donations go straight to the foundation. <br />
              Help us make a difference!
            </p>
            <a
              href="https://www.gofundme.com/f/i-need-help-to-spay-and-neuter-strays"
              target="_blank"
              ><button type="button" class="btn btn-success btn-lg">
                DONATE NOW
              </button></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card bg-light mb-3 shadow">
          <div class="card-header h2 fw-bold">
            Share us on Social Media!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              class="bi bi-laptop ms-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"
              />
            </svg>
          </div>
          <div class="card-body">
            <h5 class="card-title">Tell Your Friends!</h5>

            <p class="card-text ">
              Share our website, Facebook profile, Twitter profile, or our
              GoFundMe! <br />Every share counts and helps us reach our goal to
              save animals in need. <br />
              Below you can choose where and how you would like to share our
              foundation.
            </p>
            <div class="row">
              <div class="col-sm">
                <div
                  class="fb-share-button"
                  data-href="https://www.facebook.com/raymond.madison.568"
                  data-layout="button"
                  data-size="large"
                >
                  <a
                    target="_blank"
                    href="https://www.facebook.com/raymond.madison.568"
                    class="fb-xfbml-parse-ignore"
                    >Share</a
                  >
                </div>
              </div>
              <div class="col-sm">
                <div>
                  <a
                    href="https://twitter.com/gmaddamg?ref_src=twsrc%5Etfw"
                    class="twitter-follow-button"
                    data-size="large"
                    data-show-screen-name="false"
                    data-show-count="false"
                    >Follow @gmaddamg</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img
          src="@/assets/pets/pet4.png"
          class="img-thumbnail img-fluid img mb-3 shadow me-3"
          alt="..."
        />

        <img
          src="@/assets/pets/pet6.png"
          class="img-thumbnail img-fluid img mb-3 shadow me-3"
          alt="..."
        />
        <img
          src="@/assets/pets/pet7.png"
          class="img-thumbnail img-fluid img mb-3 shadow me-3"
          alt="..."
        />

        <img
          src="@/assets/pets/pet8.png"
          class="img-thumbnail img-fluid img mb-3 shadow me-3"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Involved",
  components: {},
};
</script>

<style scoped>
.icon-size {
  height: 20px;
}
.img {
  height: 340px;
}
</style>
