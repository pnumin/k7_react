export default function TailSelect({id, ops, selRef, initText, handleChange }) {
  const opTag = ((!ops) ? ops.map( item => 
                                    <option key = {item}
                                            value= {item}>{item}</option>  
                                 )  
                        : [] ) ;

  return (
    <select id={id}
      ref={selRef}
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300
                             text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 
                             block w-full p-2.5">
      <option defaultValue=''>{initText}</option>
      {opTag}
    </select>
  )
}
