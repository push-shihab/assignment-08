import { auth } from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
export const dynamic = "force-dynamic";
export const runtime = "nodejs"; // if needed

export const { POST, GET } = toNextJsHandler(auth);
