import { reactive } from '@vue/composition-api'
import i18n from '~b/i18n'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

export default function useCart(articles, details) {
  const state = reactive({
    isGenerating: false,
  })

  const download = () => {
    state.isGenerating = true

    const doc = new jsPDF()

    const data = () => {
      let list = []

      articles.value.forEach((element) => {
        list.push([element.name, element.size, element.quantity])
      })

      return list
    }

    doc.setFontSize(12)
    doc.text(
      [
        details.staffNumber ?? '',
        (details.firstname ?? '') + ' ' + (details.surname ?? ''),
      ],
      15,
      20
    )

    doc.autoTable({
      theme: 'plain',
      styles: {
        fontSize: 12,
        lineColor: '#cccccc',
        lineWidth: 0.1,
      },
      columnStyles: {
        0: { cellWidth: 'auto' },
        1: { cellWidth: 20 },
        2: { cellWidth: 20 },
      },
      head: [[i18n.t('name'), i18n.t('size'), i18n.t('quantity')]],
      body: data(),
      startY: 50,
    })

    doc.autoTable({
      theme: 'plain',
      styles: {
        fontSize: 12,
        lineColor: '#cccccc',
        lineWidth: 0.1,
      },
      columnStyles: {
        0: { cellWidth: 'auto' },
      },
      head: [[i18n.t('notes')]],
      body: [[details.notes ?? '']],
    })

    doc
      .save('order_' + Math.round(new Date() / 1000) + '.pdf', {
        returnPromise: true,
      })
      .then(() => {
        state.isGenerating = false
      })
  }

  return {
    state,
    download,
  }
}
