class Chair {
  color: string
  headrest: boolean

  constructor(color: string, headrest: boolean){
    this.color = color
    this.headrest = headrest
  }
}

class Throne extends Chair {

}

class OfficeChair extends Chair {
  nowheels: number

  constructor(color: string, headrest: boolean, nowheels: number){
    super(color, headrest)
    this.nowheels = nowheels
  }
  
}

export default function Home() {


  let chair1 = new Chair("#ff0000",true);
  let throne2 = new Throne("#00ff00",true);
  let office3 = new OfficeChair("#0000ff",true);

  console.log(chair1,throne2,office3)

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    
      </main>
    </div>
  );
}
