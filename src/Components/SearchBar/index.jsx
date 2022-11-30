import React,{useState} from 'react'
import {MainSearch,DivDataResult,DivInput,DivInputIcon,SearchBarInput} from './styled';
import BookData from "../../Pages/sellers/Data.json";

function SearchBar({placeholder, data}) {
    const [filteredData,setFilteredData] = useState([]);
    const handleFilter = (event) =>{
        const searchWord = event.target.value
        const newFilter = data.filter((value) =>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })
        if(searchWord === ''){
            setFilteredData([])
        }else {
            setFilteredData(newFilter);
        }
    };
  return (
        <MainSearch>
            <DivInput>
                <SearchBarInput type ='text'placeholder={placeholder} data={BookData} onChange={handleFilter}></SearchBarInput>
              <DivInputIcon></DivInputIcon>
            </DivInput>
            {filteredData.length != 0 && (
            <DivDataResult>
                {filteredData.slice(0,10).map((value,key) => {
                    return (
                        <a className="data-Item" href={value.link} target="_blank">
                           <p> {value.title} </p>
                        </a>
                    )
                })}
            </DivDataResult>
            )}
        </MainSearch>
    
  )
}

export default SearchBar;