import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <>
      <h1 className={"title"}>
        Go to <Link href="/">Home</Link>
      </h1>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
