import connectToDB from "@/database/index.mjs";
import Contact from "@/models/Contact.mjs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const saveData = await Contact.create(extractData);

        if(saveData) {
            return NextResponse.json({
                success: true,
                message: 'Data saved Successfully',
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong! Please try again',
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again.",
        })
    }
}