import connectToDB from "@/database/index.mjs";
import Contact from "@/models/Contact.mjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectToDB();
        const extractData = await Contact.find({})

        if(extractData) {
            return NextResponse.json({
                success: true,
                data: extractData,
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong! Please try again.',
            })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again",
        })
    }
}