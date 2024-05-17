import GalleryCard from "./GalleryCard" ;
export default function Gallery() {
  const imgUrl = 'https://www.pusan.ac.kr/_UPLOAD/IMAGE/Board/68/2024/5/sqRY3KUs8U1QieMZ.JPG' ;
  const title = "정신장애 인구의 폭염 영향 국내 첫 평가";
  const content = "정신장애 인구 폭염 초과입원 위험 최대 4.6배" ;
  const spTag = "지적장애인 1.23배, 자폐스펙트럼장애인 1.06배, 정신장애인 1.20배가 증가해" ;
  // const spTag = "태종대유원지" ;
  return (
    <div className="w-full grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 
                    gap-2">
      <GalleryCard imgUrl = {imgUrl}
                   title = {title}
                   content = {content}
                   spTag = {spTag} 
      />  
      <GalleryCard imgUrl = {imgUrl}
                   title = {title}
                   content = {content}
                   spTag = {spTag} 
      />
      <GalleryCard imgUrl = {imgUrl}
                   title = {title}
                   content = {content}
                   spTag = {spTag} 
      />
    
    </div>
  )
}
