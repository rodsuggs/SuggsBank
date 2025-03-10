import React from 'react'
import HeaderBox from './HeaderBox.tsx'
import TotalBalanceBox from './TotalBalanceBox.tsx'

const loggedIn = { firstName : 'Rodney'}

const Home = () => {
  return (
    <div>
      <HeaderBox
      type='greeting'
      title='Welcome'
      user={loggedIn?.firstName || 'Guest'}
      subtext='Access and manage your account & transactions'
      />

      <TotalBalanceBox
      accounts={[]}
      totalBanks={3}
      totalCurrentBalance={94621.24}

      />
    </div>
  )
}

export default Home