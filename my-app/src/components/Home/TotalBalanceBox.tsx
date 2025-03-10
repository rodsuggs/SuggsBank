import React from 'react'
import Card from './Card'
import DoughnutChart from './DoughnutChart.tsx';

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}
  
const TotalBalanceBox = ({accounts=[], totalBanks, totalCurrentBalance}) => {
  return (
    <div className='total-balance-box'>
      <div className='total-balance-chart'>
          <DoughnutChart accounts={accounts}/>
      </div>

      <div className='total-bank-accounts'>
        <h2>
          Banks Accounts: {totalBanks}
        </h2>
        <p>
        Total Account Balance:&nbsp;
        </p>
        <h3>
        {formatAmount(totalCurrentBalance)}
        </h3>
      </div>
      
    </div>
  )
}

export default TotalBalanceBox