'use server'
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import { redirect } from "next/navigation";
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    // .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  // Verify credentials && get the user


  const user = { username: formData.get('username'), password: formData.get("password") };

  // Create the session
  const expires = new Date(Date.now() + 1000 * 1000);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  let inputs ={password:formData.get("password"),username:formData.get("username")}
   const res = await axios.post("http://auth.spf.sc:3000/auth/login", inputs, {   });




  /* comment if  accessing the spf network (development)*/
 if (!res.data.success) {
   return { error: "Wrong Credentials!!!!!  Username should be (name.surname)  . Password is the one you log  in on you computer  " };
 }
  cookies().set("bam session", session, { expires, httpOnly: true });
  
  redirect("/");
}

export async function logout() {
  // Destroy the session
  cookies().set("bam session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("bam session")?.value;
  if (!session) return null;
 
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("bam session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 1000 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "bam session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
