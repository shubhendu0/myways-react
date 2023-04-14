import React,{useState, useEffect} from 'react';
import './addFood.css';

const AddFood = () => {
  const getLocalItem = () =>{
    let list = localStorage.getItem("foodList");
    if(list){
        return JSON.parse(list);
    }
    else{
        return [];
    }
  }

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState(0);
  const [list, setList] = useState(getLocalItem);

  const handleSubmit = async()=>{
    if(!name || !category || !time){
      alert("Fill all fields")
      return false;
    }
    const newData={
      name,
      category,
      time
    }
    console.log(newData)
    console.log(list)
    setList((prevList) => [...prevList, newData]);
  }

  useEffect(()=>{
    localStorage.setItem("foodList", JSON.stringify(list))
  },[list]);

  return (
    <>
        <div className='add-food'>
          <div className='list-item'>
            Food Name : 
            <input type="text" name="food-name" onChange={(e)=>setName(e.currentTarget.value)}/>
          </div>
          
          <div className='list-item'> Food Type : 
            <select id="cars" onChange={(e)=> setCategory(e.currentTarget.value)}>
              <option value="Delicious Food">Delicious Food</option>
              <option value="Nutritious Food">Nutritious Food</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Beverages">Beverages</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>
          
          <div className='list-item'> Max Delivery Time : 
            <input type="number" value={time} onChange={(e)=>setTime(e.currentTarget.value)}/>
          </div>
          
          <div className='btn' >
            <button onClick={handleSubmit}> Submit </button>
          </div>
        </div>
    </>
  )
}

export default AddFood;