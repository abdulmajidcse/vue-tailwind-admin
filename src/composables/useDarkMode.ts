import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

type updateThemeType = (value?: string) => void
interface darkThemeType {
  darkThemeIs: Ref<boolean>
  updateTheme: updateThemeType
}

export default function useDarkTheme(): darkThemeType {
  const darkThemeIs: Ref<boolean> = ref(false)

  const updateTheme: updateThemeType = (value) => {
    enum Theme {
      key = 'theme',
      light = 'light',
      dark = 'dark'
    }

    if (value) {
      localStorage.setItem(Theme.key, value)
    } else if (!localStorage.getItem(Theme.key)) {
      localStorage.setItem(
        Theme.key,
        window.matchMedia(`(prefers-color-scheme: ${Theme.dark})`).matches
          ? Theme.dark
          : Theme.light
      )
    }

    const DOMElement: HTMLElement = document.documentElement
    const isDarkTheme: boolean = localStorage.getItem(Theme.key) === Theme.dark

    isDarkTheme ? DOMElement.classList.add(Theme.dark) : DOMElement.classList.remove(Theme.dark)

    darkThemeIs.value = isDarkTheme
  }

  onMounted(() => {
    updateTheme()
  })

  return { darkThemeIs, updateTheme }
}
