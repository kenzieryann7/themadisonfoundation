<template>
  <div>
    <div
      class="container-fluid border-top p-2 bg-dark text-white text-small footer"
    >
      <div class="row">
        <div class="col text-start fw-bold">
          &copy; {{ year }} The Madison Foundation
        </div>
        <div class="col text-end">
          <!-- FACEBOOK LOGO -->
          <a
            href="https://www.facebook.com/raymond.madison.568"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              fill="currentColor"
              class="bi bi-facebook me-2 pointer"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              /></svg
          ></a>
          <!-- TWITTER LOGO -->
          <a href="https://twitter.com/gmaddamg?s=20" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              fill="currentColor"
              class="bi bi-twitter me-3 pointer"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              /></svg
          ></a>
          <!-- GO FUND ME LINK -->
          <a
            href="https://www.gofundme.com/f/i-need-help-to-spay-and-neuter-strays?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              fill="currentColor"
              class="bi bi-cash-coin pointer"
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
              /></svg
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      showVersion: false,
    };
  },
  props: {},
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  methods: {
    toggleVersion() {
      this.showVersion = !this.showVersion;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer {
  cursor: pointer;
}
.text-small {
  font-size: 0.9em;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
