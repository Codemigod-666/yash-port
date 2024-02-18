import connectToDB from "@/database/index.mjs";
import Experience from "@/models/Experience.mjs";
// import { connect } from "mongoose";

import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const saveData = await Experience.create(extractData);

        if(saveData){
            return NextResponse({
                success: true,
                message: 'Data saved successfully'
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: 'Something goes wrong! Please try again'
            });
        }
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something goes wrong! Please try again'
        });
    }
}