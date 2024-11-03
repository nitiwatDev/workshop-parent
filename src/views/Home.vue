<template>
    <div class="decorated-text">
      FRONTEND TIPS BY INK
    </div>
  </template>
  
  <style scoped>
  .decorated-text {
    width: 500px;
    font-size: 2rem;
    font-weight: bold;
    color: #3498db; /* Blue color */
    text-align: center;
    margin: 20px auto 0 auto;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background: linear-gradient(90deg, rgba(255,0,150,0.1), rgba(0,204,255,0.1));
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #3498db;
    animation: highlightLoop 3s ease-in-out infinite, bounce 2s infinite;
  }
  
  @keyframes highlightLoop {
    0%, 100% {
      background-color: rgba(255, 255, 0, 0.3); /* Light yellow */
      color: #3498db; /* Blue color */
    }
    50% {
      background-color: rgba(255, 0, 0, 0.3); /* Light red */
      color: #fff; /* White color */
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  </style>