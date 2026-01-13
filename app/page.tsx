class Chair {
  color: string
  headrest: boolean
  occupied: boolean = false;
  name: string

  constructor(name: string, color: string, headrest: boolean){
    this.name = name
    this.color = color
    this.headrest = headrest
  }

  occupy(){
    this.occupied = true;
  }

  free(){
    this.occupied = false;
  }

}

class Throne extends Chair {

}

class OfficeChair extends Chair {
  nowheels: number

  constructor(name: string, color: string, headrest: boolean, nowheels: number){
    super(name, color, headrest)
    this.nowheels = nowheels
  }
  
}

export default function Home() {


  let chair1 = new Chair("Chair1","#ff0000",true);
  let throne2 = new Throne("Throne1","#00ff00",true);
  let office3 = new OfficeChair("OfficeChair1","#0000ff",true,5);

  let chairsCollection = [chair1,throne2,office3];
  console.log(chairsCollection);



  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ul>
        {chairsCollection.map((chair, index)=>{
          return <li key={index} style={{color: chair.color}}>{chair.color}</li>
        })}
        </ul>
      </main>
    </div>
  );
}
