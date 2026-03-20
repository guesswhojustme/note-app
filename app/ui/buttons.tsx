import Link from "next/link";

export function Delete () {
    return(
        <div className="flex align-center">
            <button className="w-[50px] h-[30px] border rounded-[8px] hover:bg-gray-100 " type="submit">
                <span>Delete</span>
            </button>
        </div>
    );
}

export function Add () {
    return(
        <Link href="/create">
            <span>Add Note</span>
        </Link>
    );
}