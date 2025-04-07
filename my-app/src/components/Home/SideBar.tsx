import React from 'react'




const loggedIn = { firstName : 'Rodney', lastName : 'Suggs'}

const sidebarLinks = [
  {
    imgUrl: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgUrl: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgUrl: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "/Transaction History",
  }
]

const SideBar = ({user}) => {
  return (
  <main className='sidebar'>
    <img src="/images/Chase-National-Bank-Logo.png" alt="Bank logo"></img>

    {/* {sidebarLinks.map((item)
    => {
      return (
        <Link href={item.route} key={item.label}></Link>
      )
    })} */}
    {/* adding comment to test git push */}
    {/* adding comment to test git push */}

  </main>
  )
}

export default SideBar