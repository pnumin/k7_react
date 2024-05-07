export default function MyListItem() {
  return (
    <div className="flex w-full justify-center items-start p-2 bg-slate-200">
      <div className="flex w-1/3 m-2">
        <img src='./img/html.png' alt='html' />
      </div>
      <div className="flex flex-col w-2/3 m-2 p-2">
        <div>
          HTML
        </div>
        <div>
          HTML ....
        </div>
        <div>
          <span>❤️</span>
          <span>좋아요</span>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}
