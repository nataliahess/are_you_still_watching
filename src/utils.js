export const formatReleaseDate = (date) => new Date(date).getFullYear()

export const formatCurrency = (amount) =>
  amount === 0
    ? 'N/A'
    : new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

export const debounce = (fn, delay) => {
  let timeout
  return (...args) => {
    const laterFn = () => {
      timeout = null
      fn(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(laterFn, delay)
  }
}
