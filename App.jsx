import Title from "./Title"
import SubTitle from "./SubTitle"

function App() {
  return (
    <main className="bg-slate-200 h-[960px] flex flex-col items-center">
      <section className="container mx-auto flex  gap-4 justify-center items-center text-center leading-3">
        <Title color = "gray">최도현 | 이하나</Title>
        <div className="h-64 w-full" style={{backgroundImage: 'url("img.jpg")'}}/>
        <SubTitle color= "gray">2025년 10월 12일 일요일 오후 1시 30분<br/>아펠가모 광화문 B2 뇨끼홀</SubTitle>
      </section>

<section className="container mx-auto flex flex-col gap-4 items-center text-center leading-3  mt-8">
<motion.h4 color= "gray" 
        initial={hidden} animate={show} transition={{ duration: 1, delay: 1 }} 
        className="gowun-batang-regular text-4xl text-white font-semibold">두 사람이 꽃과 나무처럼 걸어와서 <br/>서로의 모든 것이 되기 위해</motion.h4>
</section>


    </main>


  );
}

export default App;