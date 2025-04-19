<template>
  <div class="navigation-container">
    <button class="nav-button back" @click="goBack">
      <span>&larr; Back</span>
    </button>
    <button class="nav-button forward" @click="goForward">
      <span>Forward &rarr;</span>
    </button>
  </div>
</template>

  <script>
  export default {
    name: "NavigationButtons",
    methods: {
      goBack() {
        this.$router.go(-1); // Navigate to the previous route
      },
      goForward() {
        this.$router.go(1); // Navigate to the next route
      },
    },
  };
  </script>
  
<style scoped>
/* Container styling */
.text-center {
  text-align: center;
}

.navigation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Space between buttons */
  padding: 0;
  background-color:transparent;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
  width: 100%;
  margin: 0;
  
   /* Centered on the page */
}

/* Button styling */
.nav-button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 0;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 20px;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space for text/icon */
}

.nav-button:hover {
  background-color: #357acb;
  transform: translateY(-2px); /* Subtle lift effect */
}

.nav-button:active {
  transform: scale(0.98); /* Slight shrink on click */
}

/* Back button specific styling */
.nav-button.back {
  background-color: #ff5e57;
}

.nav-button.back:hover {
  background-color: #e74c3c;
}

/* Responsive design */
@media (max-width: 480px) {
  .nav-button {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.8rem;
  }

  .navigation-container {
    flex-direction: row;
    gap: 0.5rem;
  }
}
</style>  