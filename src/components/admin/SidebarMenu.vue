<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import {
  faGrip,
  faFileLines,
  faAngleLeft,
  faPenToSquare,
  faTableList,
  faTriangleExclamation,
  faToggleOff,
  faBarsStaggered,
  faCube,
} from '@fortawesome/free-solid-svg-icons'
import { faCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'

// have to setup separate file
const dropdownMenuOpenIs: Ref<boolean> = ref(false)
const subDropdownMenuOpenIs: Ref<boolean> = ref(false)

defineProps<{
    sidebarMenuOpenIs: boolean,
    sidebarMenuClose: () => void
}>()
</script>

<template>
    <!-- mobile menu display blur wrapper in sidebar -->
    <div
        class="min-h-screen w-full fixed top-0 left-0 z-20 lg:hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        :class="{ hidden: !sidebarMenuOpenIs }"
        @click="sidebarMenuClose"
      ></div>

      <div
        class="fixed z-20 inset-0 top-[3.8125rem] right-auto w-[17rem] pb-10 px-4 overflow-y-auto bg-white dark:bg-inherit border-r border-slate-900/10 dark:border-slate-300/10 shadow-2xl transition-all duration-300 awesome-scrollbar scroll-smooth"
        :class="sidebarMenuOpenIs ? 'lg:left-0' : '-left-[20rem]'"
      >
        <aside class="lg:text-sm lg:leading-6 relative mt-8 ta-sidebar">
          <ul
            class="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base"
          >
            <li class="mb-1">
              <a
                href="#"
                class="top-link active flex items-center lg:leading-6 text-base rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                ><div class="mr-2 shadow-sm dark:highlight-white/10">
                  <font-awesome-icon :icon="faGrip" class="text-lg" />
                </div>
                Dashboard</a
              >
            </li>
            <li class="mb-1">
              <a
                href="#"
                class="sub-link flex items-center lg:leading-6 relative rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                :class="{ active: dropdownMenuOpenIs }"
                @click="dropdownMenuOpenIs = !dropdownMenuOpenIs"
              >
                <div class="mr-2 shadow-sm dark:highlight-white/10">
                  <font-awesome-icon :icon="faFileLines" class="text-lg" />
                </div>
                Pages
                <font-awesome-icon
                  :icon="faAngleLeft"
                  class="absolute right-2"
                  :class="{ '-rotate-90': dropdownMenuOpenIs }"
                />
              </a>
              <!-- dropdown menu -->
              <ul class="my-1" :class="{ hidden: !dropdownMenuOpenIs }">
                <li>
                  <a
                    href="#"
                    class="sub-link block mb-1 rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <font-awesome-icon :icon="faCircle" class="mr-2" /> Blank
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="sub-link block rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                    @click="subDropdownMenuOpenIs = !subDropdownMenuOpenIs"
                    :class="{ active: subDropdownMenuOpenIs }"
                  >
                    <font-awesome-icon :icon="faCircle" class="mr-2" /> Auth
                    <font-awesome-icon
                      :icon="faAngleLeft"
                      class="absolute right-2 mt-1"
                      :class="{ '-rotate-90': subDropdownMenuOpenIs }"
                    />
                  </a>
                  <!-- sub dropdown menu -->
                  <ul class="my-1" :class="{ hidden: !subDropdownMenuOpenIs }">
                    <li>
                      <a
                        href="./pages/auth/register.html"
                        class="sub-link block mb-1 rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                      >
                        <font-awesome-icon :icon="faDotCircle" class="mr-2" /> Register
                      </a>
                    </li>
                    <li>
                      <a
                        href="./pages/auth/login.html"
                        class="sub-link block rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                      >
                        <font-awesome-icon :icon="faDotCircle" class="mr-2" /> Log In
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#"
                    class="sub-link block rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <font-awesome-icon :icon="faCircle" class="mr-2" /> 404 Error
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="sub-link block rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <font-awesome-icon :icon="faCircle" class="mr-2" /> 500 Error
                  </a>
                </li>
              </ul>
            </li>
            <li class="mb-1">
              <a
                href="#"
                class="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                ><div class="mr-2 shadow-sm dark:highlight-white/10">
                  <font-awesome-icon :icon="faPenToSquare" class="text-lg" />
                </div>
                Forms
                <span
                  class="bg-red-600 dark:bg-red-800 text-white/80 dark:text-white/50 text-sm font-semibold px-2 py-0.5 rounded absolute right-2"
                  >New</span
                ></a
              >
            </li>

            <li class="mb-1">
              <a
                href="#"
                class="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                ><div class="mr-2 shadow-sm dark:highlight-white/10">
                  <font-awesome-icon :icon="faTableList" class="text-lg" />
                </div>
                Tables</a
              >
            </li>

            <li class="mb-1">
              <span class="block my-1 text-sm p-2 pl-0 font-semibold uppercase">Components</span>
            </li>

            <li class="mb-1">
              <a
                href="#"
                class="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                ><div class="mr-2 shadow-sm dark:highlight-white/10">
                  <font-awesome-icon :icon="faTriangleExclamation" class="text-lg" />
                </div>
                Alerts</a
              >
            </li>

            <li class="mb-1">
              <a
                href="#"
                class="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                ><div class="mr-2 shadow-sm dark:highlight-white/10">
                  <font-awesome-icon :icon="faToggleOff" class="text-lg" />
                </div>
                Buttons</a
              >
            </li>

            <li class="mb-1">
              <a
                href="#"
                class="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                ><div class="mr-2 shadow-sm dark:highlight-white/10">
                  <font-awesome-icon :icon="faBarsStaggered" class="text-lg" />
                </div>
                Cards</a
              >
            </li>

            <li class="mb-1">
              <a
                href="#"
                class="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                ><div class="mr-2 shadow-sm dark:highlight-white/10">
                  <font-awesome-icon :icon="faCube" class="text-lg" />
                </div>
                Modals</a
              >
            </li>
          </ul>
        </aside>
      </div>
</template>