<template>
    <v-container fill-height class="error-container">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" lg="4">
          <v-card elevation="10" class="pa-6 text-center rounded-xl error-card">
            <!-- Error Code -->
            <v-sheet class="error-code">
              {{ error.statusCode }}
            </v-sheet>
  
            <!-- Error Message -->
            <v-sheet class="error-message">
              Oops! Something went wrong.
            </v-sheet>
  
            <p class="error-description">
              {{ error.message || "We couldn't find what you were looking for." }}
            </p>
  
            <!-- Go Home Button -->
            <v-btn color="primary" class="mt-4 error-btn" @click="handleClearError">
              Go Home
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { clearError } from "nuxt/app";
  
  defineProps(["error"]);
  
  const handleClearError = () => clearError({ redirect: "/" });
  </script>
  
  <style scoped>
  /* Background Styling */
  .error-container {
    height: 100vh;
    background: linear-gradient(135deg, #1e293b, #3b82f6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Card Styling */
  .error-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  /* Error Code Styling */
  .error-code {
    font-size: 6rem;
    font-weight: bold;
    color: #ef4444;
    text-shadow: 2px 2px 10px rgba(239, 68, 68, 0.5);
  }
  
  /* Error Message Styling */
  .error-message {
    font-size: 2rem;
    font-weight: 600;
    color: #1e293b;
    margin-top: 10px;
  }
  
  /* Description Text */
  .error-description {
    font-size: 1.1rem;
    color: #4b5563;
    margin-top: 10px;
    padding: 0 10px;
  }
  
  /* Button Styling */
  .error-btn {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 12px 20px;
  }
  </style>
  