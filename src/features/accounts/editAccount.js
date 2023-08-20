import Modal from "../../components/modal/index"
import {useState} from 'react'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../firebase'
import Input from '../../components/input/index'
import Button from '../../components/button'

const EditAccount = ({open, onClose, toEditName, toEditAmount, toEditCurrency, id}) => {

  const [accountName, setAccountName] = useState(toEditName)
  const [amount, setAmount] = useState(toEditAmount)
    const [currency, setCurrency] = useState(toEditCurrency)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const accountRef = doc(db, 'accounts', id)
    try{
      await updateDoc(accountRef, {
        accountName: accountName,
        amount: amount,
        currency: currency
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Account' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className="mt-8">
        <Input
          type="text"
          name="name"
          onChange={(e) => setAccountName(e.target.value.toUpperCase())}
          value={accountName}
        />
        <Input
          type="number"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <Input
          type="text"
          name="name"
          onChange={(e) => setCurrency(e.target.value.toUpperCase())}
          value={currency}
        />
         <Button
           type="submit"
           label="Edit account" 
           height="h-[40px]"
         />
      </form> 
    </Modal>
  )
}

export default EditAccount