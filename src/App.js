import { useState, useEffect } from "react"
import axios from "axios"



function App() {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);


  useEffect(() => {
    axios.get('https://dummyjson.com/products/').then((response) => {
      setData(response.data.products)
    })
    console.log(data);

  });
  const changeStatus = () => {
    if (status = false) {
      setStatus = true;
    }
    else {
      setStatus = false;
    }
  }


  return (
    <div className=" bg-orange-200">
      <div className=" ">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-10 rounded-xl ">
            <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden rounded-xl">
                <table class="min-w-full text-center ">
                  <thead class="border-b bg-gray-800 ">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-white px-3 py-4">
                        ID
                      </th>
                      <th scope="col" class="text-sm font-medium text-white px-2 py-4">
                        Thumbnail
                      </th>
                      <th scope="col" class="text-sm font-medium text-white px-3 py-4">
                        Name
                      </th>
                      <th scope="col" class="text-sm font-medium text-white px-3 py-4">
                        Brand
                      </th>
                      <th scope="col" class="text-sm font-medium text-white px-3 py-4">
                        Description
                      </th>
                      <th scope="col" class="text-sm font-medium text-white px-3 py-4">
                        price
                      </th>
                      <th scope="col" class="text-sm font-medium text-white px-3 py-4">
                        rating
                      </th><th scope="col" class="text-sm font-medium text-white px-3 py-4">
                        status
                      </th>
                      <th scope="col" class="text-sm font-medium text-white px-3 py-4">
                        Switch
                      </th>
                    </tr>
                  </thead >
                  <tbody>
                    {
                      data.map((iteam) =>
                        <tr class="bg-white border-b w-screen h-max">
                          <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            {iteam.id}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            <img src={iteam.thumbnail} alt="" />
                          </td>
                          <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            {iteam.title}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            {iteam.brand}
                          </td>
                          <td class="text-sm h-max w-10 text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            {iteam.description}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            {iteam.price}
                          </td>

                          <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            {iteam.rating}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <label class="inline-flex relative items-center cursor-pointer">
                              <input type="checkbox" value="" onClick={changeStatus} class="sr-only peer" />
                              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              
                            </label>
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {status? "Active":"Inactive"}
                              </span>
                          </td>
                        </tr>)
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
