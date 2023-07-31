<script setup lang="ts">
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faAngleRight,
  faBagShopping,
  faCartShopping,
  faHome,
  faTruckFast
} from '@fortawesome/free-solid-svg-icons'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js/auto'
import { Line, Doughnut } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const doughnutChart = {
  labels: ['Delivered', 'Canceled', 'New'],
  datasets: [
    {
      label: 'Order Status',
      data: [1040, 50, 370],
      backgroundColor: ['rgb(133, 105, 241)', 'rgb(164, 101, 241)', 'rgb(101, 143, 241)'],
      hoverOffset: 4
    }
  ]
}

const lineChart = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales Report',
      backgroundColor: 'hsl(252, 82.9%, 67.8%)',
      borderColor: 'hsl(252, 82.9%, 67.8%)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }
  ]
}
</script>

<template>
  <!-- main content header -->
  <div class="md:flex md:justify-between mb-6">
    <div>
      <h1 class="text-3xl text-slate-900 tracking-tight dark:text-slate-200">Dashboard</h1>
    </div>
    <div class="mt-3 md:mt-0">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <font-awesome-icon :icon="faHome" />
              <span class="ml-2">Home</span>
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <font-awesome-icon :icon="faAngleRight" class="text-slate-400" />
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                >Dashboard</span
              >
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <!-- end of main content header -->

  <section class="mb-5">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-6/12 xl:w-3/12">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 lg:mr-4"
        >
          <div class="flex-auto p-3">
            <div class="flex flex-wrap">
              <div class="text-white px-6 py-5 shadow-lg rounded bg-blue-500">
                <font-awesome-icon :icon="faUser" class="text-lg" />
              </div>

              <div class="ml-2">
                <h5 class="mb-3 font-semibold">New Users</h5>
                <p class="font-bold">450</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-6/12 xl:w-3/12">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 xl:mr-4"
        >
          <div class="flex-auto p-3">
            <div class="flex flex-wrap">
              <div class="text-white px-6 py-5 shadow-lg rounded bg-yellow-500">
                <font-awesome-icon :icon="faCartShopping" class="text-lg" />
              </div>

              <div class="ml-2">
                <h5 class="mb-3 font-semibold">Total Products</h5>
                <p class="font-bold">5045</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-6/12 xl:w-3/12">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 lg:mr-4"
        >
          <div class="flex-auto p-3">
            <div class="flex flex-wrap">
              <div class="text-white px-6 py-5 shadow-lg rounded bg-red-500">
                <font-awesome-icon :icon="faBagShopping" class="text-lg" />
              </div>

              <div class="ml-2">
                <h5 class="mb-3 font-semibold">New Orders</h5>
                <p class="font-bold">370</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-6/12 xl:w-3/12">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-3">
            <div class="flex flex-wrap">
              <div class="text-white px-6 py-5 shadow-lg rounded bg-green-500">
                <font-awesome-icon :icon="faTruckFast" class="text-lg" />
              </div>

              <div class="ml-2">
                <h5 class="mb-3 font-semibold">Sales</h5>
                <p class="font-bold">1040</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-5 flex flex-wrap">
    <div class="overflow-hidden w-full lg:w-8/12 mb-5 lg:mb-0">
      <div
        class="bg-white dark:bg-white/5 text-slate-800 dark:text-slate-100 shadow rounded-lg mr-0 lg:mr-3"
      >
        <div class="py-3 px-5 bg-gray-100 dark:bg-gray-400/10">Sales Report</div>
        <Line :data="lineChart" class="p-8" />
      </div>
    </div>

    <div
      class="bg-white dark:bg-white/5 text-slate-800 dark:text-slate-100 shadow rounded-lg overflow-hidden w-full lg:w-4/12"
    >
      <div class="py-3 px-5 bg-gray-100 dark:bg-gray-400/10">Order Report</div>
      <Doughnut :data="doughnutChart" class="p-8" />
    </div>
  </section>
</template>
