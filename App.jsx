import Title from "./Title"; 
import SubTitle from "./SubTitle"; 
import { motion } from "framer-motion"; 
import { Flower, Phone} from 'lucide-react';
import Button from "../React/button";


const hidden = { opacity: 0, y: 20 }; 
const show = { opacity: 1, y: 0 }; 
function App() {
  return ( 
  <main className=" bg-stone-50 100vh min-h-screen flex flex-col items-center  ">
    <section className="w-full min-h-screen mx-auto flex flex-col gap-4 items-center mt-8">
      <Title className=" text-gray-500"> 최도현 | 이하나 </Title> 
<div className="h-[800px] w-full bg-cover rounded-[900px]" style={{ backgroundImage: 'url("./weddingphoto.jpg")', backgroundSize: "cover" }} />
 <SubTitle color="gray"> 2025년 10월 12일 일요일 오후 1시 30분<br />아펠가모 광화문 B2 뇨끼홀 </SubTitle> </section>
  <section className="min-h-screen container mx-auto flex flex-col gap-4 items-center text-center leading-3 mt-8">
     <motion.h4 initial={hidden} animate={show} transition={{ duration: 1, delay: 1 }} className="gowun-batang-regular text-2xl text-white font-semibold" > 
        <Flower /> <br />
      두 사람이 꽃과 나무처럼 걸어와서 <br />
     서로의 모든 것이 되기 위해<br /> 
     오랜 기다림 끝에 혼례식을 치르는 날 <br />
     세상을 더욱 아름다워라<br />
     <br />
     이해인,<div>{"<사랑의 사람들이여>"}</div> </motion.h4> 
     
     
     
     </section> 

     <section className="min-h-screen container mx-auto flex flex-col gap-8 items-center text-center leading-3 mt-8">
     <motion.h4 initial={hidden} animate={show} transition={{ duration: 1, delay: 1 }} className="gowun-batang-regular text-2xl text-white font-semibold" > 
       <SubTitle color="gray gap-3 text-[10px]  tracking-[10px] opacity-70 "> INVITAION</SubTitle> 
       <Title className=" text-gray-500"> 소중한 분들을 초대합니다 </Title> 
      살랑이는 바람결에 <br />
     사랑이 묻어나는 계절입니다.<br /> 
     여기 곱고 예쁜 두 사람이 <SubTitle className="text-red-400 opacity-70 inline">사랑</SubTitle> 을맺어<br />
     인생의 반려자가 되려 합니다.<br />
     새 인생을 시작하는 이 자리에 오셔서
     <SubTitle className="text-red-400 opacity-70 inline">축복</SubTitle>해 주시면 감사하겠습니다.
     <br />
    </motion.h4> 
     </section> 

      <section className="min-h-screen container mx-auto flex flex-col gap-8 items-center text-center leading-3 mt-8">
     <div className="h-[400px] w-full bg-cover rounded-[900px]" style={{ backgroundImage: 'url("./weddingphoto.jpg")', backgroundSize: "cover" }} />
     <motion.h4 initial={hidden} animate={show} transition={{ duration: 1, delay: 1 }} className="gowun-batang-regular text-gray-400  font-semibold" > 
     <Title className=" inline text-gray-500"> 최재만 · 이홍기</Title>의 딸      <Title className=" inline text-gray-500"> 하나</Title><br />
       <Title className=" inline text-gray-500"> 박재갑 · 이라임</Title>의 아들     <Title className=" inline text-gray-500"> 도현</Title>
       <Button className="flex items-center gap-2 border border-gray-500 text-gray-500"> <Phone /> 연락하기</Button>
         </motion.h4> 
   </section> 
     </main>
     ); 
    }
  
  
 
 
    export default App;
