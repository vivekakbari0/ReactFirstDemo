import React from "react";

function Table(props) {
  const { formData, updateHandler, deleteHandler } = props;

  return (
    <div className="overflow-auto rounded-sm m-7">
      <table className="bg-gradient-to-bl from-red-400 via-gray-300 to-blue-500 text-black w-full border-2 border-black mb-10 text-center">
        <tbody>
          <tr className="font-bold">
            <th className="border-2 border-black">ProfilePic</th>
            <th className="p-3 border-2 border-black">Name</th>
            <th className="border-2 border-black w-40">Birth Date</th>
            <th className="border-2 border-black w-40">Address</th>
            <th className="border-2 border-black w-40">Birth Place</th>
            <th className="border-2 border-black w-40">Mobile Number</th>
            <th className="border-2 border-black">Update</th>
            <th className="border-2 border-black">Delete</th>
          </tr>
          {formData.map((data, index) => (
            <tr className=" font-bold text-black" key={index}>
              <td className="border-2 border-black">
                <div className=" flex justify-center">
                  <img
                    src={data.Image}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
              </td>
              <td className="border-2 border-black w-40">
                {data.firstName} {data.lastName}
              </td>
              <td className="border-2 border-black w-40">{data.Birthdate}</td>
              <td className="border-2 border-black w-48 whitespace-nowrap">
                {data.currentAddress} ,
                <br />
                {data.permenentAddress}
              </td>
              <td className="border-2 border-black w-40 whitespace-nowrap">
                {data.birthPlace}
              </td>
              <td className="border-2 border-black w-40">{data.MobileNum}</td>
              <td className="border-2 border-black">
                <button
                  className=" bg-blue-500 text-white border-2 border-black px-2 py-1 rounded-md m-2"
                  onClick={() => updateHandler(index)}
                >
                  Update
                </button>
              </td>
              <td className="border-2 border-black">
                <button
                  className=" bg-red-800 text-white border-2 border-black px-2 py-1 rounded-md m-2"
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
