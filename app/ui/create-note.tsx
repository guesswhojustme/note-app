import Link from "next/link";

export default function Create () {
    return (
        <div className="flex justify-center items-center flex-col p-10">
            <form action="" className="w-[600px] h-[750px] border rounded-[16px] border-gray p-6">
                    <input name="title" className="w-full text-[32px] outline-none" placeholder="Note Title" type="text" />
                    <textarea className="w-full h-[600px] text-[24px] outline-none resize-none" name="note" id="note" placeholder="Body">
                    </textarea>
                    <div>
                        <Link href="/">
                            <span>Back</span>
                        </Link>
                    </div>
            </form>
        </div>
    );
}

// export default function Create() {
//   return (
//     <div className="flex flex-col items-center p-10"> 
//       {/* 2. Wrap everything in a form with the action */}
//       <form action={''} className="w-[600px] h-[750px] border rounded-[16px] border-gray-300 p-6 flex flex-col gap-4">
        
//         <input 
//           name="title" // Crucial: 'name' is how the server identifies the field
//           className="w-full text-[32px] outline-none" 
//           placeholder="Note Title" 
//           type="text" 
//         />
        
//         <textarea 
//           name="note" 
//           className="w-full h-[600px] text-[24px] outline-none resize-none" 
//           placeholder="Body"
//         ></textarea>

//         <div className="flex justify-between items-center">
//           <Link href="/" className="text-blue-500">Back</Link>
//           <button type="submit" className="bg-black text-white px-4 py-2 rounded">
//             Save Note
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }