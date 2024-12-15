import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";

interface PageProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = await searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });
  if (!configuration) return notFound();

  const { imageUrl, height, width } = configuration;

  return (
    <DesignConfigurator
      imageDimensions={{ height, width }}
      imageUrl={imageUrl}
      configId={configuration.id}
    />
  );
};

export default Page;