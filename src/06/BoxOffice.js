import box from "./BoxOffice.json";
export default function BoxOffice() {
  const dailyList = box.boxOfficeResult.dailyBoxOfficeList;
  const tags = dailyList.map(item =>
    <li key={item.movieCd}>
      [ {item.rank} ] {item.movieNm}
    </li>);
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-start items-center mt-10">
        <table
          className="w-11/12 text-left text-sm font-light text-surface">
          <thead
            className="border-b border-neutral-200 font-medium">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">First</th>
              <th scope="col" className="px-6 py-4">Last</th>
              <th scope="col" className="px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b border-neutral-200 hover:bg-neutral-100 ">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr
              className="border-b border-neutral-200  hover:bg-neutral-100">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr
              className="border-b border-neutral-200  hover:bg-neutral-100">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Larry</td>
              <td className="whitespace-nowrap px-6 py-4">Wild</td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
