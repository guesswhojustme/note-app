
export default function Search () {
    return (
        <div className="flex gap-[4px]">
            <button className="  cursor-pointer " type="submit">
                <span>Search</span>
            </button>
            <input className="border border-black rounded-[8px] w-[400px] h-[25px]" type="text" />
        </div>
    );
}