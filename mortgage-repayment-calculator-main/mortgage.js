

document.addEventListener('DOMContentLoaded', () => {
    const overAll = document.getElementById('over_all')

    overAll.addEventListener('submit', (event) => {
      event.preventDefault()


      const number = document.getElementById('number')
      const term = document.getElementById('term')
      const rate = document.getElementById('rate')
      const input = document.querySelectorAll('input[type="radio"]')

      const numberValue = number.value.trim()
      const termValue = term.value.trim()
      const rateValue = rate.value.trim()


      // const inputValue = input.checked
      let inputChecked = false
      let radioValue = null
      input.forEach(radio => {
        if (radio.checked) {
          inputChecked = true
          // alert(radio.value)

          radioValue = radio.value
        }
      })


      isValid = true

      const red = document.getElementById('red_bacground')
      const numberErro = document.querySelector('.firstrequired')
      if (numberValue) {
        numberErro.style.display = 'none'
        red.style.border = '1px solid rgb(104, 102, 102)'
      } else {
        numberErro.style.display = 'block'
        red.style.backgroundColor = 'red'
        red.style.border = 'red'
        numberErro.previousElementSibling.lastElementChild.style.border = '2px solid red'
        // numberErro.previousElementSibling.childNodes.style.border = '1px solid red'
        // const bothOfThem = numberErro + red
        // alert(bothOfThem)
        isValid = false
      }

      const number_color_out = document.getElementById('number')
      number_color_out.addEventListener('click', (event) => {
        document.querySelector('.firstrequired').style.display = "none"
        document.getElementById('red_bacground').style.backgroundColor = 'rgb(141, 158, 180)'
        numberErro.previousElementSibling.lastElementChild.style.border = '1px solid black'
        red.style.border = '1px solid rgb(104, 102, 102)'
        numberErro.previousElementSibling.lastElementChild.style.transition = 'ease-in-out 3s'
        document.getElementById('red_bacground').style.style.transition = 'ease-in-out 5s'
      })
      // number_color_out.onkeyup = function(){
      //   const removeChar = this.value.replace(/[^0-9\.]/g, '')
      //   // console.log(removeChar);
      //   const removeDot = removeChar.replace(/\./g, '')
      //   this.value = removeDot

      //   const forComma = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      //   this.value = forComma
      //   isValid = false
      // };
      const red_second = document.getElementById('red_second_bacground')
      const termErro = document.querySelector('.secondrequired')
      if (termValue) {
        termErro.style.display = "none"
        red_second.style.border = '1px solid rgb(104, 102, 102)'
      }
      else {
        red_second.style.backgroundColor = 'red'
        red_second.style.border = 'red'
        termErro.parentNode.firstElementChild.nextElementSibling.firstElementChild.style.border = '2px solid red'
        termErro.style.display = "block"; isValid = false
      }

      const term_color_out = document.getElementById('term')
      term_color_out.addEventListener('click', (event) => {
      termErro.style.display = 'none'
      termErro.parentNode.firstElementChild.nextElementSibling.firstElementChild.style.border = '1px solid black'
      red_second.style.border = '1px solid rgb(104, 102, 102)'
      document.getElementById('red_second_bacground').style.backgroundColor = 'rgb(141, 158, 180)'
      })

      const red_third = document.getElementById('red_third_bacground')
      const rateErro = document.querySelector('.thirdrequired')
      if (rateValue) {
        rateErro.style.display = "none"
        red_third.style.border = '1px solid rgb(104, 102, 102)'
      }
      else {
        red_third.style.backgroundColor = 'red'
        red_third.style.border = 'red'
        rateErro.parentNode.firstElementChild.nextElementSibling.firstElementChild.style.border = '2px solid red'
        rateErro.style.display = "block"; isValid = false
      }

      rate.addEventListener('click', (event) => {
      document.getElementById('red_third_bacground').style.backgroundColor = 'rgb(141, 158, 180)'
      rateErro.parentNode.firstElementChild.nextElementSibling.firstElementChild.style.border = '1px solid black'
      rateErro.style.display = 'none'
      red_third.style.border = '1px solid rgb(104, 102, 102)'

      })

      const inputErro = document.querySelector('.foruthrequired')
      if (inputChecked) {
        inputErro.style.display = "none"
      }
      else {
        inputErro.style.display = "block"; isValid = false
      }

      const input_color_repayment = document.getElementById("repayment")
      input_color_repayment.addEventListener('click', (event) => {
        inputErro.style.display = 'none'
      })
      const input_color_interest = document.getElementById("interest")
      input_color_interest.addEventListener('click', (event) => {
        inputErro.style.display = 'none'
      })

      if (isValid) {
        const defaultDisplay = document.querySelector('.second_one')
        const resultDisplay = document.querySelector('.second_two')

        const Principal = numberValue
        const num_of_time = termValue
        const rate = rateValue / (100 * 12)

        const BracketContent = 1 + rate
        const numerator = Principal * rate * Math.pow(BracketContent, num_of_time)
        const denominator = Math.pow(BracketContent, num_of_time - 1)

        const monthlyRepayment = numerator / denominator

        const totalRepayment = monthlyRepayment * num_of_time

        const totalInterest = totalRepayment - Principal
        // const monthlyInterest = totalInterest / num_of_time

        if (radioValue === 'repayment') {
          document.querySelector('.print').style.display = 'block'
        inputErro.parentElement.firstElementChild.style.border = '2px solid yellow'

          function output_repayment() {
            document.querySelector('.print').innerHTML = '&euro; ' + monthlyRepayment.toLocaleString('en-us', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
            document.querySelector('.last').innerHTML = '&euro;' + totalRepayment.toLocaleString('en-us', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          };
          output_repayment()
        } else {
        inputErro.parentElement.firstElementChild.style.border = '1px solid hsl(0, 3%, 65%)'
          document.querySelector('.last').style.display = 'block'
        };
        if (radioValue === 'interest') {
          document.querySelector('.print').style.display = 'none'
        inputErro.previousElementSibling.style.border = '2px solid yellow'
          function output_total() {
            // document.querySelector('.print').innerHTML = Math.abs(monthlyInterest).toFixed(2)
            document.querySelector('.last').innerHTML = Math.abs(totalInterest).toLocaleString('en-us', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }
          output_total()
        } else {
        inputErro.previousElementSibling.style.border = '1px solid hsl(0, 3%, 65%)'
          document.querySelector('.last').style.display = 'block'
        }





        defaultDisplay.style.display = 'none'
        resultDisplay.style.display = 'block'
      }

      // alert(isValid)
    })


  })


  const clearAll = () => {
    const clear_all = document.getElementById('clear_all')
    clear_all.addEventListener('click', function () {
      location.reload()
    })
  }

  clearAll()

