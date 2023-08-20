import Modal from "../../components/modal/index"

const AccountItem = ({onClose, open, accountName, amount, currency}) => {

  return (
    <Modal onClose={onClose} open={open}>
          <div className='flex flex-col justify-between'>
              <div className='flex flex-row items-center m-2 gap-2'>
                <p>Account name:</p>
                <p className="text-secondary text-lg font-sans font-bold">{accountName}</p>
              </div>  
              <div className='flex flex-row items-center m-2 gap-2'>
                <p>Amount:</p>
                <p className="text-secondary text-lg">{amount} {currency}</p>
              </div>         
          </div>
    </Modal>
  )
}

export default AccountItem