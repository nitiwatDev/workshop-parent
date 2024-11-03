<template>
  <div class="flex flex-col gap-4 justify-center">
    <h1 class="text-3xl font-bold underline text-center">
      INCREASE VALUE THROUGH COMPONENT
    </h1>
    <div class="grid grid-cols-2 mx-auto justify-center w-[400px] !divide-x">
      <div class="flex flex-col items-center justify-center">
        <p>Parent Component</p>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            {{ plusCount }}
            <span class="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            RESET
            <span class="sr-only">Icon description</span>
          </button>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <p>Child Component</p>
        <ChildrenCom
          ref="childComponentRef"
          @toggleValue="plusCount = $event"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChildrenCom from "../components/ChildrenCom.vue";
import { ref, type ComponentPublicInstance } from "vue";


const plusCount = ref(10);

</script>

<style scoped></style>
