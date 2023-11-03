
export default function Home() {
   return (
      <section className="h-screen w-screen justify-center items-center flex flex-col">
         <section className="w-96 min-h-[400px] border border-slate-200 shadow-sm rounded p-4 flex flex-col gap-3">
            <header className="w-full justify-between items-center flex flex-row">
               <h1 className="font-bold text-2xl">Todo list</h1>
               <span className="font-semibold rounded-full bg-red-400 text-sm text-white px-3">show completed</span>
            </header>
            <main className="w-full justify-center items-center">
               <div className="w-full flex-row justify-center items-center flex relative">
                  <input 
                     type="text" 
                     placeholder="describe a new task..."
                     className="w-full border border-slate-200 rounded px-4 py-1"
                  />
                  <button className="border border-slate-200 rounded px-2 py-0 absolute right-1">Add</button>
               </div>
               <ul className="w-full h-full gap-[1px] p-3">
                  <li className="w-full group  justify-start items-center flex flex-row gap-1 text-slate-500 ">
                     <input type="checkbox" id="draft" className="peer/draft"  />
                     <label htmlFor="draft" className="peer-checked/draft:line-through">Hello world</label>
                  </li>
                  <li className="w-full group  justify-start items-center flex flex-row gap-1 text-slate-500 ">
                     <input type="checkbox" id="draft" className="peer/draft"  />
                     <label htmlFor="draft" className="peer-checked/draft:line-through">Hello world</label>
                  </li>
                  <li className="w-full group  justify-start items-center flex flex-row gap-1 text-slate-500 ">
                     <input type="checkbox" id="draft" className="peer/draft"  />
                     <label htmlFor="draft" className="peer-checked/draft:line-through">Hello world</label>
                  </li>
                  <li className="w-full group  justify-start items-center flex flex-row gap-1 text-slate-500 ">
                     <input type="checkbox" id="draft" className="peer/draft"  />
                     <label htmlFor="draft" className="peer-checked/draft:line-through">Hello world</label>
                  </li>
                  
               </ul>
            </main>
         </section>
      </section>
   )
}
