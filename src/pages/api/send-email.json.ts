import type { APIRoute } from "astro"
import { Resend } from "resend"
const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const GET: APIRoute = async({params, request}) => {
    const send = await resend.emails.send({
      from: "educa.te.ebook@gmail.com",
      to: "lucaas.sanchez16@gmail.com",
      subject: "Felicitaciones 🎉",
      html:"<p>Hi</p>",
      text:"Hi"

    })

    if(send.data){
      return new Response(
        JSON.stringify({
          message:send.data,
        }),{
          status:200,
          statusText: "OK",
        }
      )
    }
    if(send.error){
      return new Response(
        JSON.stringify({
          message:send.error,
        }),{
          status:500,
          statusText: "Internal Server Error",
        }
      )
    }
  }