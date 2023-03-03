import React from 'react'
import Modal from 'components/Modal'
import Button from 'components/Button'
import FontIcon from 'components/FontIcon'
import { PropTypes } from 'prop-types'
import styles from './confirmEmail.module.scss'

const ConfirmEmail = ({ email, isOpen, toggle, onSubmit }) => (
  <Modal isOpen={isOpen} toggle={toggle} size="md" centered>
    <div className={styles.root}>
      <div className={styles.container}>
        <FontIcon name="envelope-open-text" className={styles.icon} />
        <h2 className={styles.title}>Потврдите вашу е-адресу</h2>
        <p className={styles.desc}>
          Послали смо електронску пошту на {'\t'}
          <a href={`mailto:${email}`}>{email}</a>
          {'\t'}
          како би потврдили вашу е-адресу. Након што примите е-пошту, кликните
          на линк како бисте довршили регистрацију.
        </p>
        <Button
          label="Назад на пријаву"
          className={`btn-pink-fill ${styles.backButton}`}
          onClick={onSubmit}
        />
      </div>
    </div>
  </Modal>
)

ConfirmEmail.propTypes = {
  email: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  onSubmit: PropTypes.func,
}

ConfirmEmail.defaultProps = {
  email: '',
  isOpen: false,
  toggle: () => null,
  onSubmit: () => null,
}

export default ConfirmEmail
