import connectToDB from "@/database/index.mjs";
import { NextResponse } from "next/server";
import Project from "@/models/Project.mjs";

export const dynamic = "force-dynamic"

export async function GET(req){
    try {

        await connectToDB();
        const extractData = await Project.find({});

        if(extractData){
            return NextResponse.json({
                success: true,
                data: extractData,
            })
        }
        else {
            return NextResponse.json({
                success: false, 
                message: 'Something went Wrong! Please try again',
            })
        }
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false, 
            message: 'Something went Wrong! Please try again',
        })
    }
}