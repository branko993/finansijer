import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { dashboardPath } from 'utils/const'
import { images } from 'theme'

import Button from 'components/Button'
import styles from './dashboard.module.scss'
import Greeting from './greeting'
import MobileDrawerNavigation from './drawer'
import WebDrawer from './webDrawer'
import SupplierWrapper from './suppliers/supplierWrapper'
import ClientsWrapper from './clients/clientsWrapper'

const Dashboard = () => {
  const { me } = useSelector((state) => state.app)
  const [isOpen, setIsOpen] = React.useState(!isMobile)

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const { pathname } = useLocation()

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false) // Close the navigation panel
    }
  }, [pathname])

  const renderToggleButton = () =>
    isMobile ? (
      <Button onClick={toggleDrawer}>
        <i
          className={`${
            isMobile ? styles.menuToggleRight : styles.menuToggleLeft
          } pi pi-align-justify`}
        />
      </Button>
    ) : (
      <></>
    )

  const renderDrawer = () =>
    isMobile ? (
      <MobileDrawerNavigation isOpen={isOpen} toggleDrawer={toggleDrawer} />
    ) : (
      <WebDrawer />
    )
  return (
    <div
      className={`${styles.root} ${
        isMobile ? styles.flexColumn : styles.flexRow
      }`}
    >
      {renderDrawer()}
      {renderToggleButton()}
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${
            !isMobile ? images.dashboardBackground : images.mobileBackground
          })`,
          backgroundSize: 'cover',
          backgroundPosition: !isMobile && 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Switch>
          <Route path={dashboardPath.greeting}>
            <Greeting me={me} toggleDrawer={toggleDrawer} />
          </Route>
          <Route path={dashboardPath.suppliers}>
            <SupplierWrapper />
          </Route>
          <Route path={dashboardPath.clients}>
            <ClientsWrapper />
          </Route>
          <Redirect
            to={dashboardPath.greeting}
            me={me}
            toggleDrawer={toggleDrawer}
          />
        </Switch>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
