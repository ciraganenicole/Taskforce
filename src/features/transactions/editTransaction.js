import Modal from "../../components/modal/index"
import {useState} from 'react'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../firebase'
import Input from '../../components/input/index'
import Button from '../../components/button'

const EditTransaction = ({open, onClose, id, toEditAmount}) => {

  const [amount, setAmount] = useState(toEditAmount)

  const handleUpdate = async (e) => {
    e.preventDefault()
    const recordRef = doc(db, 'records', id)
    try{
      await updateDoc(recordRef, {
        amount: amount,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit record amount' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className="mt-8">
        <Input
          type="number"
          name="name"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
         <Button
           type="submit"
           label="Edit record" 
           height="h-[40px]"
         />
      </form> 
    </Modal>
  )
}

export default EditTransaction