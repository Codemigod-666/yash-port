import connectToDB from "@/database/index.mjs";
import About from "@/models/About.mjs";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function PUT(req){
    try {
        await connectToDB();

        const extractData = await req.json();
        const {
            _id,
            aboutme,
            noofprojects,
            yearofexperience,
            nooflclients,
            skills,
          } = extractData;

          const updateData = await About.findOneAndUpdate(
            {
                _id: _id,
            },
            {
                aboutme,
                noofprojects,
                yearofexperience,
                nooflclients,
                skills
            },
            {new: true}
          )


          if(updateData){
            return NextResponse.json(
                {
                    success: true,
                    message: 'Updated Successfully'
                }
            )
          } else {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Something went Wrong ! please try again',
                }
            )
          }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again!"
        })
    }
}