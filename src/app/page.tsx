import Link from "next/link";
import Head from "next/head";
import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="mx-8 justify-center lg:mx-96">
        <div className="my-8 flex flex-col"></div>
      </main>
    </HydrateClient>
  );
}
