import {db} from '../../firebase'
import {collection, addDoc, Timestamp, updateDoc, getDoc, getFirestore, doc} from 'firebase/firestore'
import Modal from '../../components/modal'
import {useEffect, useState} from 'react'
import Input from '../../components/input'
import Button from '../../components/button'
import InputDropdown from '../../components/dropdown'
import { fetchData } from '../../utils/fetchData'


const AddNewTransaction = ({onClose, open}) => {

    const [amount, setAmount] = useState('')
    const [accounts, setAccounts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [account, setAccount] = useState('')

    console.log(subCategories);

    useEffect(() => {
     fetchData(setAccounts, 'accounts');
     fetchData(setCategories, 'categories');
     fetchData(setSubCategories, `subCategories`)
    },[])

    const handleCreateItem = async (collectionName, newItem, setter) => {
      try {
        const item = await addDoc(collection(db, collectionName), {
          ...newItem,
        })
        if(collectionName === 'categories') setter?.(item.id);
        else setter?.((prevState) => [...prevState, item.id]);
      } catch (err) {
        alert(err)
      }
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        console.log(account, accounts);
        const selectedAccount = accounts.find(acc => acc.id === account);
        if(parseFloat(selectedAccount.data.amount) < parseFloat(amount)) {
           alert("Insuficient balance, try with another account")
          return;
        }
        await addDoc(collection(db, 'records'), {
          amount,
          account,
          category,
          subCategory,
          created: Timestamp.now()
        })

        const accountReference = doc(db, 'accounts', selectedAccount.id);


        await updateDoc(accountReference, {amount: parseFloat(selectedAccount.data.amount) - parseFloat(amount) })
        onClose()
      } catch (err) {
        alert(err)
      }
    }
  
    return (
      <Modal modalLable='Add Account' onClose={onClose} open={open}>
        <form onSubmit={handleSubmit} className="mt-8">
        <Input
          type="number"
          name="number"
          label="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <InputDropdown
         placeholder= "Select Category"
         items={categories.map(cat => ({
          label: cat.data.name,
          value: cat.id
         }))}
         onSelect={(value) => {
          setCategory(value);
         }}
         create = {(value) => {
          handleCreateItem('categories', {name: value}, setCategory)
         }}
        />
        <InputDropdown
         items={subCategories.filter(sub => sub.data.categoryId === category).map(sub => ({
          value: sub.id,
          label: sub.data.name
         }))} 
         onSelect={(...values) => {
          console.log(values);
         }}
         create = {(value) => {
          if(category) {
            handleCreateItem('subCategories', {name: value, categoryId: category}, setSubCategory)
          } else {
            // alert category does not exist
          }
         }}
         isMulti
        />
        <InputDropdown
         items={accounts.map(acc => ({
          label: acc.data.accountName,
          value: acc.id
         }))} 
         onSelect={(value) => {
          setAccount(value);
         }}
        />
         <Button
           type="submit"
           label="Add record" 
           height="h-[40px]"
         />
        </form> 
      </Modal>
    )
  }
  
  export default AddNewTransaction