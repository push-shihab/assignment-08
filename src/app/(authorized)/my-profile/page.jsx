import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyProfie = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <main className="min-h-160 flex items-center">
      <div className="container mx-auto flex justify-center">
        <div className="border rounded-2xl">
          <div className="bg-[#0f172a] rounded-t-2xl flex flex-col items-center gap-3 p-10">
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={75}
              height={75}
              className="rounded-full border-2 border-[#38bcf6]"
            ></Image>
            <h2 className="text-2xl text-white">{session.user.name}</h2>
            <p className="text-[#38bcf6]">{session.user.email}</p>
          </div>
          <div className="rounded-b-2xl flex flex-col items-center py-5">
            <div className="px-5 w-150 space-y-2">
              <div className="border flex justify-between rounded-xl bg-base-300 w-full px-2 py-1">
                <span className="text-gray-500">Full Name</span>
                <span className="font-bold">{session.user.name}</span>
              </div>
              <div className="border flex justify-between rounded-xl bg-base-300 w-full px-2 py-1">
                <span className="text-gray-500">Email Address</span>
                <span className="font-bold">{session.user.email}</span>
              </div>
            </div>
            <div className="divider divider-start px-5"></div>
            <div className="w-full px-5">
              <Link
                href={"/update-profile"}
                className="btn text-white w-full rounded-xl bg-[#2563eb]"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfie;
