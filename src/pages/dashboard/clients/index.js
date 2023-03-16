import React, { useState, useRef } from 'react'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { isMobile } from 'react-device-detect'
// import { useHistory } from 'react-router-dom'
import { Dialog } from 'primereact/dialog'
import { Toast } from 'primereact/toast'
import Button from 'components/Button'
// import { dashboardPath } from 'utils/const'
import { useDispatch, useSelector } from 'react-redux'

import { showSuccess } from 'utils/toast.helper'
import { actions } from 'slices/clientBills.slice'
import styles from './clients.module.scss'
import AddTransactionModal from '../addTransactionModal'
import AddBillModal from '../addBillModal'

const Clients = () => {
  // const history = useHistory()
  const toast = useRef(null)
  const dispatch = useDispatch()

  const { clientBills, statistics } = useSelector((state) => state.clientBills)

  const [currentTransactions, setCurrentTransactions] = useState([])
  const [currentBillNumber, setCurrentBillNumber] = useState('')
  const [currentBillID, setCurrentBillID] = useState('')

  const [currentTransaction, setCurrentTransaction] = useState(null)

  const [visible, setVisible] = useState(false)
  const [showAddTransactionModal, setShowAddTransactionModal] = useState(false)
  const [showAddBillModal, setShowAddBillModal] = useState(false)
  const [showDeleteBillModal, setShowDeleteBillModal] = useState(false)
  const [showDeleteTransactionModal, setShowDeleteTransactionModal] =
    useState(false)

  const deleteBillFooter = (
    <div>
      <Button
        label="Otkaži"
        onClick={() => setShowDeleteBillModal(false)}
        className="btn btn-outline-secondary"
      />
      <Button
        label="Obriši"
        className="btn btn-outline-primary"
        onClick={async () => {
          await dispatch(actions.deleteBill({ id: currentBillID }))
          showSuccess(toast, 'Račun je uspesno obrisan!')
          setShowDeleteBillModal(false)
        }}
      />
    </div>
  )

  const deleteTransactionFooter = (
    <div>
      <Button
        label="Otkaži"
        onClick={() => setShowDeleteTransactionModal(false)}
        className="btn btn-outline-secondary"
      />
      <Button
        label="Obriši"
        className="btn btn-outline-primary"
        onClick={async () => {
          await dispatch(
            actions.deleteTransaction({ transaction: currentTransaction }),
          )
          setCurrentTransactions(
            currentTransactions.filter((t) => t.id !== currentTransaction.id),
          )
          showSuccess(toast, 'Transakcija je uspesno obrisana!')
          setShowDeleteTransactionModal(false)
        }}
      />
    </div>
  )

  const renderFooter = () =>
    isMobile ? (
      <Tbody>
        <Tr>
          <Th style={{ textAlign: 'left' }}>Total:</Th>
          <Th style={{ textAlign: 'right', color: 'green' }}>
            Uplaćeno: {statistics.paid}
          </Th>
          <Th style={{ textAlign: 'right', color: 'red' }}>
            Preostalo: {statistics.leftToPay}
          </Th>
          <Th style={{ textAlign: 'right' }}>
            Ukupan iznos: {statistics.sumOfValues}
          </Th>
        </Tr>
      </Tbody>
    ) : (
      <Tbody>
        <Tr>
          <Th />
          <Th />
          <Th style={{ textAlign: 'left' }}>Total:</Th>
          <Th style={{ color: 'green' }}>{statistics.paid} RSD</Th>
          <Th style={{ color: 'red' }}>{statistics.leftToPay} RSD</Th>
          <Th>{statistics.sumOfValues} RSD</Th>
          <Th />
          <Th />
        </Tr>
      </Tbody>
    )

  const renderTransactions = () =>
    currentTransactions.map((transaction) => (
      <Tr key={transaction.id}>
        <Td>{transaction.transactionDate}</Td>
        <Td>{transaction.value} RSD</Td>
        <Td>
          <Button
            className="ml-3"
            onClick={() => {
              setCurrentTransaction(transaction)
              setShowDeleteTransactionModal(true)
            }}
          >
            <span
              style={{ fontSize: '1.7rem', color: 'red' }}
              className="pi pi-trash"
            />
          </Button>
        </Td>
      </Tr>
    ))

  const renderTableBody = () =>
    clientBills.map((bill) => (
      <React.Fragment key={bill.id}>
        <Tr>
          <Td>{bill.billNumber}</Td>
          <Td>{bill.billDate}</Td>
          <Td>{bill.name}</Td>
          <Td style={{ color: 'green' }}>{bill.paid} RSD</Td>
          <Td style={{ color: 'red' }}>{bill.leftToPay} RSD</Td>
          <Td>{bill.value} RSD</Td>
          <Td>
            {bill.value > bill.paid ? (
              <span
                style={{ fontSize: '1.7rem', color: 'red' }}
                className="pi pi-times-circle"
              />
            ) : (
              <span
                style={{ fontSize: '1.7rem', color: 'green' }}
                className="pi pi-check-circle"
              />
            )}
          </Td>
          <Td className={!isMobile && styles.actionsWrapper}>
            <Button
              onClick={() => {
                setCurrentBillNumber(bill.billNumber)
                setCurrentTransactions(bill.transactions)
                setVisible(true)
              }}
            >
              <span style={{ fontSize: '1.7rem' }} className="pi pi-book" />
            </Button>
            {/* <Button
              className="ml-4"
              onClick={() => {
                setCurrentBillNumber(bill.billNumber)
                setCurrentTransactions(bill.transactions)
                setVisible(true)
              }}
            >
              <span style={{ fontSize: '1.7rem' }} className="pi pi-pencil" />
            </Button> */}
            <Button
              className="ml-3"
              onClick={() => {
                setCurrentBillNumber(bill.billNumber)
                setCurrentBillID(bill.id)
                setShowAddTransactionModal(true)
              }}
            >
              <span
                style={{ fontSize: '1.7rem', color: 'green' }}
                className="pi pi-plus"
              />
            </Button>
            <Button
              className="ml-3"
              onClick={() => {
                setCurrentBillNumber(bill.billNumber)
                setCurrentBillID(bill.id)
                setShowDeleteBillModal(true)
              }}
            >
              <span
                style={{ fontSize: '1.7rem', color: 'red' }}
                className="pi pi-trash"
              />
            </Button>
          </Td>
        </Tr>
      </React.Fragment>
    ))

  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button
          label="Dodaj novi račun"
          className="btn btn-light"
          onClick={() => {
            setShowAddBillModal(true)
          }}
        />
      </div>
      <Toast ref={toast} position="top-center" />
      <AddTransactionModal
        visible={showAddTransactionModal}
        setVisible={setShowAddTransactionModal}
        billNumber={currentBillNumber}
        billID={currentBillID}
      />
      <AddBillModal
        visible={showAddBillModal}
        setVisible={setShowAddBillModal}
        isClient
      />
      <Dialog
        header="Obriši račun"
        visible={showDeleteBillModal}
        style={{ width: isMobile ? '80vw' : '50vw' }}
        onHide={() => setShowDeleteBillModal(false)}
        footer={deleteBillFooter}
      >
        <p className="m-0">
          Da li ste sigurni da želite da obrišete račun sa brojem{' '}
          {currentBillNumber}?
        </p>
      </Dialog>
      <Dialog
        header="Obriši transakciju"
        visible={showDeleteTransactionModal}
        style={{ width: isMobile ? '80vw' : '50vw' }}
        onHide={() => setShowDeleteTransactionModal(false)}
        footer={deleteTransactionFooter}
      >
        <p className="m-0">
          Da li ste sigurni da želite da obrišete transakciju?
        </p>
      </Dialog>
      <Dialog
        header={`Transakcije za racun sa brojem ${currentBillNumber}`}
        visible={visible}
        style={{ width: isMobile ? '80vw' : '50vw' }}
        onHide={() => setVisible(false)}
      >
        {currentTransactions.length > 0 ? (
          <Table className={styles.table}>
            <Thead>
              <Tr>
                <Th>Datum uplate</Th>
                <Th>Količina</Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>{renderTransactions()}</Tbody>
          </Table>
        ) : (
          <div>Nema transakcija za ovaj račun!</div>
        )}
      </Dialog>
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Broj računa</Th>
            <Th>Datum</Th>
            <Th>Ime klijenta</Th>
            <Th>Uplaćeno</Th>
            <Th>Preostalo</Th>
            <Th>Ukupan iznos</Th>
            <Th>Plaćen?</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>{renderTableBody()}</Tbody>
        {renderFooter()}
      </Table>
    </>
  )
}

Clients.propTypes = {}

Clients.defaultProps = {}

export default Clients