import {db} from '../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import Modal from '../../components/modal'
import {useState} from 'react'
import Input from '../../components/input'
import Button from '../../components/button'


const AddNewAccount = ({onClose, open}) => {

    const [accountName, setAccountName] = useState('')
    const [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await addDoc(collection(db, 'accounts'), {
          accountName: accountName,
          amount: amount,
          currency: currency,
          created: Timestamp.now()
        })
        onClose()
      } catch (err) {
        alert(err)
      }
    }
  
    return (
      <Modal modalLable='Add Account' onClose={onClose} open={open}>
        <form onSubmit={handleSubmit} className="mt-8">
        <Input
          type="text"
          name="name"
          label="Account name"
          onChange={(e) => setAccountName(e.target.value.toUpperCase())}
          value={accountName}
        />
        <Input
          type="number"
          name="name"
          label="Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <Input
          type="text"
          name="name"
          label="Currency"
          onChange={(e) => setCurrency(e.target.value.toUpperCase())}
          value={currency}
        />
         <Button
           type="submit"
           label="Add" 
           height="h-[40px]"
         />
        </form> 
      </Modal>
    )
  }
  
  export default AddNewAccount