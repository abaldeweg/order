import { reactive } from '@vue/composition-api'

export const state = reactive({
  staffNumber: null,
  firstname: null,
  surname: null,
  notes: null,
})

export default function usePersonalDetails() {
  return {
    state,
  }
}
