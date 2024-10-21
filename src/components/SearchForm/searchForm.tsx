import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const SearchForm = () => {
  const [searchString, setSearchString] = useState("")

  console.log(searchString)

  return (
    <div className="w-full max-w-[680px] my-0 mx-auto py-0 px-auto">
      <div className="max-w-[1200px] ">
          <div>
            <form action="">
              <div className="flex bg-custom-white justify-between py-[1.4rem] px-[2.8rem] rounded-[3.8rem]">
                <input type="text" placeholder="The Lost World..." className="text-2xl p-[0.6rem] text-custom-black" onChange={(e) => setSearchString(e.target.value)} />
                <button type="submit" className="justify-center">
                  <FaSearch className="text-custom-purple flex items-center" size={32} />
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default SearchForm