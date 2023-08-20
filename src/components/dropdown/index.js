import React, { ReactNode } from 'react';
import Input from '../input';
import ReactSelect from 'react-select';
import Creatable, { useCreatable } from 'react-select/creatable';

const InputDropdown = (props) => {
  const {
    label,
    placeholder,
    value,
    items,
    onSelect,
    create,
    isMulti
  } = props;
  return (
    <div className='mb-2'>
        <p>{label}</p>
            {create ? <Creatable
              onChange={(e) => {
                console.log(e);
                let value = e.value;
                if(!value) {
                  onSelect(e?.map?.(element => element.value))
                  return;
                }
                onSelect(value);
              }}
              options={items}
              className='border-none text-secondary'
              onCreateOption={(inputValue) => {
                create(inputValue);
              }}
              isMulti={isMulti}
            /> : (
              <ReactSelect
              onChange={(e) => {
                
                onSelect(e.value);
              }}
              
              options={items}
              className='border-none text-secondary'
              isMulti={isMulti}
            />
            )
          }
    </div>
  );
};

export default InputDropdown;