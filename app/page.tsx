import Search from "./ui/search";
import  Card  from "./ui/note-card";
import { Add } from "./ui/buttons";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col p-6 gap-[10] overflow-x-hidden">
      <div className="w-full flex justify-center gap-[50px] flex-wrap">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="flex justify-center gap-[5px]">
        <Search></Search>
        <Add></Add>
      </div>
    </main>
  );
}
