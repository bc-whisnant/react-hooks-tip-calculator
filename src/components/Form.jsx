import React, { useState, Fragment } from 'react'

function Form() {

  let [totalBeforeTip, setTotalBeforeTip] = useState(0)

  let [totalAfterTip, setTotalAfterTip] = useState(0)

  let handleChange = (event) => {
    setTotalBeforeTip(totalBeforeTip = event.target.value)
  }

  let calcTotal = (percentage) => {
    let total =
      parseFloat(totalBeforeTip) +
      parseFloat((totalBeforeTip * percentage) / 100)
    setTotalAfterTip(
      totalAfterTip = total.toFixed(2))
  }


    return (
      <Fragment>
        <div className='form-group'>
          <input
            type='number'
            className='form-control'
            id='total'
            placeholder='Enter total amount:'
            value={totalBeforeTip}
            onChange={handleChange}
          />
        </div>
        <div className='row mb-4'>
          <div className='mx-2'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={() => calcTotal(10)}
            >
              Tip 10%
            </button>
          </div>
          <div className='mx-2'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={() => calcTotal(15)}
            >
              Tip 15%
            </button>
          </div>
          <div className='mx-2'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={() => calcTotal(20)}
            >
              Tip 20%
            </button>
          </div>
        </div>
        <h4>Your total is: {totalBeforeTip}</h4>
        <h4>Your total after tipping is: {totalAfterTip}</h4>
      </Fragment>
    )
  }

export default Form
