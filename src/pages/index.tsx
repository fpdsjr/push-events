import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("../components/Notifications"), {
  ssr: false,
});

export default function Home() {
  return <DynamicHeader />;
}
