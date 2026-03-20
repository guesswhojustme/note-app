import { Delete } from "./buttons";

export function CardWrapper (){
    return (
        <div>
            
        </div>
    ); 
};

export default function Card ({ 

}) {
    return (
        <div className="border rounded-[16px] border-gray w-[400px] h-[400px] p-2 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-[382] flex gap-[200px]">
                <div className="flex">
                    <h2 className="text-[32px]">
                    Note Title        
                    </h2>
                </div>
                <div className="flex align-center">
                    <Delete></Delete>
                </div>
            </div>
            <div>
                <p className="text-[24px]">
                    Preview
                </p>
            </div>
            <div>

            </div>
        </div>
    );
};