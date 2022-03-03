import useCart from '@/composables/useCart'
import usePersonalDetails from '@/composables/usePersonalDetails'
import useToast from '@baldeweg/components/src/composables/useToast'
import i18n from '~b/i18n'
import { ref, computed } from '@vue/composition-api'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

export default function usePdf() {
  const isGenerating = ref(false)

  const { articles } = useCart()
  const { state } = usePersonalDetails()
  const { add } = useToast()

  const doc = new jsPDF()

  const theme = 'plain'

  const styles = {
    fontSize: 12,
    lineColor: '#cccccc',
    lineWidth: 0.1,
  }

  const personalDetails = computed(() => {
    return [
      (state.firstname ?? '') + ' ' + (state.surname ?? ''),
      state.staffNumber ?? '',
    ]
  })

  const data = computed(() => {
    let list = []

    articles.value.forEach((element) => {
      list.push([element.name, element.size, element.quantity])
    })

    list.push([
      {
        content: '',
        colSpan: 3,
        styles: { lineWidth: 0 },
      },
    ])
    list.push([
      {
        content: i18n.t('notes'),
        colSpan: 3,
        styles: { fontStyle: 'bold' },
      },
    ])
    list.push([
      {
        content: state.notes ?? '',
        colSpan: 3,
      },
    ])

    return list
  })

  const download = () => {
    isGenerating.value = true

    doc.setFontSize(16)
    doc.text(i18n.t('order'), 15, 20)
    doc.setFontSize(12)
    doc.text(personalDetails.value, 15, 35)
    doc.autoTable({
      theme,
      styles,
      columnStyles: {
        0: { cellWidth: 'auto' },
        1: { cellWidth: 20 },
        2: { cellWidth: 20 },
      },
      head: [[i18n.t('article'), i18n.t('size'), i18n.t('quantity')]],
      body: data.value,
      startY: 50,
    })

    doc
      .save('order_' + Math.round(new Date() / 1000) + '.pdf', {
        returnPromise: true,
      })
      .then(() => {
        isGenerating.value = false
        add({ type: 'success', body: i18n.t('pdf_generated') })
      })
  }

  return {
    isGenerating,
    download,
  }
}
